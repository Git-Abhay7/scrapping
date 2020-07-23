const fetch = require("node-fetch");
const cheerio = require("cheerio");
const axios = require("axios");
const colors = require("colors");
module.exports={
    
  flipkartFetch: async () => {
    const body = {
      a: 1,
    };
      fetch(
        "https://www.flipkart.com/search?q=mobiles&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=mobiles%7CMobiles&requestId=c101808f-c71a-4609-b769-69471c4e9b5a",
        {
          method: "post",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.text())
        .then((Result) => console.log(Result));
  },
  snapdealFetch: () => {
    const body = {
      a: 1,
    };
    fetch(
      "https://www.snapdeal.com/search?keyword=tshirts&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy/post",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.text())
      .then((json) => console.log(json));
  },

  Urls: (req, res) => {
    axios
      .get(
        "https://www.flipkart.com/search?q=mobiles&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=mobiles%7CMobiles&requestId=c101808f-c71a-4609-b769-69471c4e9b5a"
      )
      .then((result) => {
        const $ = cheerio.load(result.data);
        var DATA =[]
        const name = $(
          'div[class="col col-7-12"]> div[class="_3wU53n"]'
        ).text();
        DATA.push(name)
        // res.send(name.blue);
        DATA.forEach((element)=>{ 
            res.send(element.split(')'))
            
        })
        
      });

  },
}