const express = require('express');
const app = express();
app.get(`/`, (req, res) => res.send('API Running'));

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/profiles', require('./routes/api/profiles'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
