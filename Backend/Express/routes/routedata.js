const { Router } = require("express")
const { body } = require("express-validator")
const { getR, getT, getS, getSP, postR, postT, postS, postSP, update} = require("../controller/contr")

const routes = Router()
// Abstraksi untuk syarat validasi pada router memerlukan validasi
const validationR = [
  //syarat validasi
  body("tanggal_riwayat")
  .isLength({ min: 1, max:10 })
  .withMessage("tanggal_riwayat tidak boleh kosong"),
  body("nominal_riwayat")
  .isLength({ min: 1, max:7 })
  .withMessage("nominal_riwayat tidak boleh kosong"),
  body("jenis_transaksi")
  .isLength({ min: 1, max:12 })
  .withMessage("jenis_transaksi tidak boleh kosong")
]

const validationT = [
  //syarat validasi
  body("tanggal_top")
  .isLength({ min: 1, max:10 })
  .withMessage("tanggal_top tidak boleh kosong"),
  body("nominal_top")
  .isLength({ min: 1, max:7 })
  .withMessage("nominal_top tidak boleh kosong")
]

const validationS = [
  //syarat validasi
  body("tanggal_sell")
  .isLength({ min: 1, max:10 })
  .withMessage("tanggal_sell tidak boleh kosong"),
  body("provider_sell")
  .isLength({ min: 1, max:10 })
  .withMessage("provider_sell tidak boleh kosong"),
  body("nominal_sell")
  .isLength({ min: 1, max:7 })
  .withMessage("nominal_sell tidak boleh kosong"),
  body("nomor_handphone_sell")
  .isLength({ min: 1, max:10 })
  .withMessage("nomor_handphone_sell tidak boleh kosong")
]

const validationSP = [
  //syarat validasi
  body("stock_pulsa_riwayat")
  .isLength({ min: 1, max:12 })
  .withMessage("stock pulsa tidak boleh kosong"),
]

const validationUPD = [
  //syarat validasi
  body("stock_pulsa_riwayat")
  .isLength({ min: 1, max:12 })
  .withMessage("stock pulsa tidak boleh kosong"),
]


routes.get("/getR", getR)
routes.get("/getT", getT)
routes.get("/getS", getS)
routes.get("/getSP", getSP)
routes.post("/postR", validationR, postR)
routes.post("/postT", validationT, postT)
routes.post("/postS", validationS, postS)
routes.post("/postSP", validationSP, postSP)
routes.post("/update", validationSP, update)
// routes.put("/update/:id", validationSP, update);
module.exports = routes;