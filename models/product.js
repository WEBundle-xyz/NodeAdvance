// const fs = require('fs');
// const path = require('path');

//No longer need the above bc I`m fetching data from a data base.

const Cart = require('./cart');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static fetchAll() {}

  static findById(id, cb) {}
};
