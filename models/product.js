// const fs = require('fs');
// const path = require('path');

//No longer need the above bc I`m fetching data from a data base.

const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static findById(id) {}
};
