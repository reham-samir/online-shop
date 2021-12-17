const mongoose = require('mongoose');


const DB_URL = 'mongodb://localhost:27017/online-shop';

const orderSchema = mongoose.Schema({
    name: String,
    amount: Number,
    price: Number,
    userId: String,
    productId: String,
    timestamp: Number,
    adress: String,
    status: String,
})



const Order = mongoose.model('order', orderSchema)


exports.orderOne = (orderData, adress) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(_ => {
            let order = new Order({
                name: orderData.name,
                price: orderData.price,
                amount: orderData.amount,
                userId: orderData.userId,
                productId: orderData.productId,
                timestamp: Date.now(),
                adress,
                status: "pending"
            })
            return order.save()
        }).then(_ => {
            resolve()
            mongoose.disconnect()
        }).catch(err => {
            reject(err)
            mongoose.disconnect()
        })
    })
}

exports.getOrders = (userId) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(_ => {
            return Order.find({ userId })
        }).then(orders => {
            resolve(orders)
            mongoose.disconnect()
        }).catch(err => {
            mongoose.disconnect()
            reject(err)
        })
    })
}