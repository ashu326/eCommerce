// const mclient = require('mongodb').MongoClient;
// var dbUrl = 'mongodb://localhost:27017/shop';

// module.exports.connect = function connect(callback) {
//     mclient.connect(dbUrl, function(err, conn){
//         /* exports the connection */
//         module.exports.db = conn;
//         callback(err);
//     });
// }

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbUrl = 'mongodb://localhost:27017/shop';
let _db;

const mongoConnect = callback => {
    MongoClient.connect(dbUrl)
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
if (_db) {
  return _db;
}
throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;






// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'gaurav12', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;



// for mysql
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'gaurav12',
// });

// module.exports = pool.promise();