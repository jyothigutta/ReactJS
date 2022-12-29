import logo from './logo.svg';
import React from 'react'
import './App.css';
import TravelBlog from './TravelBlog';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TravelBlog></TravelBlog>
    </div>
  );
}

export default App;
