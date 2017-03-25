import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleCity} from './action'
import {handleName} from './action'
import {createPerson} from './action'
import store from '../store/store'
import personActions from './action'
import CreatePerson from './createPerson';
import axios from 'axios'
import {Router, Link} from 'react-router'







class GetPerson extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: ''
    }
  }



  componentDidMount(){
    axios.get('/api/person', {

    })
    .then((data) => {
      this.setState({people: data.data})
      // console.log(this.state.people);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    console.log(this.state.people)
    return(
      <div>
        <div>
          <h1>WELCOME TO PHONE BOOK</h1>
        </div>
        {this.state.people ? this.state.people.map((ele, key)=>{
          return <ul key = {key}> <Link to= {'/getPersonById/' + ele.id}> {ele.name} {ele.favoriteCity} </Link> </ul>
        }) : <p>loadiing</p> }

        <div>
          <CreatePerson />
        </div>
        
      </div>
    )
  }
}

export default GetPerson
