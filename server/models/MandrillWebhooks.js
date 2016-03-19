"use strict";

 module.exports = (sequelize, DataTypes) => {
  var MandrillWebhook = sequelize.define('mandrill_webhook', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    mandrillWebhookKey: DataTypes.STRING,
    slackWebhookEndpoint: DataTypes.STRING
  });

  MandrillWebhook.sync({force: true});

  return MandrillWebhook;
};
