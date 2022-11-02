const db = require("./configDB")

const sql = `CREATE TABLE TableDataPulsa
            (
            id_dpk INT NOT NULL AUTO_INCREMENT,
            stock_pulsa INT(12),
            tanggal VARCHAR(10),
            provider VARCHAR(10),
            nominal VARCHAR(7),
            nomor_handphone VARCHAR(10),
            PRIMARY KEY (id_dpk)
            )`

db.query(sql, (e) =>{
    e ? console.error(e) : console.log("Table UserDummy Berhasil Dibuat")
})