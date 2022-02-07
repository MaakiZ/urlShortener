const express = require("express");

const routes = express.Router();
const UrlController = require("../controllers/UrlController");
const ShortUrlController = require("../controllers/ShortUrlController");

routes.get("/index", UrlController.listUrl);

routes.get("/create", UrlController.createUrl);

routes.get('/openUrl', UrlController.openUrl);

//routes.get('/:urlId', UrlController.findUrl);

routes.post('/find', UrlController.findUrl);

routes.post("/short", ShortUrlController.shortUrl);

module.exports = routes;