import "./App.css";
import React, { Component } from "react";
import Form from './components/Form';
import Contact from './components/Contact';
import Final from './components/Final';
import Navbar from './components/Navbar';
import Date from './components/Date';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        {/*<div className="App-header"><h1>Profession Tracker</h1></div>*/}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Form/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/final" element={<Final/>} />
            <Route path="/dates" element={<Date/>} />
          </Routes>
        </BrowserRouter>
        <div className="footer">Developed by Teja Attuluri. All copy rights reserved.</div>
      </div>
    );
  }
}

export default App;