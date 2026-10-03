import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const browser = await chromium.launch();
await mkdir('finsweet-screenshots', { recursive: true });
try {
  for (const [width,height] of [[320,740],[390,844],[844,390],[768,1024],[1024,768],[1600,1000]]) {
    const page = await browser.newPage({ viewport: { width,height }, reducedMotion: 'reduce' });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await page.goto('file://' + resolve('public/projects/finsweet/index.html'));
    await page.evaluate(async () => { document.querySelectorAll('img').forEach(img => img.loading = 'eager'); await document.fonts.ready; await Promise.all([...document.images].map(img => img.decode())); });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth+1), `Overflow at ${width}`);
    assert(await page.evaluate(() => document.fonts.check('400 16px Poppins') && document.fonts.check('600 54px Poppins')), 'Fonts must load');
    await page.screenshot({ path: `finsweet-screenshots/${width}x${height}.png`, fullPage: true });
    if (width <= 960) {
      await page.getByRole('button',{name:'Open menu',exact:true}).click();
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
      assert(await page.locator('.menu-toggle').evaluate(el => document.activeElement===el));
    }
    await page.locator('.faq-list details').nth(1).locator('summary').click();
    await page.waitForFunction(() => document.querySelectorAll('.faq-list details[open]').length === 1 && document.querySelectorAll('.faq-list details')[1].open);
    await page.locator('[data-project="0"]').click();
    assert(await page.locator('dialog').isVisible());
    await page.keyboard.press('Escape');
    assert(!(await page.locator('dialog').isVisible()));
    await page.locator('[data-gallery]').click();
    assert.equal(await page.locator('.dialog-gallery img').count(),3);
    await page.locator('.dialog-close').click();
    await page.locator('[data-blog="0"]').click();
    assert((await page.locator('#dialog-content').innerText()).includes('Article preview'));
    await page.keyboard.press('Escape');
    await page.locator('#name').fill('Test User'); await page.locator('#email').fill('invalid');
    await page.locator('#inquiry-form button').click();
    assert.equal(await page.locator('.form-status').innerText(),'');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#inquiry-form button').click();
    assert((await page.locator('.form-status').innerText()).includes('no inquiry has been sent'));
    assert.deepEqual(errors,[]);
    console.log(`PASS ${width}×${height}: assets, fonts, overflow, navigation, FAQ, dialogs, form`);
    await page.close();
  }
} finally { await browser.close(); }
