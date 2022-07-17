import "./App.css";
import React, { Component } from "react";
import Form from './components/Form';
import Contact from "./components/Contact";
import Final from "./components/Final";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
       {/*<div className="App-header"><h1>Profession Tracker</h1></div>*/}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/final" element={<Final />} />
          </Routes>
        </BrowserRouter>
        <div class="App-container">
          <div className="App-container-left"></div>
          <div className="App-container-right">
            { /*<Form/>*/}
          </div>
          <div className="App-container-Final">{/*<Final/>*/}</div>
        </div>

        <div class="Contact-container">
          <div style={{ border: "0px solid black", margin: "auto", width: "30%", bottom: "25%", position: "absolute", left: "35%" }}>{/*<Contact/>*/}</div>
        </div>
        <div class="footer">Developed by Teja Attuluri. All copy rights reserved.</div>
        <div class="teja">
          <p>Start Date:27 June 2022.</p>
          <p> Days Elapsed:8.</p>
          <p>Due Date:15 July 2022.</p>
        </div> 
      </div>
    );
  }
}

export default App;