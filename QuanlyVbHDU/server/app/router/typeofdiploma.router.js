const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const controler = require('../controler/typeofdiploma')


//Lay 
router.get('/layall', controler.get)
    
router.get('/:id', controler.getById)
 
//Them loai vb
router.post('/taoloaivb',
    [body('ten_loai_vb').notEmpty().withMessage('Chua nhap ten loai vb'),
    ],
    controler.create )

//Sua
router.put('/:id', controler.update)
  
//Xoa
router.delete('/:id', controler.delete)



module.exports = router