const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const personRoutes = require('./routes/personRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static('public'));

app.use('/api/person', personRoutes);
app.use('/api/item', itemRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

module.exports = app
