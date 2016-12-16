"use strict";
var express = require('express');
var Index = (function () {
    function Index() {
    }
    Index.routes = function () {
        var router = express.Router();
        var indexRoute = new Index();
        router.get('/', indexRoute.index.bind(indexRoute));
        return router;
    };
    Index.prototype.index = function (request, response) {
        response.send("Hello world!!!");
    };
    return Index;
}());
exports.Index = Index;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkM7SUFBQTtJQVVBLENBQUM7SUFUaUIsWUFBTSxHQUFwQjtRQUNJLElBQUksTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUMsSUFBSSxVQUFVLEdBQVUsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNNLHFCQUFLLEdBQVosVUFBYSxPQUF3QixFQUFFLFFBQTBCO1FBQzdELFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksYUFBSyxRQVVqQixDQUFBIiwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXgge1xyXG4gICAgcHVibGljIHN0YXRpYyByb3V0ZXMoKTogZXhwcmVzcy5Sb3V0ZXIge1xyXG4gICAgICAgIGxldCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuICAgICAgICBsZXQgaW5kZXhSb3V0ZTogSW5kZXggPSBuZXcgSW5kZXgoKTtcclxuICAgICAgICByb3V0ZXIuZ2V0KCcvJywgaW5kZXhSb3V0ZS5pbmRleC5iaW5kKGluZGV4Um91dGUpKTtcclxuICAgICAgICByZXR1cm4gcm91dGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluZGV4KHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UpIHtcclxuICAgICAgICByZXNwb25zZS5zZW5kKFwiSGVsbG8gd29ybGQhISFcIik7XHJcbiAgICB9XHJcbn1cclxuIl19
