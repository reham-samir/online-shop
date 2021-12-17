const ordersModel = require('../models/orders.model')
const cartModul = require('../models/cart.model')



exports.getOrders = (req, res, next) => {
    ordersModel.getOrders(req.session.userId).then(orders => {
        res.render('orders', { isUser: req.session.userId, orders })
    })
}


exports.postOrderAdress = (req, res, next) => {
    req.session.orderId = req.body.cartId
    res.redirect('orderone/adress')
}

exports.getAdress = (req, res, next) => {
    let orderId = req.session.orderId
    console.log(orderId)
    res.render('orderAdress', { isUser: true, orderId })
}

exports.PostAdress = (req, res, next) => {
    cartModul.findOrder(req.body.orderId).then(orderData => {
        return ordersModel.orderOne(orderData, req.body.adress)
    }).then(_ => {
        res.redirect('/orders')
    }).catch(err => console.log(err))
}
