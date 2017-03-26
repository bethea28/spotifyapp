import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePerson, createPerson } from './action';

class CreatePersonForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name,
      age: props.age,
      favoriteCity: props.favoriteCity
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentWillReceiveProps({ name, age, favoriteCity }) {
    this.setState({ name, age, favoriteCity })
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
    console.log(this.state)
    return (
      <div>
        <div>
          <div style = {{height: 30}}>

          </div>
          <center>
            <h3>Create Person</h3>

          </center>
          <form style = {{display:"flex", justifyContent:'center'}}onSubmit= {this.submit}>

            <input
              onChange={this.handleChange}
              type='text'
              placeholder='Name'
              name='name'
              value= {this.state.name || ''}
            />
            <input
              onChange={this.handleChange}
              type='text'
              placeholder='Favorite City'
              name='favoriteCity'
              value= {this.state.favoriteCity || ''}

            />
            <input
              onChange={this.handleChange}
              type='text'
              placeholder='Age'
              name='age'
              value= {this.state.age || ''}

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePersonForm));
