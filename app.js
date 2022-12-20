const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));




// mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://allaa:1234@project309.crnphld.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })

  .catch((err) => {
    console.log(err);
  });

