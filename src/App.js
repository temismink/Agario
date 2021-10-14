import logo from './logo.svg';
import './App.css';
import Ball from './Ball.js'
import Grid from './Grid.js'
import { useState, useEffect } from 'react';

function App() {

  const {height, width} = getWindowDimensions();
  console.log(height);

  const ROWS = 10;

  return (
    <div className="App">
      
          <Grid/>

      
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default App;
