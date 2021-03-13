const express = require("express");
const scraper = require("./index");

const app = express();

app.get("/", scraper.scraper);
app.listen(8000);
