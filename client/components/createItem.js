import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createItem, selectChange } from './action';
import axios from 'axios'

class CreateItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      item: '',
      allItems:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount(){
    axios.get('/api/item').then((data)=>{
      console.log('allItys', data)
      this.setState({allItems: data.data})
    })
  }

  handleSelectChange(event){
    console.log('id',event.target.value)
    this.props.selectChange(event.target.value)
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
    console.log('stage', this.state.allItems)
    return (
      <div>
        <form  onSubmit = {this.submit}>
          <input name = "item" onChange={this.handleChange} placeholder = 'create item' type= 'text'/>
          <input type= 'submit'/>
        </form>
        <select onChange = {this.handleSelectChange}>
        
         {this.state.allItems && this.state.allItems.map((item,key)=>{
           return <option value = {item.id}>{item.name}</option>
         })}
        </select>
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
    selectChange
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateItem);
