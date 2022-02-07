const express = require('express');
const app = express();
const shortid = require('shortid');
const bodyParser = require("body-parser");
const Url = require('../models/Url');
const utils = require('../utils/util');
const moment = require('moment-timezone');

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
                        //console.log(origUrl);
                        return res.redirect('/');
                        //res.json(url);
                    } else {
                        const shortUrl = `${base}/${urlId}`;
                        const today = moment().tz('America/Manaus').format('DD/MM/YYYY HH:mm:ss');
                        url = new Url({
                            origUrl,
                            shortUrl,
                            urlId,
                            date: today,
                        });
                        //console.log(origUrl);
                        await url.save();
                        //res.json(url);
                        return res.redirect('/');

                    }
                } catch (err) {
                    console.log(err);
                    // res.status(500).json('Server Error');
                    return res.redirect('/');
                }
            } else {
                console.log('Invalid Original Url');
                return res.redirect('/');
            }



        } catch (err) {
            console.log(err);
            return res.redirect('/');
        }
    }

}

module.exports = new ShortUrlController();