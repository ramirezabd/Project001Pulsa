const db = require("./configDB")

const sql = `CREATE TABLE Topup
            (
            id_top INT NOT NULL AUTO_INCREMENT,
            tanggal_top VARCHAR(10),
            nominal_top VARCHAR(7),        
            PRIMARY KEY (id_top)
            )`

db.query(sql, (e) =>{
    e ? console.error(e) : console.log("Table Topup Berhasil Dibuat")
})

