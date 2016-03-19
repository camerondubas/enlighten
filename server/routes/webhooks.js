'use strict';

var express             = require('express');
var router              = express.Router();
var MandrillSlackWebhook = require('enlighten-mandrill');
var MandrillWebhooks = require('../models').MandrillWebhooks;

router.post('/mandrill', function(req, res, next) {
  MandrillWebhooks.findAll().then(
    data => {
      data.forEach(function(value) {
        let message = new MandrillSlackWebhook(req, value.mandrillWebhookKey, process.env.MANDRILL_WEBHOOK_ENDPOINT);
        if (message.validateRequest()) {
          message.sendAllMessages(process.env.SLACK_URL)
            .then(
              data => next(data),
              err => next(err)
            );
        }
      })
    }
  );
});


router.post('/', function(req, res, next) {
  MandrillWebhooks.create(req.body).then(
    webhook => next(webhook)
  ).catch(
    err => console.log(err)
  );

});

module.exports = router;
