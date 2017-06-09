var express = require('express');
var bookRouter = express.Router();
//var sql = require('mssql');
var mysql = require('mysql');

var router = function (nav) {

    bookRouter.route('/').get(function (req, res) {
        /*var request = new mysql.Request();
        request.query('select * from books', function (err, recordset) {
            console.log(recordset);
        });*/
        /*var con = mysql.createQuery("SELECT * FROM books", function (err, result) {
    if (err) throw err;
    console.log(result);
});*/
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "library"
        });

        con.query("SELECT * FROM books", function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.render('bookList', {
            nav: nav,
            books: library
        });
    });

    bookRouter.route('/:id').get(function (req, res) {
        var id = req.params.id;
        res.render('book', {
            nav: nav,
            book: library[id]
        });
    });

    return bookRouter;
};

module.exports = router;
