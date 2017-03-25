import React, {Component} from 'react'
import axios from 'axios'

class UpdatePerson extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: null,
      favoriteCity: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)

  }

  handleChange(key, event){
    let word = event.target.value
    this.setState({[key]: word})
    console.log(this.state.name, this.state.age, this.state.favoriteCity)
  }

  handleUpdate(event){
    event.preventDefault()
    axios.put('/api/person/' + this.props.params.id, {name: this.state.name, age: this.state.age, favoriteCity: this.state.favoriteCity})
    .then((data) => {
      // this.setState({person: data.data})
      console.log('work update');
    })
    .catch((error) => {
      console.log(error);
    });

  }

  render(){
    return (
      <div>
        <form onSubmit= {this.handleUpdate}>
          <input onChange = {this.handleChange.bind(this,'name')} type = 'text' placeholder = 'Name'/>
          <input onChange = {this.handleChange.bind(this,'favoriteCity')} type = 'text' placeholder = 'Favorite City'/>
          <input onChange = {this.handleChange.bind(this,'age')} type = 'text' placeholder = 'Age'/>
          <input type = 'submit' placeholder = 'submit'/>
        </form>
      </div>
    )
  }
}

export default UpdatePerson
