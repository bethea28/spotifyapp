import store from '../store/store'

const defaultState ={
  name: '',
  favoriteCity: '',
  age: null,
  description: ''
}


const Reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'CREATEPERSON':
      return

    case 'NAME':
      return Object.assign({}, state, {name: action.data})

    case 'CITY':
      return Object.assign({}, state, {favoriteCity: action.data})

    case 'AGE':
      return Object.assign({}, state, {age: action.data})

    case 'DESCRIPTION':
      return Object.assign({}, state, {description: action.data})

    default:
      return defaultState
  }

}


export default Reducer
