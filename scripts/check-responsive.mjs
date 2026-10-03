import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {chromium} from 'playwright';

const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4173'],{stdio:'inherit'});
let browser;
try{
  let ready=false;
  for(let i=0;i<100;i++){
    try{const r=await fetch('http://127.0.0.1:4173/portfolio/');if(r.ok){ready=true;break}}catch{}
    await new Promise(r=>setTimeout(r,100));
  }
  assert(ready,'Preview server did not start');
  await mkdir('responsive-screenshots',{recursive:true});
  browser=await chromium.launch();

  const routes=['','projects/','about/','skills/','contact/','work/shopco/','work/evklid/','work/roasted-coffee/','work/tea/','work/elegance-shop/'];
  for(const route of routes){
    const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
    const errors=[]; page.on('pageerror',e=>errors.push(e.message));
    const response=await page.goto('http://127.0.0.1:4173/portfolio/'+route,{waitUntil:'networkidle'});
    assert(response?.ok(),`Route failed: ${route}`);
    await page.locator('h1,h2').first().waitFor();
    const size=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
    assert(size.document<=size.viewport+1,`Overflow on ${route}: ${size.document}`);
    assert.deepEqual(errors,[]);
    await page.close();
  }

  for(const [width,height] of [[320,740],[768,1024],[1440,900],[1920,1080]]){
    const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
    await page.goto('http://127.0.0.1:4173/portfolio/',{waitUntil:'networkidle'});
    assert.equal(await page.locator('.featured-project').count(),5);
    if(width>=1100){
      const cardWidth=await page.locator('.featured-project').first().evaluate(el=>el.getBoundingClientRect().width);
      assert(cardWidth<360,`Project card too large at ${width}: ${cardWidth}`);
    }
    const size=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
    assert(size.document<=size.viewport+1,`Home overflow at ${width}`);
    await page.screenshot({path:`responsive-screenshots/home-${width}x${height}.png`,fullPage:true});
    await page.close();
  }

  const about=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  await about.goto('http://127.0.0.1:4173/portfolio/about/',{waitUntil:'networkidle'});
  assert.equal(await about.locator('#about').count(),1);
  assert.equal(await about.locator('#skills').count(),0);
  assert.equal(await about.locator('a[href="/portfolio/about/"][aria-current="page"]').count(),1);
  await about.close();

  const skills=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  await skills.goto('http://127.0.0.1:4173/portfolio/skills/',{waitUntil:'networkidle'});
  assert.equal(await skills.locator('#about').count(),0);
  assert.equal(await skills.locator('#skills').count(),1);
  assert.equal(await skills.locator('a[href="/portfolio/skills/"][aria-current="page"]').count(),1);
  await skills.close();

  const projects=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  await projects.goto('http://127.0.0.1:4173/portfolio/projects/',{waitUntil:'networkidle'});
  assert.equal(await projects.locator('.featured-project').count(),5);
  assert.equal(await projects.locator('a[href="/portfolio/work/shopco/"]').count(),1);
  await projects.getByRole('button',{name:'Switch to English',exact:true}).click();
  assert.equal(await projects.locator('html').getAttribute('lang'),'en');
  await projects.reload({waitUntil:'networkidle'});
  assert.equal(await projects.locator('html').getAttribute('lang'),'en');
  await projects.close();

  const mobile=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  await mobile.goto('http://127.0.0.1:4173/portfolio/',{waitUntil:'networkidle'});
  await mobile.getByRole('button',{name:'Открыть меню',exact:true}).click();
  assert(await mobile.locator('.navigation.is-open').isVisible());
  await mobile.close();

  for(const route of ['','opened_product.html','checkout.html']){
    const page=await browser.newPage({viewport:{width:1440,height:900}});
    const response=await page.goto('http://127.0.0.1:4173/portfolio/projects/roasted-coffee/'+route,{waitUntil:'networkidle'});
    assert(response?.ok());
    await page.close();
  }
}finally{
  await browser?.close();
  server.kill();
}
