import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = (props) => {
  return (
    <div>
      <h1>React - Routing</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Route path="/" component={ Home } exact={ true }/>
      <Route path="/about" component={ About }/>
      <Route path="/contact" component={ Contact }/>
    </div>
  )
}

export default App
