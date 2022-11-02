const db = require("./configDB")
const sql = "CREATE DATABASE GenboxCell"

db.query(sql, (err) => {
    if (err) throw err
    console.log("Database berhasil dibuat")
})