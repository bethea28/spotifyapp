let people = require('./people.js')
const Person = require('../server/db/models').Person



const seedyFunction = () => {
  Person.bulkcreate(people[0])
  Person.create(people[1])
  Person.create(people[2])
  Person.create(people[3])


}

module.exports = seedyFunction
