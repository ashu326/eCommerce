const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class User{
  constructor(username, email, cart){
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
  }

  save(){
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product){
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp === product._id;
    // });
    //product.quantity = 1;// this is how we can add new field in JS
    const updatedCart = { items: [{...product, quantity: 1}]};
    const db = getDb();
    return db.collection('users').updateOne(
      {_id: new mongodb.ObjectID(this._id)},
      {$set: {cart: updatedCart}}
    );
  }

  static findById(userId){
    const db = getDb();
    return db.collection('users').findOne({_id: new mongodb.ObjectID(userId)});
  }
}

module.exports = User;