// mongoose
const mongoose = require("mongoose");
const config = require('config');
const db = config.get('mongoURI');


mongoose.set('strictQuery', true);
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