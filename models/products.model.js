const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/online-shop';

let productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String,
})

const product = mongoose.model('product', productSchema);

exports.getAllProducts = _ => {

    // connect to db
    // get products
    // disconnect

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            return product.find()
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => {
            mongoose.disconnect()
            reject(err)
        });
    });
}

exports.getAllProductsByCategory = category => {

    // connect to db
    // get products
    // disconnect

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            return product.find({ category: category })
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => {
            mongoose.disconnect()
            reject(err)
        });
    });

}


exports.getProductById = id => {
    // connect to db
    // get products
    // disconnect
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(_ => {
            return product.findById(id)
        }).then(product => {
            mongoose.disconnect()
            resolve(product);
        }).catch(err => {
            mongoose.disconnect()
            reject(err)
        });
    })
}


exports.getFirstProduct = _ => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(_ => {
            return product.findOne()
        }).then(product => {
            mongoose.disconnect()
            resolve(product)
        }).catch(err => {
            mongoose.disconnect()
            reject(err)
        })
    })
}