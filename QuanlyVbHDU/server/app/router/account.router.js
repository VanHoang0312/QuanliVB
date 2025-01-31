const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const controler = require('../controler/account.controler')
const {authenticateToken} = require ("../middleware/authenticateToken")
const {isAdmin} = require ("../middleware/isAdmin")

//Dang ki
router.post('/register',
  [body('username').notEmpty().withMessage('username khong duoc phep de trong'),
  body('password').notEmpty().withMessage('password khong duoc phep de trong'),
  ],
  controler.register
)

//Danh nhap
router.post('/login', controler.login)
//Lay 
router.get('/layall' , controler.get)
//Lay theo id
router.get('/:id', controler.getById)
//Sua
router.put('/:id', controler.update)
//Xoa
router.delete('/:id' ,controler.delete)



module.exports = router