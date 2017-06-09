var express = require('express');
var app = express();
/*
var sql = require('mssql');
var config = {
    user: 'root',
    password: 'root',
    server: 'localhost',
    database: 'library',
    port: 3306,
    options: {
        encrypt: true
    }
};
sql.connect(config, function (err) {
    var result = sql.query('select * from books');
    console.dir(result);
    console.log('SQL Error::', err);
});*/
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "library"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

var nav = [
    {
        Link: '/books',
        Text: 'Book'
    },
    {
        Link: '/authors',
        Text: 'Author'
    }
];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');


app.use('/books', bookRouter);
app.use('/authors', authorRouter);

app.get('/', function (req, res) {
    res.render('index', {
        nav: nav
    });
});


app.listen(port, function (err) {
    console.log('The server is running on port:', port);
});
