const db = require('../util/database');

module.exports = class Product {

    constructor(id, t, imageUrl, description, price) {
        this.id = id ;
        this.title = t ;
        this.price = price ;
        this.description = description ;
        this.imageUrl = imageUrl ;
    }
    save() {
        return db.execute('INSERT INTO products (title, price, imageUrl,description) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.imageUrl, this.description]);
    }

    static deleteById(id){
       
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id){
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
}