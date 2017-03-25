import $ from "jquery";
import axios from 'axios'

const personAction = data => ({
  type: 'CREATEPERSON',
  data: data,
})


export const handleName = (data) => ({
  type: "NAME", data: data

})

export const handleCity = (data) => ({
  type: "CITY", data: data
})


export const handleAge = (data) => ({
  type: "AGE", data: data
})

export const handleDescription = (data) => ({
  type: "DESCRIPTION", data: data
})



export const createPerson = (name, favoriteCity, age, description) => dispatch => {

  console.log('im in getUserServer')

  axios.post('/api/person', {
    name: name,
    favoriteCity: favoriteCity,
    age: age,
    description: description
  })
  .then((data) => {
    console.log('it woked', data);
  })
  .catch((error) => {
    console.log(error);
  });

}

// export const createPerson = (name, favoriteCity) => dispatch => {

//   console.log('im in getUserServer')

//   axios.post('/api/person', {
//     name: name,
//     favoriteCity: favoriteCity
//   })
//   .then((data) => {
//     console.log('it woked');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// }
