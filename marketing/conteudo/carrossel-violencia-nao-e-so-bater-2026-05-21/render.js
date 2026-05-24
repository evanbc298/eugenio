const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const htmlPath = path.resolve(__dirname, 'carrossel.html');
  await page.goto('file://' + htmlPath);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  const outDir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(outDir, `slide-${num}.png`) });
    console.log(`slide-${num}.png salvo`);
  }

  await browser.close();
  console.log('\nPronto. PNGs em ./instagram/');
})();
