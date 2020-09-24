const puppeteer = require("puppeteer");

var scrappper= async () => {
  try{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.codechef.com/rankings/INFY2019");
  const stats = await page.evaluate(() => {
        var list=[]; 
        var res = Array.from(document.querySelectorAll(".dataTable tr"));
         var header = res[0].innerText.split(" ").map((item)=>{
          if(item!==" "){
            return item.trim();
          }
        })
        list.push(header.slice(1));
        for(let i=1;i<res.length;i++){
         header = res[i].innerText.split("\n").map((item)=>{
          if(item!==" "){
            return item.trim();
          }
        })
        list.push(header.filter(item=>item!=''));
      }
      return list;
    })
    await browser.close();
   return { stats, success: true };
  }catch(err){
   return { err, success: false };
  }

};
module.exports= scrappper;



