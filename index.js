'use strict';

// Config Setup
require('./server/utils/get-config');

var express     = require('express');
var bodyParser  = require('body-parser');
var routes      = require('./server/routes');
var models      = require('./server/models');

var app = express();

app.set('port', (process.env.PORT || 5000));

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname + '/dist'));


app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
