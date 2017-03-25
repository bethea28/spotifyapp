import Reducer from '../components/reducer'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import applyMiddleware from ''

const store = createStore(Reducer, (applyMiddleware(thunk)
))

export default store