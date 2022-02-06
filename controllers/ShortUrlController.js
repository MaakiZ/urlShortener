const express = require('express');
const app = express();
const shortid = require('shortid');
const bodyParser = require("body-parser");
const Url = require('../models/Url');
const utils = require('../utils/util');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

class ShortUrlController {

    async shortUrl(req, res) {
        try {
            // Prepare output in JSON format  
            const response = {
                origUrl: req.body.url
            };
            console.log(response);

            const { origUrl } = response;
            console.log("original url", response)
            const base = process.env.BASE;

            const urlId = shortid.generate();
            if (utils.validateUrl(origUrl)) {
                try {
                    let url = await Url.findOne({ origUrl });
                    if (url) {
                        res.json(url);
                    } else {
                        const shortUrl = `${base}/${urlId}`;

                        url = new Url({
                            origUrl,
                            shortUrl,
                            urlId,
                            date: new Date(),
                        });

                        await url.save();
                        res.json(url);
                        console.log(origUrl);
                        Url.push(origUrl);
                        res.send('Url is added to the database');
                    }
                } catch (err) {
                    console.log(err);
                    res.status(500).json('Server Error');
                }
            } else {
                res.status(400).json('Invalid Original Url');
            }



        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = new ShortUrlController();