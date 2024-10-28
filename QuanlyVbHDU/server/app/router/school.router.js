const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const controler = require('../controler/school.controler')


//Lay truong
router.get('/layall', controler.get)
    
router.get('/:id', controler.getById)
 
//Them truong
router.post('/taotruong',
    [body('ten_truong').notEmpty().withMessage('Chua nhap ten truong'),
    ],
    controler.create )

//Sua
router.put('/:id', controler.update)
  
//Xoa
router.delete('/:id', controler.delete)



module.exports = router