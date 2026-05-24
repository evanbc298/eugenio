const { chromium } = require('playwright');
const path = require('path');
const fs   = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page    = await browser.newPage();
  const file    = path.resolve(__dirname, 'carrossel.html');

  await page.goto(`file://${file}`);
  await page.waitForTimeout(2500); // wait for fonts + JS to render

  const slides = await page.$$('.slide');
  const dir    = path.join(__dirname, 'instagram');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  for (let i = 0; i < slides.length; i++) {
    const out = path.join(dir, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await slides[i].screenshot({ path: out });
    console.log(`${path.basename(out)} salvo`);
  }

  await browser.close();
  console.log('\nPronto. PNGs em ./instagram/');
})();
