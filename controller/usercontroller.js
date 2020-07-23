const cheerio = require("cheerio");
const axios = require("axios");
const colors = require("colors");
const fs = require("fs");
const json2csv = require("json2csv").Parser;
module.exports = {
  flipkartFetch: () => {
    axios
      .get(
        "https://www.flipkart.com/search?q=mobiles&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=mobiles%7CMobiles&requestId=c101808f-c71a-4609-b769-69471c4e9b5a"
      )
      .then((fetched) => {
        const $ = cheerio.load(fetched.data);
        var arr = [];
        let name = $('div[class="col col-7-12"]> div[class="_3wU53n"]').text();
        let rating = $('div[class="hGSR34"]').text();
        let img = $(
          "#container > div > div.t-0M7P._2doH3V > div._3e7xtJ > div._1HmYoV.hCUpcT > div:nth-child(2) > div:nth-child(2) > div > div > div > a > div._3SQWE6 > div._1OCn9C > div > div > img"
        )
          .attr("src")
          .trim();

        let price = $('div[class="_1uv9Cb"]>[class="_1vC4OE _2rQ-NK"]')
          .text()
          .split("₹");
        let discount = $('div[class="VGWI6T"]> span').text().split(" ");
        arr.push({
          name,
          rating,
          img,
          price,
          discount,
        });
        const jcp = new json2csv();
        const csv = jcp.parse(arr);

        fs.writeFileSync("./datafile.csv", csv, "utf-8");
        console.log(arr);
      });
  },
  Urls: (req, res) => {
    axios
      .get(
        "https://www.flipkart.com/search?q=mobiles&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=mobiles%7CMobiles&requestId=c101808f-c71a-4609-b769-69471c4e9b5a"
      )
      .then((result) => {
        const $ = cheerio.load(result.data);
        const data = [];
        const name = $(
          'div[class="col col-7-12"]> div[class="_3wU53n"]'
        ).text();
        data.push(name);
        data.forEach((element) => {
          res.send(element.split(")"));
        });
      });
  },
};
