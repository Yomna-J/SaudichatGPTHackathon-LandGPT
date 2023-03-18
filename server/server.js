const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const downloadsPath = "DEPRECATED"; 
const destinationFolderPath ="DEPRECATED"; 

app.get("/generate", (req, res) => {
  const fileName = "LandingPage.jsx";
  const filePath = path.join(downloadsPath, fileName);
  const destinationPath = path.join(destinationFolderPath, fileName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.send("Error reading file.");
    } else {
      fs.writeFile(destinationPath, data, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.send("Error writing file.");
        } else {
          console.log("File updated successfully.");
          res.send("File updated successfully.");
        }
      });
    }
  });
});

app.listen(5001, () => {
  console.log("Server listening on port 5001");
});