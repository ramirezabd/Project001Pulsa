const db = require("./configDB")

const sql = `CREATE TABLE Sell
            (
            id_sell INT NOT NULL AUTO_INCREMENT,
            tanggal_sell VARCHAR(10),   
            provider_sell VARCHAR(10),
            nominal_sell VARCHAR(7),
            nomor_handphone_sell VARCHAR(10),
            PRIMARY KEY (id_sell)
            )`

db.query(sql, (e) =>{
    e ? console.error(e) : console.log("Table Sell Berhasil Dibuat")
})