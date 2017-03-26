import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DisplayPerson from './displayPerson';

const ShowProfile = ({ children, people }) => {
  return (
    <div style = {{backgroundColor: "yellow"}}>
      {children}
      {people && people.map(person => (
        <div style = {{display: 'flex', justifyContent: 'center'}}>

          <div><Link key={person.id} to={`/getPersonById/${person.id}`}> <h1 style = {{flexWrap: 'wrap'}}>{person.name} </h1></Link> </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  people: state.people,
});

export default connect(
  mapStateToProps
)(ShowProfile);
