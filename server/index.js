const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const STATIC_PATH = path.join(__dirname, "../static");
const UPLOAD_PATH = path.join(__dirname, "../upload");

const server = express();
let upload = multer({ dest: UPLOAD_PATH });
if (!fs.existsSync(UPLOAD_PATH)) {
  fs.mkdirSync(UPLOAD_PATH, e => console.log(e));
}

server.post("/upload", upload.single("file"), (req, res, next) => {
  fs.rename(req.file.path, `${req.file.path}.${req.file.originalname.split('.').pop()}`, () => {
    res.json({success: true});
  })
});

server.use(express.static(STATIC_PATH));
server.listen(8080, console.log.bind(null, "http://localhost:8080"));