/**
 * Created by ashwani.mourya on 06/08/18.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');


// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('fetch_db', { title: 'DataBase' });
// });

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ashwani'
});

connection.connect();

/* GET users listing. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM student', function (err, rows, fields) {
        if (err) throw err;
        res.end(JSON.stringify(rows));

        // res.render('index', {
        //   "rows": rows
        // });
    });
    // connection.query('SELECT * FROM app_info', function (err, rows, fields) {
    //     if (err) throw err;
    //     res.end(rows.toString());
    //     // res.render('index', {
    //     //     "rows": rows
    //     // });
    // });
});
module.exports = router;
