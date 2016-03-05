'use strict';

var express             = require('express');
var router              = express.Router();
var MandrillSlackWebhook = require('enlighten-mandrill');

router.post('/mandrill', function(req, res, next) {
  var message = new MandrillSlackWebhook(req, process.env.MANDRILL_WEBHOOK_KEY, process.env.MANDRILL_WEBHOOK_ENDPOINT);

  message.sendAllMessages(process.env.SLACK_URL)
    .then(
      data => {
        next(data);
        // handle success case;
      },
      err => {
        // handle error case;
      }
    );

//  return next(req.body);
});

module.exports = router;
