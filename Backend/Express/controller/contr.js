const User = require("../model/model")
const { validationResult } = require("express-validator")

//GET ALL
const getR = (req, res) => {
  // Query sql untuk melihat semua data yang ada pada table
  const sql = `SELECT * FROM riwayat`;

  // Jalankan fungsi user (sql dan res adalah parameter yang dijalankan di file model)
  User(sql, res)
};

const getT = (req, res) => {
  const sql = `SELECT * FROM Topup`;
  User(sql, res)
};

const getS = (req, res) => {
  const sql = `SELECT * FROM Sell`;
  User(sql, res)
};

const getSP = (req, res) => {
  const sql = `SELECT * FROM stockpulsa`;
  User(sql, res)
};
///


/// POST
const postR = (req, res) => {
  // Deklarasi Variabel yang dibutuhkan
  const error = validationResult(req)
  let results = {
    tanggal_riwayat: req.body.tanggal_riwayat,
    nominal_riwayat: req.body.nominal_riwayat,
    jenis_transaksi: req.body.jenis_transaksi
  };

  const sql = `INSERT INTO riwayat (tanggal_riwayat, nominal_riwayat, jenis_transaksi)
            VALUES ('${results.tanggal_riwayat}', '${results.nominal_riwayat}', '${results.jenis_transaksi}')`

  console.log(sql)

  if (!error.isEmpty()) {
    const e = new Error("Invalid value")
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  User(sql, res)
};

const postT = (req, res) => {
  // Deklarasi Variabel yang dibutuhkan
  const error = validationResult(req)
  let results = {
    tanggal_top: req.body.tanggal_top,
    nominal_top: req.body.nominal_top
  };

  const sql = `INSERT INTO topup (tanggal_top, nominal_top)
            VALUES ('${results.tanggal_top}', '${results.nominal_top}')`

  console.log(sql)

  if (!error.isEmpty()) {
    const e = new Error("Invalid value")
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  User(sql, res)
};

const postS = (req, res) => {
  // Deklarasi Variabel yang dibutuhkan
  const error = validationResult(req)
  let results = {
    tanggal_sell: req.body.tanggal_sell,
    provider_sell: req.body.provider_sell,
    nominal_sell: req.body.nominal_sell,
    nomor_handphone_sell: req.body.nomor_handphone_sell,
  };

  const sql = `INSERT INTO sell (tanggal_sell, provider_sell, nominal_sell, nomor_handphone_sell)
            VALUES (
            '${results.tanggal_sell}', 
            '${results.provider_sell}',
            '${results.nominal_sell}', 
            '${results.nomor_handphone_sell}')`

  // console.log(sql)

  if (!error.isEmpty()) {
    const e = new Error("Invalid value")
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  User(sql, res)
};

const postSP = (req, res) => {
  // Deklarasi Variabel yang dibutuhkan
  const error = validationResult(req)
  let results = {
    stock_pulsa_riwayat: req.body.stock_pulsa_riwayat,
  };

  const sql = `INSERT INTO stockpulsa (stock_pulsa_riwayat)
            VALUES ('${results.stock_pulsa_riwayat}')`

  // console.log(sql)

  if (!error.isEmpty()) {
    const e = new Error("Invalid value")
    e.code = 400;
    e.data = error.array();
    throw e;
  }

  User(sql, res)
};
///


// Fungsi untuk edit data berdasarkan id yang dipilih
const update = (req, res) => {
  // Inisialisasi variable
  const error = validationResult(req)
  let results = {
    stock_pulsa_riwayat : req.body.stock_pulsa_riwayat
  }

  const sql = `UPDATE stockpulsa SET stock_pulsa='${results.stock_pulsa_riwayat}' WHERE id_sp='1'`
  const wtf = `SELECT stockpulsa,  `

  if (!error.isEmpty()) {
    const e = new Error("Invalid value")
    e.code = 400
    e.data = error.array()
    throw e
  }
  User(sql, res)
};


// Export module / fungsi yang sudah dibuat
module.exports = { getR, getT, getS, postR, getSP, postT, postS, postSP, update }