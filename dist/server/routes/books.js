"use strict";
var express = require('express');
var Book = require('../model/book');
var BooksModel = require('../model/books');
var Books = (function () {
    function Books() {
        this.bookList = new BooksModel.Books([
            new Book.Book(1, 'In Search of Lost Time', 'Marcel Proust', 1913),
            new Book.Book(2, 'Ulysses', 'James Joyce', 1904),
            new Book.Book(3, 'Moby Dick', 'Herman Melville', 1851),
            new Book.Book(4, 'Nineteen Eighty Four', 'George Orwell', 1949)
        ]);
    }
    Books.routes = function () {
        var router = express.Router();
        var booksRoute = new Books();
        router.get('/books/', booksRoute.index.bind(booksRoute));
        router.post('/books/', booksRoute.create.bind(booksRoute));
        router.put('/books/:book_id', booksRoute.update.bind(booksRoute));
        router.delete('/books/:book_id', booksRoute.delete.bind(booksRoute));
        router.get('/books/:book', booksRoute.find.bind(booksRoute));
        router.post('/books/delete/:book_id', booksRoute.delete.bind(booksRoute));
        router.post('/books/update/:book_id', booksRoute.update.bind(booksRoute));
        return router;
    };
    Books.prototype.index = function (request, response) {
        response.json(this.bookList.list());
    };
    Books.prototype.create = function (request, response) {
        var bookTitle = request.body.book_title;
        var bookAuthor = request.body.book_author;
        var bookPublicationDate = request.body.book_pdate;
        if (!bookTitle) {
            response.status(500).send('Book title not found');
            return;
        }
        if (!bookAuthor) {
            response.status(500).send('Book author not found');
            return;
        }
        if (!bookPublicationDate) {
            response.status(500).send('Book publication date not found');
            return;
        }
        response.json(this.bookList.add(bookTitle, bookAuthor, bookPublicationDate));
    };
    Books.prototype.update = function (request, response) {
        var bookId = parseInt(request.params.book_id);
        var book = this.bookList.fetch(bookId);
        var bookTitle = request.body.book_title;
        var bookAuthor = request.body.book_author;
        var bookPublicationDate = request.body.book_pdate;
        if (!book) {
            response.status(404).send('Book not found');
            return;
        }
        if (bookTitle !== undefined) {
            book.setTitle(bookTitle);
        }
        if (bookAuthor !== undefined) {
            book.setAuthor(bookAuthor);
        }
        if (bookPublicationDate !== undefined) {
            book.setPublicationDate(bookPublicationDate);
        }
        response.json(book);
    };
    Books.prototype.delete = function (request, response) {
        var bookId = parseInt(request.params.book_id);
        var wasDeleted = this.bookList.delete(bookId);
        if (!wasDeleted) {
            response.status(404).send('Book not found');
            return;
        }
        else {
            response.json({ success: true });
        }
    };
    Books.prototype.find = function (request, response) {
        var bookQuery = request.params.book;
        var book = this.bookList.find(bookQuery);
        if (!book) {
            response.status(404).send('Book not found');
            return;
        }
        response.json(book);
    };
    return Books;
}());
exports.Books = Books;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FsR0EsQUFrR0MsSUFBQTtBQWxHWSxhQUFLLFFBa0dqQixDQUFBIiwiZmlsZSI6InJvdXRlcy9ib29rcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIEJvb2sgZnJvbSAnLi4vbW9kZWwvYm9vayc7XHJcbmltcG9ydCAqIGFzIEJvb2tzTW9kZWwgZnJvbSAnLi4vbW9kZWwvYm9va3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tzIHtcclxuICAgIHByaXZhdGUgYm9va0xpc3Q6IEJvb2tzTW9kZWwuQm9va3M7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdXRlcygpOiBleHByZXNzLlJvdXRlciB7XHJcbiAgICAgICAgbGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG4gICAgICAgIGxldCBib29rc1JvdXRlOiBCb29rcyA9IG5ldyBCb29rcygpO1xyXG4gICAgICAgIHJvdXRlci5nZXQoJy9ib29rcy8nLCBib29rc1JvdXRlLmluZGV4LmJpbmQoYm9va3NSb3V0ZSkpO1xyXG4gICAgICAgIHJvdXRlci5wb3N0KCcvYm9va3MvJywgYm9va3NSb3V0ZS5jcmVhdGUuYmluZChib29rc1JvdXRlKSk7XHJcbiAgICAgICAgcm91dGVyLnB1dCgnL2Jvb2tzLzpib29rX2lkJywgYm9va3NSb3V0ZS51cGRhdGUuYmluZChib29rc1JvdXRlKSk7XHJcbiAgICAgICAgcm91dGVyLmRlbGV0ZSgnL2Jvb2tzLzpib29rX2lkJywgYm9va3NSb3V0ZS5kZWxldGUuYmluZChib29rc1JvdXRlKSk7XHJcbiAgICAgICAgcm91dGVyLmdldCgnL2Jvb2tzLzpib29rJywgYm9va3NSb3V0ZS5maW5kLmJpbmQoYm9va3NSb3V0ZSkpO1xyXG4gICAgICAgIHJvdXRlci5wb3N0KCcvYm9va3MvZGVsZXRlLzpib29rX2lkJywgYm9va3NSb3V0ZS5kZWxldGUuYmluZChib29rc1JvdXRlKSk7XHJcbiAgICAgICAgcm91dGVyLnBvc3QoJy9ib29rcy91cGRhdGUvOmJvb2tfaWQnLCBib29rc1JvdXRlLnVwZGF0ZS5iaW5kKGJvb2tzUm91dGUpKTtcclxuICAgICAgICByZXR1cm4gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9va0xpc3QgPSBuZXcgQm9va3NNb2RlbC5Cb29rcyhbXHJcbiAgICAgICAgICAgIG5ldyBCb29rLkJvb2soMSwgJ0luIFNlYXJjaCBvZiBMb3N0IFRpbWUnLCAnTWFyY2VsIFByb3VzdCcsIDE5MTMpLFxyXG4gICAgICAgICAgICBuZXcgQm9vay5Cb29rKDIsICdVbHlzc2VzJywgJ0phbWVzIEpveWNlJywgMTkwNCksXHJcbiAgICAgICAgICAgIG5ldyBCb29rLkJvb2soMywgJ01vYnkgRGljaycsICdIZXJtYW4gTWVsdmlsbGUnLCAxODUxKSxcclxuICAgICAgICAgICAgbmV3IEJvb2suQm9vayg0LCAnTmluZXRlZW4gRWlnaHR5IEZvdXInLCAnR2VvcmdlIE9yd2VsbCcsIDE5NDkpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5kZXgocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSkge1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24odGhpcy5ib29rTGlzdC5saXN0KCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNyZWF0ZShyZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvb2tUaXRsZTogc3RyaW5nID0gcmVxdWVzdC5ib2R5LmJvb2tfdGl0bGU7XHJcbiAgICAgICAgbGV0IGJvb2tBdXRob3I6IHN0cmluZyA9IHJlcXVlc3QuYm9keS5ib29rX2F1dGhvcjtcclxuICAgICAgICBsZXQgYm9va1B1YmxpY2F0aW9uRGF0ZTogbnVtYmVyID0gcmVxdWVzdC5ib2R5LmJvb2tfcGRhdGU7XHJcbiAgICAgICAgaWYgKCFib29rVGl0bGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZCgnQm9vayB0aXRsZSBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJvb2tBdXRob3IpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZCgnQm9vayBhdXRob3Igbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFib29rUHVibGljYXRpb25EYXRlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoJ0Jvb2sgcHVibGljYXRpb24gZGF0ZSBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNwb25zZS5qc29uKHRoaXMuYm9va0xpc3QuYWRkKGJvb2tUaXRsZSwgYm9va0F1dGhvciwgYm9va1B1YmxpY2F0aW9uRGF0ZSkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZShyZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBib29rSWQ6IG51bWJlciA9IHBhcnNlSW50KHJlcXVlc3QucGFyYW1zLmJvb2tfaWQpO1xyXG4gICAgICAgIGxldCBib29rOiBCb29rLkJvb2sgPSB0aGlzLmJvb2tMaXN0LmZldGNoKGJvb2tJZCk7XHJcbiAgICAgICAgbGV0IGJvb2tUaXRsZTogc3RyaW5nID0gcmVxdWVzdC5ib2R5LmJvb2tfdGl0bGU7XHJcbiAgICAgICAgbGV0IGJvb2tBdXRob3I6IHN0cmluZyA9IHJlcXVlc3QuYm9keS5ib29rX2F1dGhvcjtcclxuICAgICAgICBsZXQgYm9va1B1YmxpY2F0aW9uRGF0ZTogbnVtYmVyID0gcmVxdWVzdC5ib2R5LmJvb2tfcGRhdGU7XHJcblxyXG4gICAgICAgIGlmICghYm9vaykge1xyXG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoNDA0KS5zZW5kKCdCb29rIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihib29rVGl0bGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBib29rLnNldFRpdGxlKGJvb2tUaXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGJvb2tBdXRob3IgIT09IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBib29rLnNldEF1dGhvcihib29rQXV0aG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYm9va1B1YmxpY2F0aW9uRGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJvb2suc2V0UHVibGljYXRpb25EYXRlKGJvb2tQdWJsaWNhdGlvbkRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbihib29rKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWxldGUocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib29rSWQ6IG51bWJlciA9IHBhcnNlSW50KHJlcXVlc3QucGFyYW1zLmJvb2tfaWQpO1xyXG4gICAgICAgIGxldCB3YXNEZWxldGVkOiBCb29sZWFuID0gdGhpcy5ib29rTGlzdC5kZWxldGUoYm9va0lkKTtcclxuXHJcbiAgICAgICAgaWYgKCF3YXNEZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDQpLnNlbmQoJ0Jvb2sgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3BvbnNlLmpzb24oe3N1Y2Nlc3M6IHRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmQocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib29rUXVlcnk6IHN0cmluZyA9IHJlcXVlc3QucGFyYW1zLmJvb2s7XHJcbiAgICAgICAgbGV0IGJvb2s6IEJvb2suQm9vayA9IHRoaXMuYm9va0xpc3QuZmluZChib29rUXVlcnkpO1xyXG5cclxuICAgICAgICBpZiAoIWJvb2spIHtcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwNCkuc2VuZCgnQm9vayBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNwb25zZS5qc29uKGJvb2spO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=