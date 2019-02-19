products = [];

module.exports = class Product {

    constructor(t, imageUrl, description, price) {
        this.title = t ;
        this.imageUrl = imageUrl ;
        this.description = description ;
        this.price = price ;
    }
    save() {
        products.push(this) ;
    }

    static fetchAll() {
        return products ;
    }
}