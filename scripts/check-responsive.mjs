import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {chromium} from 'playwright';
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4173'],{stdio:'inherit'});
let browser;
try {
  let ready=false;
  for(let i=0;i<100;i++){try{const r=await fetch('http://127.0.0.1:4173/portfolio/');if(r.ok){ready=true;break}}catch{}await new Promise(r=>setTimeout(r,100));}
  assert(ready,'Preview server did not start');
  await mkdir('responsive-screenshots',{recursive:true});
  browser=await chromium.launch();
  const sizes=[[320,740],[390,844],[844,390],[768,1024],[1440,900],[1920,1080]];
  for(const [width,height] of sizes){
    const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:4173/portfolio/',{waitUntil:'networkidle'});
    await page.locator('h1').waitFor();
    await page.evaluate(()=>document.fonts.ready);
    const measure=()=>page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
    const ru=await measure();assert(ru.document<=ru.viewport+1,`Russian overflow at ${width}: ${ru.document}`);
    assert.equal(await page.locator('.featured-project').count(),1);
    assert.equal(await page.locator('iframe').count(),0);
    assert(await page.locator('.project-visual').getAttribute('href')==='/portfolio/projects/shopco/');
    assert(await page.locator('[data-reveal]').first().isVisible());
    await page.locator('.project-visual').scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>[...document.querySelectorAll('.project-visual img')].every(img=>img.complete&&img.naturalWidth>0));
    await page.evaluate(()=>scrollTo(0,0));
    await page.screenshot({path:`responsive-screenshots/ru-${width}x${height}.png`,fullPage:true});
    if(width<=760){
      await page.getByRole('button',{name:'Открыть меню',exact:true}).click();
      assert.equal(await page.locator('#navigation a').first().evaluate(el=>el===document.activeElement),true);
      await page.keyboard.press('Escape');
      assert.equal(await page.getByRole('button',{name:'Открыть меню',exact:true}).getAttribute('aria-expanded'),'false');
      await page.getByRole('button',{name:'Открыть меню',exact:true}).click();
      await page.locator('#navigation a[href="#contact"]').click();
      await page.waitForFunction(()=>document.activeElement===document.querySelector('#contact'));
    }
    await page.getByRole('button',{name:'Switch to English',exact:true}).click();
    assert.equal(await page.locator('html').getAttribute('lang'),'en');
    const en=await measure();assert(en.document<=en.viewport+1,`English overflow at ${width}: ${en.document}`);
    await page.reload({waitUntil:'networkidle'});
    assert.equal(await page.locator('html').getAttribute('lang'),'en');
    assert((await page.title()).includes('Pavel Sedykh'));
    await page.screenshot({path:`responsive-screenshots/en-${width}x${height}.png`,fullPage:true});
    assert.deepEqual(errors,[]);
    await page.close();console.log(`PASS ${width}×${height}: both languages, overflow, navigation, project`);
  }
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'no-preference'});
  await page.goto('http://127.0.0.1:4173/portfolio/',{waitUntil:'networkidle'});
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>!document.querySelector('#contact [data-reveal]')?.classList.contains('reveal-pending'));
  await page.close();
} finally {await browser?.close();server.kill();}
