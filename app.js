const express = require('express');
const app = express();
const connectDB = require('./config/database');

// Body Parser
const app_port = process.env['APP_PORT'];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/pages/shortenerUrl.html');
  });
app.use('/find', require('./routes/index'));
app.use('/api', require('./routes/urls'));


// Server Setup
app.listen(app_port, function() {
    console.log('running on ' + app_port + '...');
  });