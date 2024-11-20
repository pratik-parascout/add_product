const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');
// const rootFile = require('./utils/path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use('/shop', shopRoutes);

app.use('/contactus', contactusRoutes);

app.get('/success', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('listening');
});
