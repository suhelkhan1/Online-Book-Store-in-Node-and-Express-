var express = require('express');
var authorRouter = express.Router();

var router = function (nav) {

    authorRouter.route('/').get(function (req, res) {
        res.render('authorList', {
            nav: nav,
            books: books
        });
    });

    authorRouter.route('/:id').get(function (req, res) {
        var id = req.params.id;
        res.render('author', {
            nav: nav,
            book: books[id]
        });
    });

    return authorRouter;
};

module.exports = router;
