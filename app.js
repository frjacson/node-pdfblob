const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "preview.pdf");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=preview.pdf");
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
