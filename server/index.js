const multer = require('multer');
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");            
const cors = require('cors');                                                                   

const app = express();
require('dotenv').config();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
   
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);
app.use("/server/posts", postsRoute);

mongoose.connect(process.env.MONGO_CONNECTION, { }).then(app.listen(process.env.PORT, () => console.log('app rodando')))
.catch(err => console.log(err));

app.post("/server/upload", cors(), upload.single("file"), (req, res) => {
    res.status(200).json("Arquivo Enviado");
});

app.get("/", (req, res) => {
    res.send("OLÁ HEROKU");
});