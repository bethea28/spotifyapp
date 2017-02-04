import store from './store'

const defaultState ={
  money: '',
  cash : ''
}


const Reducer = (state = defaultState, action)=>{
  switch(action.type){
    case 'data':
      return Object.assign({}, state, {money:state.money += action.data}
        // console.log(state.money)
        )
    case 'hand':
      return Object.assign({}, state, {cash:state.cash += action.data})
    default:
      return defaultState
  }

}


export default Reducer 