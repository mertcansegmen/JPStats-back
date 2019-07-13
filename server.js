const express = require("express");

const app = express();

const rp = require('request-promise');
const $ = require('cheerio');

var cors = require('cors');

app.use(cors());

app.get("/:keyword", function(req, res) {
    //const url = `https://www.linkedin.com/jobs/search/?keywords=${req.params.keyword}`;
    const url = `https://www.kariyer.net/is-ilanlari/kw=${req.params.keyword}`;
    rp(url)
        .then(function(html){
            //const count = $('.t-black--light', html).text();
            const count = $('#totalJobCount', html).text();
            res.send(count);
        })
        .catch(function(err){
            console.log(err);
        });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});