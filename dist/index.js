"use strict";

var _Product = require("./models/Product");
var _CartService = require("./services/CartService");
var laptop = new _Product.Product(1, 'Laptop', 999.99, _Product.Category.Electronics);
var tshirt = new _Product.Product(2, 'T-Shirt', 19.99, _Product.Category.Clothing);
var book = new _Product.Product(3, 'Book', 12.99, _Product.Category.Books);
var cartService = new _CartService.CartService();
cartService.addToCart(laptop, 1);
cartService.addToCart(tshirt, 3);
cartService.addToCart(book, 2);
var items = cartService.getCartItems();
items.forEach(function (item) {
  console.log("Product: ".concat(item.product.name, ", Quantity: ").concat(item.quantity, ", Total Price: $").concat(item.totalPrice.toFixed(2)));
});
console.log("Total Cart Price: $".concat(cartService.getTotal().toFixed(2)));