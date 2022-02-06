const express = require('express');
const app = express();
const connectDB = require('./config/database');

// Body Parser
const app_port = process.env['APP_PORT'];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes/routes'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/pages/shortenerUrl.html');
  });

// Server Setup
app.listen(app_port, function() {
    console.log('running on ' + app_port + '...');
  });