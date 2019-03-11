import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePerson, createPerson } from './action';
import store from '../store/store';

class CreatePersonForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      favoriteCity: '',
      allItems: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentWillReceiveProps({ name, age, favoriteCity }) {
    this.setState({ name, age, favoriteCity })
  }

  handleChange(event){
    if(event.target.name == 'age' && event.target.value == ''){
      alert('invalid input...must be integer')
    }
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.name)
    console.log(event.target)
  //   console.log( this.state.age)
  //   console.log(this.state.favoriteCity)
  }

  submit(event){
    console.log('getStore', store.getState())
    event.preventDefault();
    if(this.props.update) {
      event.preventDefault();
      this.props.updatePerson(Object.assign(this.state, {id: this.props.id || this.props.params.personId }));
      this.props.updateParent(this.state);
    } else {
      event.preventDefault();
      this.props.createPerson(this.state);
    }
  }

  render(){
    // console.log(this.state)
    return (
      <div>
        <div>
          <div style = {{height: 30}}>

          </div>

          <form style = {{display:"flex", justifyContent:'center'}} onSubmit= {(event)=>{this.submit(event)}}>

            <input style = {{height: 50, border: '1px solid red'}}
              onChange={this.handleChange}
              type='text'
              placeholder='Name'
              name='name'
              value= {this.state.name || ''}

            />
          <input style = {{height: 50, border: '1px solid red'}}
            onChange={this.handleChange}
            type='text'
            placeholder='Age'
            name='age'
            value= {this.state.age || ''}

            />
          <input style = {{height: 50, border: '1px solid red'}}
              onChange={this.handleChange}
              type='text'
              placeholder='Favorite City'
              name='favoriteCity'
              value= {this.state.favoriteCity || ''}

            />
            <button>Submit</button>
          </form>
        </div>
        <div style ={{height: 100}}>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.name,
  favoriteCity: state.favoriteCity,
  age: state.age,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createPerson,
    updatePerson
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePersonForm);
