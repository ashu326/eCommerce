const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'gaurav12', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;



// for mysql
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'gaurav12',
// });

// module.exports = pool.promise();