import React from 'react'
import store from './store'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
// import App from './container.js'
import App from './app'


const Visual = ()=>{
 return(

  <Provider store ={store}>
    <App />
  </Provider>
  )
}



render(
  <Visual/>,
  document.getElementById('root')
)