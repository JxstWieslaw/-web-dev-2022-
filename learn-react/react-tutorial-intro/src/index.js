import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

const name = 'Wieslaw'
const heading = <h1>Hello, {name}</h1>


ReactDOM.render(<App/>, document.getElementById('root'));