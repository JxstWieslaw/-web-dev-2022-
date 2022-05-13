import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import { Buffer } from 'buffer';
import React, {Component} from 'react';

import Signup from './signup/Signup'
import Home from './components/home/Home'
global.Buffer = Buffer;

class App extends Component{
  constructor(){
    super()
    this.state={
      login : true,
    }
  }
  render(){  
    return(    
      <Router>
        <Routes >  
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/home' element={<Home/>}/>
        </Routes>        
      </Router>     
    )    
  }
}

export default App;

