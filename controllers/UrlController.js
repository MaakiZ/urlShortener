const Url = require('../models/Url');

class UrlController {

  async listUrl(req, res) {
    try {
      const data = await Url.find({});
      if (data) {
        return res.json(data);
      } else res.json('Empty data');
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  }

  async findUrl(req, res) {
    try {
      const url = await Url.findOne({ urlId: req.params.urlId });
      if (url) {
        url.save();
        //return res.redirect(url.origUrl);
        return res.json(url.origUrl);
      } else res.status(404).json('Not found');
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  }

}

module.exports = new UrlController();