'use strict';

var express             = require('express');
var router              = express.Router();
var MandrillSlackWebhook = require('enlighten-mandrill');
var MandrillWebhooks = require('../models').MandrillWebhooks;

// console.log('==============================');
// console.log(MandrillWebhooks.create({mandrillWebhookKey: 'Cameron', slackWebhookEndpoint: 'Dubas'}));
// console.log('==============================');

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


router.post('/', function(req, res, next) {
  console.log('MANDRILL CREATE');
  console.log(req.body);
  MandrillWebhooks.create(req.body).then(
    webhook => next(webhook)
  ).catch(
    err => {
    }
  );
//   var message = new MandrillSlackWebhook(req, process.env.MANDRILL_WEBHOOK_KEY, process.env.MANDRILL_WEBHOOK_ENDPOINT);

//   message.sendAllMessages(process.env.SLACK_URL)
//     .then(
//       data => {
//         next(data);
//         // handle success case;
//       },
//       err => {
//         // handle error case;
//       }
//     );

// //  return next(req.body);
});

module.exports = router;
