import React from 'react'
import {connect} from 'react-redux'
import {handleCity, handleDescription} from './action'
import {handleName, handleAge} from './action'
import {createPerson} from './action'
import store from '../store/store'
import personActions from './action'
import {bindActionCreators} from 'redux';






const CreatePersonForm = (props) => {
  console.log(props.name)
  return(
    <div>
      <form onSubmit= {(event) => {event.preventDefault(); props.createPerson(props.name, props.favoriteCity, props.age, props.description)}}>
        <input onChange = {(event) => {props.handleName(event.target.value)}} type = 'text' placeholder = 'Name'/>
        <input onChange = {(event) => { props.handleCity(event.target.value)}} type = 'text' placeholder = 'Favorite City'/>
        <input onChange = {(event) => { props.handleAge(event.target.value)}} type = 'text' placeholder = 'Age'/>
        <input type = 'submit' placeholder = 'submit'/>
      </form>

      {props.name}
      {props.favoriteCity}
      {props.age}
    </div>
  )

}


const mapStateToProps = store => {
  return {
    name: store.name,
    favoriteCity: store.favoriteCity,
    age: store.age,
    description: store.description

  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log('dispatch')
  // return {
    return  bindActionCreators({handleName,handleCity, handleAge, handleDescription, createPerson}, dispatch)

  }



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePersonForm)
