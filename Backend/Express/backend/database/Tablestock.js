const db = require("./configDB")

const sql = `CREATE TABLE stockpulsa
            (
            id_sp INT NOT NULL AUTO_INCREMENT,
            stock_pulsa_riwayat INT(12),
            PRIMARY KEY (id_sp)
            )`

db.query(sql, (e) =>{
    e ? console.error(e) : console.log("Table stockpulsa Berhasil Dibuat")
})

