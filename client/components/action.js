import axios from 'axios';
import store from '../store/store';

const personAction = data => ({
  type: 'CREATEPERSON',
  data: data,
})

export const handleName = data => {
  console.log('tesname', data)
  return {
    type: "NAME", data: data
  }
}


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

// export const addItem = data=>({
// })

export const selectChange = data => ({
  // console.log('selectdata', data)
  // dispatch(addItem(data))
  type: "ITEM",
  data
})

export const createPerson = ({ name, favoriteCity, age }) => dispatch => {
  console.log('creatpers', store.getState())
  axios.post('/api/person', {
    name: name,
    favoriteCity: favoriteCity,
    age: age,
    ItemId: store.getState().item
  })
    .then(({ data }) => {
      dispatch(addPerson(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createItem = (data) => (dispatch) => {
  console.log('createItem', data)
  axios.post('/api/item', {
    name: data
  }).then(({ data }) => {
    console.log('item', data)
  })
}
export const updatePerson = ({ name, favoriteCity, age, id }) => dispatch => {
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
