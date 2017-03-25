const db = require('../server/db/models').sequelize
const Person = require('../server/db/models').Person



const People = [

    Hasaki = {
      name: "Hasaki",
      age: "22",
      favoriteCity: "Fayetteville",

    },

    Bryan = {
      name: "Bryan",
      age: 24,
      favoriteCity: "Charlotte",

    },

    Samantha = {
      name: "Samantha",
      age: "28",
      favoriteCity: "Austin",

    },

    Sean = {
      name: "Sean",
      age: 33,
      favoriteCity: "New York",

    }

]

db.sync({force: true})
.then(() => Person.bulkCreate(People))

// })

module.exports = [People]
