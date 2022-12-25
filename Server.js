const express = require('express');
const app = express();
app.use(express.static("public"));

process.env.SUPPRESS_NO_CONFIG_WARNING = 'true';
//Init Middleware
app.use(express.json({ extended: false }));

app.get(`/`, (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`I LOVE YOU:${PORT}`));
