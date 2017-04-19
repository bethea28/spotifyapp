import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DisplayPerson from './displayPerson';
import CreatePersonForm from './createPersonForm';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      updating: false,
    }
  }

  render(){
    // people = props.people
    const { people } = this.props;
    return(
      <div>
        <div>

        </div>
          <center>
            <h2>Create Person</h2>

          </center>
        <CreatePersonForm />
        {people && people.map(person => (
          <DisplayPerson key={person.id} {...person} listPerson/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({

  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
