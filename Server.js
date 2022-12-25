const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.static("public"));


app.use(express.json({ extended: false }));

//Connect Mongoose
mongoose.connect("mongodb+srv://allaa:1234@project309.crnphld.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Mongo is connected to 5000"))
    .catch((err) => { console.log(err) }); 69999
//checking that server is valid
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening at:${PORT}`));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
//app.use('/api/products', require('./routes/api/products'));
//app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/Cart', require('./routes/api/Cart'));
app.use('/api/Order', require('./routes/api/Order'));






// process.env.SUPPRESS_NO_CONFIG_WARNING = 'true';
// //Init Middleware
// app.use(express.json({ extended: false }));

// app.get(`/`, (req, res) => res.send('API Running'));

// //Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/products', require('./routes/api/products'));
// app.use('/api/profiles', require('./routes/api/profiles'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/posts', require('./routes/api/posts'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`App is listening at:${PORT}`));
