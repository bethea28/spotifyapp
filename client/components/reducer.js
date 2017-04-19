import store from '../store/store';

const defaultState = {
  people: null,
  name: '',
  age: null,
  favoriteCity: '',
};


const Reducer = (state = defaultState, action) => {
  switch(action.type){

    case 'GET_EVERYONE':
      return Object.assign({}, state, { people: action.data });

    case 'GET_PERSON':
      return Object.assign({}, state, {
        name: action.data.name,
        age: action.data.age,
        favoriteCity: action.data.favoriteCity,
      });
    case 'ADD_PERSON':
      return Object.assign({}, state, { people: [...state.people, action.data] })
    default:
      return state;
  }

}


export default Reducer
