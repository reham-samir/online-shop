const express = require('express');
const path = require('path');
const session = require('express-session')
const SessionStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')

const homeRouter = require('./routes/home.routes');
const productRouter = require('./routes/product.routes')
const authRouter = require('./routes/auth.routes')
const cartRouter = require('./routes/cart.routes')
const orderRouter = require('./routes/order.routes')

const app = express();

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(flash())

const STORE = new SessionStore({
    uri: 'mongodb://localhost:27017/online-shop',
    collection: 'sessions'
})

app.use(session({
    secret: 'this is my secret',
    saveUninitialized: false,
    resave: true,
    store: STORE,
}))

app.set('view engine', 'ejs');
app.set('views', 'views') // Defalut

app.use('/', homeRouter)
app.use('/product', productRouter)
app.use('/', authRouter)
app.use('/cart', cartRouter)
app.use('/orders', orderRouter)


app.listen(3000, _ => console.log('Server is Running on Port : 3000...'))