const express = require("express");
const router = express.Router();
const upload = require("../controllers/multer"); 
const pdfController = require("../controllers/pdfController");


router.post("/upload", upload.single("pdf"),pdfController);

module.exports = router;
