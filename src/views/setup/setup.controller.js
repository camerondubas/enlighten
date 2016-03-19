'use strict';

export default class SetupController {
  constructor(Webhooks) {
    this.Webhooks = Webhooks;
  }

  saveToServer() {
    console.log('Save To Server');
    var webhook = new this.Webhooks({
      mandrillWebhookKey: 'cameron',
      slackWebhookEndpoint: 'dubas'
    });

    webhook.$save();
   console.log(webhook);

  }

}

SetupController.$inject = ['Webhooks'];
