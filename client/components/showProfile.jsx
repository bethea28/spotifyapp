import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DisplayPerson from './displayPerson';

const ShowProfile = ({ children, people }) => {
  return (
    <div>
      {children}
      {people && people.map(person => (
        <Link key={person.id} to={`/getPersonById/${person.id}`}>{person.name}</Link>
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
