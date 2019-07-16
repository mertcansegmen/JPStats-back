const express = require("express");
const rp = require('request-promise');
const $ = require('cheerio');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/:keyword", function(req, res) {
    const keyword = encodeURIComponent(req.params.keyword);
    //const url = `https://www.linkedin.com/jobs/search/?keywords=$keyword}`; //linkedin.com
    //const url = `https://www.kariyer.net/is-ilanlari/kw=${keyword}`; //kariyer.net
    const url = `https://tr.indeed.com/jobs?q=${keyword}&l=`; //indeed.com
    rp(url)
        .then(function(html){
            let count = "0";
            if($('#searchCount', html).text() !== ""){
                //const count = $('.t-black--light', html).text(); //linkedin.com
                //const count = $('#totalJobCount', html).text(); //kariyer.net
                const responseText = $('#searchCount', html).text(); //indeed.com

                count = responseText.replace(/[^0-9]/g, "").substring(1);
            }
            console.log(keyword, count);
            res.send(count);
        })
        .catch(function(err){
            console.log(err);
        });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});