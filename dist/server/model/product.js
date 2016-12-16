"use strict";
var Product = (function () {
    function Product(id, name, quantity) {
        if (quantity === void 0) { quantity = 0; }
        this.name = name;
        this.quantity = quantity;
        this.id = id;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.updateQuantity = function (newQuantity) {
        this.quantity = newQuantity;
    };
    Product.prototype.addProducts = function (addedQuantity) {
        this.quantity += addedQuantity;
    };
    Product.prototype.subtrackProducts = function (subtrackedQuantity) {
        this.quantity -= subtrackedQuantity;
    };
    return Product;
}());
exports.Product = Product;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBRUksaUJBQVksRUFBVSxFQUFTLElBQVksRUFBUyxRQUFvQjtRQUEzQix3QkFBMkIsR0FBM0IsWUFBMkI7UUFBekMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLHVCQUFLLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ00seUJBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTSx5QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUV6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ00sZ0NBQWMsR0FBckIsVUFBc0IsV0FBbUI7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUNNLDZCQUFXLEdBQWxCLFVBQW1CLGFBQXFCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFDTSxrQ0FBZ0IsR0FBdkIsVUFBd0Isa0JBQTBCO1FBQzlDLElBQUksQ0FBQyxRQUFRLElBQUksa0JBQWtCLENBQUM7SUFDeEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLGVBQU8sVUF3Qm5CLENBQUEiLCJmaWxlIjoibW9kZWwvcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBxdWFudGl0eTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0TmFtZShuYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlUXVhbnRpdHkobmV3UXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBuZXdRdWFudGl0eTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRQcm9kdWN0cyhhZGRlZFF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnF1YW50aXR5ICs9IGFkZGVkUXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3VidHJhY2tQcm9kdWN0cyhzdWJ0cmFja2VkUXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgLT0gc3VidHJhY2tlZFF1YW50aXR5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
