"use strict";
var Book = (function () {
    function Book(id, title, author, publicationDate) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.id = id;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getPublicationDate = function () {
        return this.publicationDate;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setPublicationDate = function (publicationDate) {
        this.publicationDate = publicationDate;
    };
    return Book;
}());
exports.Book = Book;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2Jvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBRUksY0FBWSxFQUFVLEVBQVMsS0FBYSxFQUFTLE1BQWMsRUFBUyxlQUF1QjtRQUFwRSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFRO1FBQy9GLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTSxvQkFBSyxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNNLHVCQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sd0JBQVMsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ00saUNBQWtCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUNNLHVCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUUzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sd0JBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUU3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ00saUNBQWtCLEdBQXpCLFVBQTBCLGVBQXVCO1FBRS9DLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSxZQUFJLE9BNkJoQixDQUFBIiwiZmlsZSI6Im1vZGVsL2Jvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm9vayB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIGF1dGhvcjogc3RyaW5nLCBwdWJsaWMgcHVibGljYXRpb25EYXRlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0QXV0aG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhvcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQdWJsaWNhdGlvbkRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVibGljYXRpb25EYXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRBdXRob3IoYXV0aG9yOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldFB1YmxpY2F0aW9uRGF0ZShwdWJsaWNhdGlvbkRhdGU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgdGhpcy5wdWJsaWNhdGlvbkRhdGUgPSBwdWJsaWNhdGlvbkRhdGU7XHJcbiAgICB9XHJcbn1cclxuIl19
