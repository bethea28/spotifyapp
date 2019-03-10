import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createItem } from './action';
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
  }

  componentDidMount(){
    axios.get('/api/item').then((data)=>{
      console.log('allItys', data)
      this.setState({allItems: data.data})
    })
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
        <select>
         {/* {this.state.allItems.map((item,key)=>{
           return <option>{item.name}</option>
         })} */}
         {this.state.allItems && this.state.allItems.map((item,key)=>{
           return <option>{item.name}</option>
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
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateItem);
