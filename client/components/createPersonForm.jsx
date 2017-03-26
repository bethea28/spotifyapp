import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePerson, createPerson } from './action';

class CreatePersonForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: null,
      favoriteCity: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.name, this.state.age, this.state.favoriteCity)
  }

  submit(event){
    event.preventDefault();
    if(this.props.update) {
      this.props.updatePerson(Object.assign(this.state, {id: this.props.id || this.props.params.personId }));
      this.props.updateParent(this.state);
    } else {
      this.props.createPerson(this.state);
    }
  }

  render(){
    return (
      <div>
        <form onSubmit= {this.submit}>
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
          />
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='Favorite City'
            name='favoriteCity'
          />
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='Age'
            name='age'
          />
        <button>Submit</button>
        </form>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePersonForm));
