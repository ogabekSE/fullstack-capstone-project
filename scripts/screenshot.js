const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  const outPath = "./public/deployed_landingpage.png";
  await page.screenshot({ path: outPath, fullPage: true });
  console.log("Saved screenshot to", outPath);
  await browser.close();
})();
