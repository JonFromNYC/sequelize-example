require("dotenv").config();

// require sequelize
const Sequelize = require('sequelize');

// new conenction to a MySql target database
const sequelize = new Sequelize('target_database', 'root', process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

// Create a Table and define its attributes
const User = sequelize.define('test_table', {
  col1_name: Sequelize.STRING,
  col2_date: Sequelize.DATE,
  col3_int: Sequelize.INTEGER,
});

// This creates the table you defined above with the data you want
// Define what you want in each column
sequelize.sync()
  .then(() => User.create({
    col1_name: 'Strings',
    col2_date: new Date(1999, 09, 09),
    col3_int: 12345
  }))
  .then(testThis => {
    console.log(testThis.toJSON());
  });


  /**
   *    STEPS TO MAKE THIS WORK
   * 
   *    Create a database in MySql.
   *    npm init
   *    npm install --save sequelize
   *    npm install mysql
   *    npm install --save mysql2
   */