const db = require("./configDB")

const sql = `CREATE TABLE riwayat
            (
            id_r INT NOT NULL AUTO_INCREMENT,
            tanggal_riwayat VARCHAR(10),
            nominal_riwayat VARCHAR(7),
            jenis_transaksi VARCHAR(4),
            PRIMARY KEY (id_r)
            )`

db.query(sql, (e) =>{
    e ? console.error(e) : console.log("Table riwayat Berhasil Dibuat")
})

