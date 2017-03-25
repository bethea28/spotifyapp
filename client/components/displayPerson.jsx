import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import CreatePersonForm from './createPersonForm';

class DisplayPerson extends Component {
  constructor() {
    super();
    this.state = {
      updating: false,
    }
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  update() {
    const { id, name, age, favoriteCity, listPerson } = this.props;
    if (this.state.updating) {
      axios.put(`/api/person/'${this.props.params.id}`, {
        name,
        age,
        favoriteCity,
      })
      .then((data) => {
        console.log('work update');
      })
      .catch((error) => {
        console.log(error);
      });
    };
    this.setState( prevState => ({
      updating: !prevState.updating,
    }));
  }

  delete() {
    axios.delete('/api/person/' + this.props.params.id, {

    })
    .then((data) => {
      // this.setState({person: data.data})
      // console.log(data.data);
      this.props.router.push('/')
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render () {
    const { id, name, age, favoriteCity, listPerson } = this.props;
    const { updating } = this.state;
    return (
      <li className={listPerson ? 'list_person' : 'show_person'}>
        { updating
        ? <CreatePersonForm />
        : (
          <div>
            <Link to= {`/getPersonById/${id}`}>{name}</Link>
            <p>{age}</p>
            <p>{favoriteCity}</p>
          </div>
        )}
        <button onClick={this.update}>{updating ? 'Save' : 'Update'}</button>
        <button onClick={this.delete}>Delete</button>
      </li>
    );
  }
}

export default DisplayPerson;
