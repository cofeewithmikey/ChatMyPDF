const express = require("express");
const cors = require("cors");
const pdfRoutes = require("./routes/pdfRoutes.js");
const app = express();
const port = 3000;
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api", pdfRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
