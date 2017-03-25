let express = require('express')
let app = express()
let bodyParser = require('body-parser');
const router = require('express').Router();
const Person = require('../models/index').Person

const createPersons = (req, res) => {
  Person.create({
    name: req.body.name,
    favoriteCity: req.body.favoriteCity,
    age: req.body.age,
    description: req.body.description
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
}

const getAllPersons = (req, res) => {
  Person.findAll({

  })
  .then((data) => {
    res.send(data)
    console.log('got all persons')
  })
  .catch((err) => {
    console.log(err)
  })
}

const getPersonById = (req, res) => {
  Person.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
}

const deletePerson=(req,res)=>{
  Person.destroy({
    where:{

      id:req.params.id
    }
  })
  .then(()=>{

    res.send('deleted')
  })

}

const updatePersonById = (req, res) => {
  Person.update(
    {

    name: req.body.name,
    age: req.body.age,
    favoriteCity: req.body.favoriteCity
    },
    {where:
      {id: req.params.id
      }
  })
  .then((data) => {
    res.send('good update')
  })
  .catch((err) => {
    console.log(err)
  })

}


router.route('/')
  .post(createPersons)
  .get(getAllPersons)
router.route('/:id')
  .get(getPersonById)
  .delete(deletePerson)
  .put(updatePersonById)


module.exports = router
