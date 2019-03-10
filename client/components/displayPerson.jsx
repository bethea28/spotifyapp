import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import CreatePersonForm from './createPersonForm';
import CreatItem from './createItem'

class DisplayPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      name: props.name,
      age: props.age,
      favoriteCity: props.favoriteCity,
    }

    this.update = this.update.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.delete = this.delete.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps({ name, age, favoriteCity }) {
    this.setState({ name, age, favoriteCity })
  }

  update() {
    this.setState( prevState => ({
      updating: !prevState.updating,
    }));
  }
  updateInfo({name, age, favoriteCity}) {
    this.setState(prevState => ({
      name,
      age,
      favoriteCity,
      updating: !prevState.updating,
    }))
  }
  delete() {
    const id = this.props.params.personId || this.props.id;
    axios.delete(`/api/person/${id}`)
    .then(() => {
      this.props.router.push('/')
      window.location.reload()



    })
    .catch((error) => {
      console.log(error);
    });
  }

  refresh(event) {
    // window.location.reload()
  }

  render () {
    const { id, listPerson } = this.props;
    const { updating, name, age, favoriteCity, } = this.state;
    return (
    <div>




      <div style = {{display: 'flex', justifyContent: 'center'}}>

        <ul className={listPerson ? 'list_person' : 'show_person'} style={{display: 'flex', flexDirection: 'row', width:'60%'}}>
          {
            // show the create person form if update is true or show this
          }
          { updating
          ? <CreatePersonForm id={id} update updateParent={this.updateInfo} {...this.state}/>
          : (
            <div style={{border: '1px solid red', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
              <div style = {{display: 'flex', flexDirection: 'row', border: '1px solid red', width: 150}}>
                <h3 >NAME:</h3>
                <Link  style = {{textDecoration: 'none', marginTop: 20, marginLeft: 10}}to= {`/getPersonById/${id}`}> {name}</Link>

              </div>
              <div style = {{display: 'flex', flexDirection: 'row', border: '1px solid red', width: 150}}>
                <h3 >AGE:</h3>
                <p style = {{marginTop: 20, marginLeft: 10}}>{age}</p>

              </div>
                <div style={{display: 'flex', flexDirection: 'row', border: '1px solid red', width: 250}}>
                  <h3>FAVORITE CITY:</h3>
                  <p style = {{marginTop: 20, marginLeft: 10}}>{favoriteCity}</p>
                </div>
            </div>
          )}
          <button style ={{marginRight: 10, border: 'none', backgroundColor: 'lightblue', borderRadius: 20, width: '10%'}}onClick={this.update}>{updating ? 'Cancel' : 'Update'}</button>
          <button onClick={this.delete}>Delete</button>

        </ul>
      </div>
      {/* <CreatItem/> */}
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name || state.name,
  age: ownProps.age || state.age,
  favoriteCity: ownProps.favoriteCity || state.favoriteCity,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({

  }, dispatch)
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPerson));
