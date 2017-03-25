const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('express').Router();
const Person = require('../db/models').Person;

const createPerson = (req, res) => {
  Person.create(req.body)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const getEveryone = (req, res) => {
  Person.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const getPersonById = (req, res) => {
  Person.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send(err.message);
  })
};

const deletePerson= (req,res) => {
  Person.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(()=>{
    res.send('deleted');
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const updatePersonById = (req, res) => {
  Person.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((data) => {
    res.send('good update');
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

router.route('/')
  .post(createPerson)
  .get(getEveryone);

router.route('/:id')
  .get(getPersonById)
  .delete(deletePerson)
  .put(updatePersonById);

module.exports = router
