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

export const addPerson = data => ({
  type: "ADD_PERSON",
  data,
})

export const createPerson = ({name, favoriteCity, age}) => dispatch => {
  axios.post('/api/person', {
    name: name,
    favoriteCity: favoriteCity,
    age: age,
  })
  .then(({ data }) => {
    dispatch(addPerson(data));
  })
  .catch((error) => {
    console.log(error);
  });
};

export const updatePerson = ({name, favoriteCity, age, id}) => dispatch => {
  axios.put(`/api/person/${id}`, {
    name,
    age,
    favoriteCity,
  })
  .then((data) => {
    console.log('work update', data);
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

export const getPerson = data => ({
  type: "GET_PERSON",
  data,
});

// thunk action
// getState can also be pass thru as an argument after dispatch
export const getPersonByIdAsync = (personId) => (dispatch) => {
  axios.get(`/api/person/${personId}`)
  .then(({ data }) => {
    dispatch(getPerson(data))
  })
  .catch((error) => {
    console.log(error);
  });
};
export const getPersonById = (nextState) => {
  store.dispatch(getPersonByIdAsync(nextState.params.personId));
};
