var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DB_URL,
  {
    dialectOptions: {
      ssl: true
    }
  }
);

var models = {
  MandrillWebhooks: sequelize.import(`${__dirname}/MandrillWebhooks`)
};

module.exports = models;
