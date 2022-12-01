import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Nav from './components/Nav'
import Qna from './components/Qna'



function App() {
 

  return (
    
    <><div className="App">
      <Header />
      <hr></hr>
      <Nav></Nav>

    </div>

    </>
  );
}





export default App;
