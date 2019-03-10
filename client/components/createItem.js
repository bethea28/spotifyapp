import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createItem } from './action';

class CreateItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(event){
    let arg = event.target.value
    console.log('events', arg)
    this.setState({[event.target.name]: event.target.value})
  }

  submit(event){
    event.preventDefault()
    console.log('sub', event)
    this.props.createItem(this.state.item)
  }

  render(){
    console.log('stage', this.state.item)
    return (
      <div>
        <form  onSubmit = {this.submit}>
          <input name = "item" onChange={this.handleChange} placeholder = 'create item' type= 'text'/>
          <input type= 'submit'/>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  itemName: state.itemName,
  // favoriteCity: state.favoriteCity,
  // age: state.age,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createItem,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateItem);
