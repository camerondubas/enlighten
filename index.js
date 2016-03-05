'use strict';

var express     = require('express');
var bodyParser  = require('body-parser');
var routes      = require('./server/routes');

var app = express();

// Config Setup
require('./server/utils/get-config');

app.set('port', (process.env.PORT || 5000));

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname + '/src'));

app.use('/', routes);

app.get('*', function(req, res) {
    res.sendfile('./src/index.html'); // load our public/index.html file
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
