const mysql = require("mysql")

const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "genboxcell"
})

db.connect((err) =>{
    err ? console.error(err) : console.log("Config Berhasil dijalankan")
})

module.exports = db
