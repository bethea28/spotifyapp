import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DisplayPerson from './displayPerson';
import CreatePersonForm from './createPersonForm';
import CreateItem from './createItem';

console.log('test', <CreateItem test = 'test'/>)
class Home extends Component {
  constructor(){
    super()
    this.state = {
      updating: false,
    }
    this.chooseItem = this.chooseItem.bind(this)
  }
  chooseItem(arg){
    console.log('argitem', arg)
  }
  render(){
    const { people } = this.props;
    console.log('allprops', this.props)
    return(
      <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div>

        </div>
          <center>
            <h2>Create Person</h2>

          </center>
        <CreatePersonForm />
        {people && people.map(person => (
          <DisplayPerson key={person.id} {...person} listPerson/>
        ))}

        <CreateItem />

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
