const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const controler = require('../controler/diplomas.controler')


//Lay
router.get('/layall', controler.get)
    
router.get('/:id', controler.getById)

//hien thi vb khi tim theo sinh vien id
router.get('/student/:id', controler.getsinhvienid)

//hien thi vb khi tim theo id loai van bang
router.get('/typeofdiploma/:id', controler.getloaivbid)
 
//Them van bang
router.post('/taovanbang',
    [body('so_hieu_VB').notEmpty().withMessage('Chua nhap so hieu vb'),
        body('nam_tn').notEmpty().withMessage('Chua nhap nam tn'),
        body('xep_loai_tn').notEmpty().withMessage('Chua nhap xep loai'),
        body('hinh_thuc_dao_tao').notEmpty().withMessage('Chua nhap hinh thuc dao tao'),
        body('sinh_vien_id').notEmpty().withMessage('Chua nhap id sinh vien'),
        body('id_loai_VB').notEmpty().withMessage('Chua nhap id loai vb'),
    ],
    controler.create )

//Sua
router.put('/:id', controler.update)
  
//Xoa
router.delete('/:id', controler.delete)



module.exports = router