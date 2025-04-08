const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

const pdfController = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file received" });
  }
  console.log("✅ File received:", req.file.originalname);

  const filePath = path.join(__dirname, "..", "uploads", req.file.filename);
  const dataBuffer = fs.readFileSync(filePath);

  pdf(dataBuffer).then(function (data) {
     res.json({
          message: "File uploaded and parsed successfully",
          text: data.text,
     })
  });
};

module.exports = pdfController;
