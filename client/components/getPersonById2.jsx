pimport React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleCity} from './action'
import {handleName} from './action'
import {createPerson} from './action'
import store from '../store/store'
import personActions from './action'
import {bindActionCreators} from 'redux';
import axios from 'axios'
import {Router, Link} from 'react-router'


class GetPersonId extends Component {
  constructor(props){
    super(props)
    this.state = {
      person: null
    }
    this.deletePerson = this.deletePerson.bind(this)
    // this.updatePerson = this.updatePerson.bind(this)
  }


  componentDidMount(){
    axios.get('/api/person/' + this.props.params.id, {

    })
    .then((data) => {
      this.setState({person: data.data})
      console.log(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deletePerson(id){

    axios.delete('/api/person/' + this.props.params.id, {

    })
    .then((data) => {
      // this.setState({person: data.data})
      // console.log(data.data);
      this.props.router.push('/')
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    if(this.state.person){

      return(
        <div>
            <div>
              {this.state.person.name ? <ul> {this.state.person.name }</ul> : <p>loading</p>}
              {this.state.person.favoriteCity ? <ul> {this.state.person.favoriteCity} </ul> : <p>loading</p>}
              {this.state.person.age ? <ul> {this.state.person.age} </ul> : <p>loading</p>}
              {this.state.person.description ? <ul> {this.state.person.description} </ul> : <p>loading</p>}

            </div>

            <button onClick = {this.deletePerson.bind(this,this.props.params.id)}> DELETE</button>

            <Link to = {'/updatePerson/' + this.props.params.id}> <button> UPDATE</button> </Link>

        </div>
      )
    }else{
      return (
        <div>
          <p>loading</p>
        </div>
      )
    }
  }
}

export default GetPersonId
