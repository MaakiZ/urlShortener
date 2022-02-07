const Url = require('../models/Url');

class UrlController {

  async openUrl(req, res) {
    try {
      res.sendFile('openUrl.html', { root: 'public' });
    } catch (err) {
      console.log(err);
      return res.redirect('/');
    }
  }

  async createUrl(req, res) {
    try {
      res.sendFile('shortenerUrl.html', { root: 'public' });
    } catch (err) {
      console.log(err);
      return res.redirect('/');
    }
  }

  async listUrl(req, res) {
    try {
      const data = await Url.find({}).select('-_id  shortUrl origUrl urlId date');
      if (data) {
        return res.json(data);
      } else res.json('Empty data');
    } catch (err) {
      console.log(err);
      //res.status(500).json('Server Error');
      return res.redirect('/');
    }
  }

  async findUrl(req, res) {
    try {
      // Prepare output in JSON format  
      const response = {
        urlId: req.body.url
      };
      console.log(response);

      const { urlId } = response;
      console.log("original url", response)
      const base = process.env.BASE;
      const url = await Url.findOne({ urlId });
      if (url) {
        url.save();
        return res.redirect(url.origUrl);
        //return res.json(url.origUrl);
      } else res.status(404).json('Not found');
    } catch (err) {
      console.log(err);
      //res.status(500).json('Server Error');
      return res.redirect('/');
    }
  }

}

module.exports = new UrlController();