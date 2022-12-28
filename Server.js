const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.static("public"));
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", false);

app.use(express.json({ extended: false }));

//Connect Mongoose
mongoose
  .connect(
    "mongodb+srv://allaa:1234@project309.crnphld.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Mongo is connected to 5000"))
  .catch((err) => {
    console.log(err);
  });
//checking that server is valid
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening at:${PORT}`));

//Define Routes
app.use(cors());
app.use("/api/users", require("./routes/api/users"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/Cart", require("./routes/api/Cart"));
app.use("/api/Order", require("./routes/api/Order"));
app.use("/api/review", require("./routes/api/review"));
