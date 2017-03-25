import store from '../store/store'

const defaultState = {
  name: '',
  favoriteCity: '',
  age: null,
  description: '',
  people: null,
}


const Reducer = (state = defaultState, action) => {
  switch(action.type){

    case 'NAME':
      return Object.assign({}, state, { name: action.data });

    case 'CITY':
      return Object.assign({}, state, { favoriteCity: action.data });

    case 'AGE':
      return Object.assign({}, state, { age: action.data });

    case 'GET_EVERYONE':
      return Object.assign({}, state, { people: action.data });

    default:
      return state;
  }

}


export default Reducer
