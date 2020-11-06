var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;
var URI = 'mongodb+srv://quang:quang@cluster0.phfiq.mongodb.net/ATNShop?retryWrites=true&w=majority'
var connect = require('mongoose').connect;
connect(URI, {useNewUrlParser: true});

const ProductSchema = new Schema({
    _id:String,
    ID: String,
    productName: String,
    productPrice: String,
    img: String
});

const Product = Model('Product', ProductSchema, 'Product');

module.exports.Product = Product;