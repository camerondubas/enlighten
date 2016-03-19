var Sequelize = require('sequelize');
// var sequelize = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: true
//   },
//   port: 5432
// });

var sequelize = new Sequelize('postgres://liycqqqiklyxgt:vlGUDmilc5b2VzbX-j4khevaYS@ec2-54-83-0-187.compute-1.amazonaws.com:5432/d10hcmhhs350sm',
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
