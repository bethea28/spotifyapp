import store from '../store/store';

const defaultState = {
  people: null,
  name: '',
  age: null,
  favoriteCity: '',
  itemsChose: []
};


const Reducer = (state = defaultState, action) => {
  console.log('reducer', state)
  switch(action.type){
    case 'ITEM':
      console.log("action", action)
      return Object.assign({}, state, { itemsChose: state.itemsChose.concat(action.data) })
    case 'GET_EVERYONE':
      return Object.assign({}, state, { people: action.data });
    case 'NAME':
      console.log('name', action.data )
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
