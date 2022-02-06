const express = require("express");

const routes = express.Router();
const UrlController = require("../controllers/UrlController");
const ShortUrlController = require("../controllers/ShortUrlController");

routes.get("/index", UrlController.listUrl);

routes.get('/:urlId', UrlController.findUrl);

routes.post("/short", ShortUrlController.shortUrl);

module.exports = routes;