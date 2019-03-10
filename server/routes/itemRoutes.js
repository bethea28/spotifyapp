const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('express').Router();
const Item = require('../db/models').Item;

const createItem = (req, res) => {
  Item.create(req.body)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const getAllItems = (req, res) => {
  Item.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

// const getPersonById = (req, res) => {
//   Person.findById(req.params.id)
//   .then((data) => {
//     res.send(data)
//   })
//   .catch((err) => {
//     res.status(500).send(err.message);
//   })
// };

// const deletePerson= (req,res) => {
//   Person.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//   .then(()=>{
//     res.send('deleted');
//   })
//   .catch((err) => {
//     res.status(500).send(err.message);
//   });
// };

// const updatePersonById = (req, res) => {
//   Person.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//   .then((data) => {
//     res.send('good update');
//   })
//   .catch((err) => {
//     res.status(500).send(err.message);
//   });
// };

router.route('/')
  .post(createItem)
  .get(getAllItems)
// router.route('/:id')
//   .get(getPersonById)
//   .delete(deletePerson)
//   .put(updatePersonById);

module.exports = router
