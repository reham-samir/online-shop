const router = require('express').Router();
const bodyParser = require('body-parser')
const authGuard = require('./guards/auth.guard')
const orderControll = require('../controllers/order.controller')




router.get('/', authGuard.isAuth, orderControll.getOrders)

router.post('/orderone', authGuard.isAuth, bodyParser.urlencoded({ extended: true }),
    orderControll.postOrderAdress
)

router.get('/orderone/adress', authGuard.isAuth,
    orderControll.getAdress
)
router.post('/orderone/adress', authGuard.isAuth, bodyParser.urlencoded({ extended: true }),
    orderControll.PostAdress
)




module.exports = router;