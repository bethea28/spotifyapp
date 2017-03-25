import React from 'react';
import store from '../store/store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
// import CreatePersonForm from './createPerson';
import Home from './Home';
// import UpdatePerson from './updatePerson';
import { getEveryone } from './action';

const routes = (
   <Route path = '/' >
     <IndexRoute onEnter={getEveryone} component={Home} />
   </Route>
)
//  <Route path = "/getPerson" component = {CreatePersonForm}/>
//  <Route path = "/getPersonById/:id" component = {GetPersonById}/>
//  <Route path = "/updatePerson/:id" component = {UpdatePerson}/>
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
