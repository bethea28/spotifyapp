import React from 'react'
import {connect} from 'react-redux'
import {getData} from './action'
import {handleSubmit} from './action'
import store from './store'


const App = (props) => {
  
    // console.log(props.money)
    // console.log(props.money)
  return(
    <div>
      {props.cash}
      {store.getState().money}
      <form onSubmit= {props.handleSubmit}>
        <input onChange = {props.getData} type = 'text' placeholder = 'Enter'/>
        <input  type = 'submit' placeholder = 'Enter'/>
      </form>
    {props.children}
      
      {props.money}

    </div>
  )

}

  
const mapStateToProps = store =>{
  return {
    money:store.money,
    cash: store.cash

  }
}

const mapDispatchToProps = dispatch  =>{
  return {
    // var text = event.target.value
    getData: (event)=> {
        var text  = event.target.value
      dispatch(getData(text))

      console.log(text)
    },
      // dispatch(getData())
      // dispatch(handleSubmit('Bryan'))
    

    handleSubmit: (event)=>{
      event.preventDefault()
      dispatch(handleSubmit('cash'))
      // console.log(props.cash)
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
