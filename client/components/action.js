import axios from 'axios';
import store from '../store/store';

const personAction = data => ({
  type: 'CREATEPERSON',
  data: data,
})

export const handleName = data => ({
  type: "NAME", data: data
})

export const handleCity = data => ({
  type: "CITY",
  data,
})

export const handleAge = data => ({
  type: "AGE",
  data,
})

export const handleDescription = data => ({
  type: "DESCRIPTION",
  data,
})

export const createPerson = (name, favoriteCity, age) => dispatch => {

  console.log('im in getUserServer')

  axios.post('/api/person', {
    name: name,
    favoriteCity: favoriteCity,
    age: age,
  })
  .then((data) => {
    console.log('it woked', data);
  })
  .catch((error) => {
    console.log(error);
  });

};

export const everyone = data => ({
  type: "GET_EVERYONE",
  data,
});

// thunk action
// getState can also be pass thru as an argument after dispatch
export const getEveryoneAsync = () => (dispatch) => {
  axios.get('/api/person')
  .then(({ data }) => {
    dispatch(everyone(data));
  })
  .catch(err => err);
};
export const getEveryone = () => {
  store.dispatch(getEveryoneAsync());
};
