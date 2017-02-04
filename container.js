import React from 'react'
import App from './app'
import {getData} from './action'
import {connect} from 'react-redux'



const mapStateToProps = store =>({
  text:store.text,
  cards:store.cards
})

const mapDispatchToProps = dispatch =>({
  addArtist: (event) => {  dispatch(addArtist())},
  handle: (event) =>{
    var data = event.target.value
    dispatch(handle(data))
    console.log(data  )
    // console.log(store.getState().text)
  }
})



export default connect(
mapStateToProps,
mapDispatchToProps


)(App)