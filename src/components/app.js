import React, { Component } from 'react';
import moment from 'moment';
import  DuckQuestions  from './duck-functions';

import DuckContainer from './duck-container';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <div className="navbar-wrapper">

        <div className="contact">
            <h1>Contact</h1>
        </div>
        
        <div className="logo-wrapper">

        </div>

          <div className="about">
            <h1>About</h1>
          </div>

        </div>


        <div className="container">
          
          <div className="page-container">
            <h1>Duck Wizard</h1>
            <DuckContainer />
          </div>

          
        </div>
      </div>
    );
  }
}
