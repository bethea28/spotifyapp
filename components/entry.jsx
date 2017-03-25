import React from 'react'
import store from '../store/store'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {Router, browserHistory, Route, Link, IndexRoute} from 'react-router'
import CreatePersonForm from './createPerson'
import GetPerson from './getPerson'
import GetPersonById from './getPersonById'
import UpdatePerson from './updatePerson'



const routes = (

   <Route path = '/' >
     <IndexRoute component = {GetPerson}></IndexRoute>
    //  <Route path = "/getPerson" component = {CreatePersonForm}/>
     <Route path = "/getPersonById/:id" component = {GetPersonById}/>
     <Route path = "/updatePerson/:id" component = {UpdatePerson}/>

   </Route>


)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);
