"use strict";
var BookModel = require('./book');
var Books = (function () {
    function Books(books) {
        var _this = this;
        if (books === void 0) { books = []; }
        this.booksList = new Array();
        books.forEach(function (book) { return _this.booksList.push(book); });
    }
    Books.prototype.list = function () {
        return this.booksList;
    };
    Books.prototype.add = function (bookTitle, bookAuthor, bookPublicationDate) {
        var bookIds = this.booksList.map(function (book) { return book.getId(); });
        var bookId = Math.max.apply(Math, bookIds) + 1;
        var book = new BookModel.Book(bookId, bookTitle, bookAuthor, bookPublicationDate);
        this.booksList.push(book);
        return this.booksList;
    };
    Books.prototype.delete = function (bookId) {
        var deleted = false;
        this.booksList = this.booksList.filter(function (book) {
            deleted = deleted || book.getId() === bookId;
            return book.getId() !== bookId;
        });
        return deleted;
    };
    Books.prototype.fetch = function (bookId) {
        return bookId && this.booksList.filter(function (book) { return book.getId() === bookId; }).shift();
    };
    Books.prototype.find = function (bookQuery) {
        var bookId = parseInt(bookQuery);
        bookQuery = bookQuery.toLowerCase();
        return this.booksList.filter(function (book) { return book.getId() === bookId
            || book.getTitle().toLowerCase() === bookQuery
            || book.getAuthor().toLowerCase() === bookQuery; }).shift();
    };
    return Books;
}());
exports.Books = Books;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2Jvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLFNBQVMsV0FBTSxRQUUzQixDQUFDLENBRmtDO0FBRW5DO0lBRUksZUFBWSxLQUFpQztRQUZqRCxpQkFnREM7UUE5Q2UscUJBQWlDLEdBQWpDLFVBQWlDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWtCLENBQUM7UUFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FDVCxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF6QixDQUF5QixDQUN0QyxDQUFDO0lBQ04sQ0FBQztJQUNNLG9CQUFJLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ00sbUJBQUcsR0FBVixVQUFXLFNBQWlCLEVBQUUsVUFBa0IsRUFBRSxtQkFBMkI7UUFFekUsSUFBSSxPQUFPLEdBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUMzQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZLENBQ3pCLENBQUM7UUFDRixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksRUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHNCQUFNLEdBQWIsVUFBYyxNQUFjO1FBRTFCLElBQUksT0FBTyxHQUFZLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNwQyxVQUFDLElBQW9CO1lBQ25CLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLE1BQU0sQ0FBQztZQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLE1BQU0sQ0FBQTtRQUNoQyxDQUFDLENBQ0YsQ0FBQTtRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNNLHFCQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQ2xDLFVBQUMsSUFBb0IsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxNQUFNLEVBQXZCLENBQXVCLENBQ3BELENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ00sb0JBQUksR0FBWCxVQUFZLFNBQWlCO1FBQzNCLElBQUksTUFBTSxHQUFXLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDeEIsVUFBQyxJQUFvQixJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLE1BQU07ZUFDOUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVM7ZUFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsRUFGckIsQ0FFcUIsQ0FDbEQsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhEWSxhQUFLLFFBZ0RqQixDQUFBIiwiZmlsZSI6Im1vZGVsL2Jvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQm9va01vZGVsIGZyb20gJy4vYm9vaydcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rcyB7XHJcbiAgICBwcml2YXRlIGJvb2tzTGlzdDogQXJyYXk8Qm9va01vZGVsLkJvb2s+O1xyXG4gICAgY29uc3RydWN0b3IoYm9va3M6IEFycmF5PEJvb2tNb2RlbC5Cb29rPiA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5ib29rc0xpc3QgPSBuZXcgQXJyYXk8Qm9va01vZGVsLkJvb2s+KCk7XHJcbiAgICAgICAgYm9va3MuZm9yRWFjaChcclxuICAgICAgICAgICAgKGJvb2spID0+IHRoaXMuYm9va3NMaXN0LnB1c2goYm9vaylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxpc3QoKTogQXJyYXk8Qm9va01vZGVsLkJvb2s+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib29rc0xpc3Q7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkKGJvb2tUaXRsZTogc3RyaW5nLCBib29rQXV0aG9yOiBzdHJpbmcsIGJvb2tQdWJsaWNhdGlvbkRhdGU6IG51bWJlcik6IEFycmF5PEJvb2tNb2RlbC5Cb29rPiB7XHJcblxyXG4gICAgICAgIGxldCBib29rSWRzOiBBcnJheTxudW1iZXI+ID0gdGhpcy5ib29rc0xpc3QubWFwKFxyXG4gICAgICAgICAgICAoYm9vaykgPT4gYm9vay5nZXRJZCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYm9va0lkOiBudW1iZXIgPSBNYXRoLm1heCguLi5ib29rSWRzKSArIDE7XHJcblxyXG4gICAgICAgIGxldCBib29rID0gbmV3IEJvb2tNb2RlbC5Cb29rKGJvb2tJZCwgYm9va1RpdGxlLCBib29rQXV0aG9yLCBib29rUHVibGljYXRpb25EYXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib29rc0xpc3QucHVzaChib29rKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib29rc0xpc3Q7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVsZXRlKGJvb2tJZDogbnVtYmVyKTogQm9vbGVhblxyXG4gICAge1xyXG4gICAgICBsZXQgZGVsZXRlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJvb2tzTGlzdCA9IHRoaXMuYm9va3NMaXN0LmZpbHRlcihcclxuICAgICAgICAoYm9vazogQm9va01vZGVsLkJvb2spID0+IHtcclxuICAgICAgICAgIGRlbGV0ZWQgPSBkZWxldGVkIHx8IGJvb2suZ2V0SWQoKSA9PT0gYm9va0lkO1xyXG4gICAgICAgICAgcmV0dXJuIGJvb2suZ2V0SWQoKSAhPT0gYm9va0lkXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIHJldHVybiBkZWxldGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZldGNoKGJvb2tJZDogbnVtYmVyKTogQm9va01vZGVsLkJvb2sge1xyXG4gICAgICAgIHJldHVybiBib29rSWQgJiYgdGhpcy5ib29rc0xpc3QuZmlsdGVyKFxyXG4gICAgICAgICAgICAoYm9vazogQm9va01vZGVsLkJvb2spID0+IGJvb2suZ2V0SWQoKSA9PT0gYm9va0lkXHJcbiAgICAgICAgKS5zaGlmdCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbmQoYm9va1F1ZXJ5OiBzdHJpbmcpOiBCb29rTW9kZWwuQm9vayB7XHJcbiAgICAgIGxldCBib29rSWQ6IG51bWJlciA9IHBhcnNlSW50KGJvb2tRdWVyeSk7XHJcbiAgICAgIGJvb2tRdWVyeSA9IGJvb2tRdWVyeS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ib29rc0xpc3QuZmlsdGVyKFxyXG4gICAgICAgICAgKGJvb2s6IEJvb2tNb2RlbC5Cb29rKSA9PiBib29rLmdldElkKCkgPT09IGJvb2tJZFxyXG4gICAgICAgICAgfHwgYm9vay5nZXRUaXRsZSgpLnRvTG93ZXJDYXNlKCkgPT09IGJvb2tRdWVyeVxyXG4gICAgICAgICAgfHwgYm9vay5nZXRBdXRob3IoKS50b0xvd2VyQ2FzZSgpID09PSBib29rUXVlcnlcclxuICAgICAgKS5zaGlmdCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
