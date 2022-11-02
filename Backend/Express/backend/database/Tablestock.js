const db = require("./configDB")

const sql = `CREATE TABLE stokpulsa
            (
            id INT NOT NULL AUTO_INCREMENT,
            stock_pulsa_riwayat VARCHAR(12),
            PRIMARY KEY (id)
            )`

db.query(sql, (e) =>{
    e ? console.error(e) : console.log("Table stockpulsa Berhasil Dibuat")
})

