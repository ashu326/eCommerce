products = [];

module.exports = class Product {

    constructor(t, imageUrl, description, price) {
        this.title = t ;
        this.imageUrl = imageUrl ;
        this.description = description ;
        this.price = price ;
    }
    save() {
        this.id = Math.random().toString() ;
        products.push(this) ;
    }

    static fetchAll() {
        return products ;
    }

    static findById(id){
        getProductsFromList(products => {
            const product = products.find(p => p.id === id) ;
            console.log(product) ;
        })
    }
}