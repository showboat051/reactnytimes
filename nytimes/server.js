const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const request = require("request");
const mongodb = require("mongodb");
const PORT = process.env.PORT || 3001;
const cheerio = require("cheerio");
const axios = require('axios');

const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytimes"
);

//Website for scraping

axios.get('https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page').then(function(html){
console.log('HTML: ' + html.data)

var $ = cheerio.load(html);
console.log("DATA: "+ $ )
var results = {};
$("#page").each(function(i, element){
    var links = $(element).children.attr("href");
console.log(links);
    // results.push({
    //     link:link
    


})
// });    console.log(results);
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
