require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if (error) throw error;
    console.log(`Connected to MongoDB`);
})

app.get("/", (req, res) => {
    res.json({ msg: "Wlecome to ecommerce" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})