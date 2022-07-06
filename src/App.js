import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import Contact from './components/Contact'

class App extends Component {
  render() {    
    return (
      <div>
        <div className="App-header">Login form</div>
        <div class="App-container">
            <div className="App-container-left"></div>
            <div className="App-container-right">
             {/*<Form/>*/}
            </div>
            <Contact/>
        </div>
        <div class="footer">Developed by Teja Attuluri</div>
       {/*<div class="teja">
          <p>Start Date:27 June 2022.</p>
          <p> Days Elapsed:8.</p>
          <p>Due Date:15 July 2022.</p>
    </div> */}
      </div>
      );
  }
}

export default App;
