const db = require("../backend/database/configDB");
const code = 200;

// Abstraksi untuk query pada sql jadi tidak mengulang query berkali-kali
const User = (sql, res) => {
  db.query(sql, (e, response) => {
    e ? console.error(e) : false;
    res.status(code).json({
      status: "OK",
      code: code,
      data: response,
    });
  });
};

module.exports = User;