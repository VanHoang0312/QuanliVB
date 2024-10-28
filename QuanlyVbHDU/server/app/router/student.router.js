const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const controler = require('../controler/student.controler')


//lay
router.get('/layall', controler.get)

//lay theo id
router.get('/:id', controler.getById)

//hien thi sp khi tim theo trường hoc id
router.get('/truong/:id', controler.gettruonghocid)

//them
router.post('/taosv', [
    body('ten').notEmpty().withMessage('Chua nhap ten'),
    body('ngay_sinh').notEmpty().withMessage('Chua nhap ngay sinh'),
    body('nganh_hoc').notEmpty().withMessage('Chua nhap nganh hoc'),
    body('nam_hoc').notEmpty().withMessage('Chua nhap nam thi'),
    body('so_dien_thoai').notEmpty().withMessage('Chua nhap so dien thoai'),
    body('email').notEmpty().withMessage('Chua nhap email'),
    body('truong_hoc_id').notEmpty().withMessage('Chua nhap id truong hoc'),
],
    controler.create
)

//Sua 
router.put('/:id', controler.update)

//Xoa
router.delete('/:id', controler.delete)


module.exports = router