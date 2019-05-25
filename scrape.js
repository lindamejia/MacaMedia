const request = require("request");
const cheerio = require("cheerio");

request("https://soundcloud.com/charts/top", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
