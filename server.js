let express = require('express')
let app = express()
let bodyparser = require('body-parser')
let path = require('path')
let db = require('./models')
let personRoutes = require('./routes/personRoutes')


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))




app.use('/api/person', personRoutes)
// app.use('/api/restaurant/:id', restaurantRoutesTwo)
// app.use('/api/restaurants', restaurantRoutes)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})


db.sequelize.sync().then(function() {
  console.log('working on')
  app.listen(3000)
})

module.exports = app
