const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const multer = require("multer")

// Import local module / Package buatan sendiri
const routes = require("./Express/routes/routedata")

// deklarasi variabel yang dibutuhkan
const app = express();
const port = process.env.PORT || 4080

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

// Multer untuk menangani input data
app.use(multer().single(null))

app.use("/V1", routes)

// menangkap error dari validasi
app.use((e, req, res, next) => {
  const code = e.errorStatus || 500;
  const message = e.message;
  const data = e.data;
  res.status(code).json({ message, data })
})

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
})

