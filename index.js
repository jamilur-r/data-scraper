const pupperteer = require("puppeteer");


exports.scraper =  async (req, res) => {
  try {
    const browser = await pupperteer.launch({
      headless: false,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1080 });
    await page.setDefaultNavigationTimeout(0);
    const link = "https://www.aljazeera.com/";
    await page.goto(link, {
      waitUntil: "load",
      // Remove the timeout
      timeout: 0,
    });

    let posts = await page.evaluate(() => {
      let images = Array.from(
        document.querySelectorAll(".article-card .article-card__image-wrap img")
      ).map((elm) => elm.src);
      let titles = Array.from(
        document.querySelectorAll(".article-card a h3")
      ).map((elm) => elm.innerText.trim());
      let excrepts = Array.from(
        document.querySelectorAll(".article-card p")
      ).map((elm) => elm.innerText.trim());
      let items = [];
      images.map((i, k) => {
        items = [
          ...items,
          {
            title: titles[k],
            excrept: excrepts[k],
            image: images[k],
          },
        ];
      });

      return items;
    });
    await page.close();
    await browser.close();
    return res.json({
      data: posts
    })
  } catch (error) {
    console.log(error);
  }
}
