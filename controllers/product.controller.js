const products = require('../models/products.model');

exports.getProductById = (req, res, next) => {
    // Get Id 
    // get Product
    // render Page
    let id = req.params.id;
    let ProductPromis;

    ProductPromis = products.getProductById(id)

    ProductPromis.then(product => {
        res.render('product', {
            product, isUser: req.session.userId,
            validationError: req.flash('validationErrors')
        });
    })
}
exports.getFirstProduct = (req, res, next) => {
    // Get Id
    // get Product
    // render Page

    products.getFirstProduct().then(product => {
        res.render('product', {
            product, isUser: req.session.userId,
            validationError: req.flash('validationErrors')
        });
    })
}