const RegisteracopytModels = require('../models/registeracopy')
const { body, validationResult } = require('express-validator')


//Lay
exports.get = (req, res, next) => {
    var ten_sinh_vien = req.body.ten_sinh_vien
    var ma_sinh_vien = req.body.ma_sinh_vien
    var ngay_sinh = req.body.ngay_sinh
    var noi_sinh = req.body.noi_sinh
    var cccd = req.body.cccd
    var ngay_thang_cap_cccd = req.body.ngay_thang_cap_cccd
    var hoc_sinh_truong = req.body.hoc_sinh_truong
    var nam_tn = req.body.nam_tn
    var so_luong_ban_sao_cap = req.body.so_luong_ban_sao_cap
    var noi_thuong_tru = req.body.noi_thuong_tru
    var don_vi_cong_tac = req.body.don_vi_cong_tac
    var so_dien_thoai = req.body.so_dien_thoai
    var email = req.body.email
    var dia_chi_nhan_btn = req.body.dia_chi_nhan_btn
    var anh_cccd_mt = req.body.anh_cccd_mt
    var anh_cccd_ms = req.body.anh_cccd_ms
    var anh_giay_khai_sinh = req.body.anh_giay_khai_sinh
    var id_truong = req.body.id_truong
    var id_loai_VB = req.body.id_loai_VB
    var status_read = req.body.status_read

    RegisteracopytModels.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json('Loi sever')
        })
}

exports.getById = (req, res, next) => {
    var _id = req.params.id

    RegisteracopytModels.findById({ _id })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json('Loi sever')
        })

}

//hien thi bs khi tim theo id truong
exports.getidtruong = (req, res, next) => {
    var id_truong = req.params.id;
    RegisteracopytModels.find({
        id_truong: id_truong
    })
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.json('K tim thay');
            }
        })
        .catch(err => {
            res.status(500).json('Lỗi server');
        });
}



//Them ban sao
exports.create = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        return res.status(400).json({ errors: errorMessages });
    }
    var ten_sinh_vien = req.body.ten_sinh_vien
    var ma_sinh_vien = req.body.ma_sinh_vien
    var ngay_sinh = req.body.ngay_sinh
    var noi_sinh = req.body.noi_sinh
    var cccd = req.body.cccd
    var ngay_thang_cap_cccd = req.body.ngay_thang_cap_cccd
    var hoc_sinh_truong = req.body.hoc_sinh_truong
    var nam_tn = req.body.nam_tn
    var so_luong_ban_sao_cap = req.body.so_luong_ban_sao_cap
    var noi_thuong_tru = req.body.noi_thuong_tru
    var don_vi_cong_tac = req.body.don_vi_cong_tac
    var so_dien_thoai = req.body.so_dien_thoai
    var email = req.body.email
    var dia_chi_nhan_btn = req.body.dia_chi_nhan_btn
    var anh_cccd_mt = req.body.anh_cccd_mt
    var anh_cccd_ms = req.body.anh_cccd_ms
    var anh_giay_khai_sinh = req.body.anh_giay_khai_sinh
    var id_truong = req.body.id_truong
    var id_loai_VB = req.body.id_loai_VB
    var status_read = req.body.status_read

    RegisteracopytModels.findOne({
        cccd: cccd
    })
        .then(data => {
            if (data) {
                res.json('Sinh viên da ton tai')
            } else {
                return RegisteracopytModels.create({
                    ten_sinh_vien: ten_sinh_vien,
                    ma_sinh_vien : ma_sinh_vien,
                    nam_tn: nam_tn,
                    ngay_sinh: ngay_sinh,
                    noi_sinh: noi_sinh,
                    ngay_thang_cap_cccd: ngay_thang_cap_cccd,
                    id_loai_VB: id_loai_VB,
                    hoc_sinh_truong: hoc_sinh_truong,
                    so_luong_ban_sao_cap: so_luong_ban_sao_cap,
                    noi_thuong_tru: noi_thuong_tru,
                    don_vi_cong_tac: don_vi_cong_tac,
                    so_dien_thoai: so_dien_thoai,
                    email: email,
                    dia_chi_nhan_btn: dia_chi_nhan_btn,
                    anh_cccd_mt: anh_cccd_mt,
                    anh_cccd_ms: anh_cccd_ms,
                    anh_giay_khai_sinh: anh_giay_khai_sinh,
                    id_truong: id_truong,
                    cccd : cccd,
                    status_read: status_read
                })
            }
        })
        .then(data => {
            if (data) {
                res.json('Tao thanh cong')
            }
        })
        .catch(err => {
            res.status(500).json('Loi sever')
        })
}


//Sua
exports.update = (req, res, next) => {
    var id = req.params.id
    var newtensinhvien = req.body.newtensinhvien
    var newmasinhvien = req.body.newmasinhvien
    var newngaysinh = req.body.newngaysinh
    var newnoisinh = req.body.newnoisinh
    var newcccd = req.body.newcccd
    var newngaythangcapcccd = req.body.newngaythangcapcccd
    var newhocsinhtruong = req.body.newhocsinhtruong
    var newnamtn = req.body.newnamtn
    var newsoluongbansaocap = req.body.newsoluongbansaocap
    var newnoithuongtru = req.body.newnoithuongtru
    var newdonvicongtac = req.body.newdonvicongtac
    var newsodienthoai = req.body.newsodienthoai
    var newemail = req.body.newemail
    var newdiachinhanbtn = req.body.newdiachinhanbtn
    var newanhcccdmt = req.body.newanhcccdmt
    var newanhcccdms = req.body.newanhcccdms
    var newanhgiaykhaisinh = req.body.newanhgiaykhaisinh
    var newidtruong = req.body.newidtruong
    var newidloaiVB = req.body.newidloaiVB
    var newstatusread = req.body.newstatusread

    RegisteracopytModels.findByIdAndUpdate(id, {
        ten_sinh_vien: newtensinhvien,
        ma_sinh_vien: newmasinhvien,
        nam_tn: newnamtn,
        ngay_sinh: newngaysinh,
        noi_sinh: newnoisinh,
        ngay_thang_cap_cccd: newngaythangcapcccd,
        id_loai_VB: newidloaiVB,
        hoc_sinh_truong: newhocsinhtruong,
        so_luong_ban_sao_cap: newsoluongbansaocap,
        noi_thuong_tru: newnoithuongtru,
        don_vi_cong_tac: newdonvicongtac,
        so_dien_thoai: newsodienthoai,
        email: newemail,
        dia_chi_nhan_btn: newdiachinhanbtn,
        anh_cccd_mt: newanhcccdmt,
        anh_cccd_ms: newanhcccdms,
        anh_giay_khai_sinh: newanhgiaykhaisinh,
        id_truong: newidtruong,
        cccd :newcccd,
        status_read: newstatusread
        
    })
        .then(data => {
            if(data){
                res.json('Sua thanh cong')
            }
            
        })
        .catch(err => {
            res.status(500).json('Loi sever')
        })
}




//Xoa
exports.delete = (req, res, next) => {
    var id = req.params.id
    RegisteracopytModels.deleteOne({
        _id: id
    })
        .then(data => {
            if(data){
                res.json('xóa thanh cong')
            }
        })
        .catch(err => {
            res.status(500).json('Loi sever')
        })
}

