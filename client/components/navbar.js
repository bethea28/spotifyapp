import React from 'react'
import {Link} from 'react-router'
import Home from './home';


const Navbar = (props) => {
  return (
    <div style = {{backgroundColor: 'yellow'}}>
      <ul style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

         <ul style = {{fontSize: 20, width: 350, height: 50, marginRight:100, display: 'flex', justifyContent: 'center', backgroundColor: 'orange', borderRadius: 10}}><Link to = {'/'}>Home</Link></ul>

      </ul>
      <center>
      <h1 >WELCOME TO PHONE BOOK</h1>

      </center>
      {props.children}
    </div>
  )
}

export default Navbar
