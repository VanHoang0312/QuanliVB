const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const controler = require('../controler/registeracopy.controler')


//Lay
router.get('/layall', controler.get)
    
router.get('/:id', controler.getById)

//hien thi vb khi tim theo sinh vien id
router.get('/school/:id', controler.getidtruong)

 
//Them van bang
router.post('/taobansaotn',
    [body('ten_sinh_vien').notEmpty().withMessage('Chua ten sinh viên'),
        body('nam_tn').notEmpty().withMessage('Chua nhap nam tn'),
    ],
    controler.create )

//Sua
router.put('/:id', controler.update)
  
//Xoa
router.delete('/:id', controler.delete)



module.exports = router