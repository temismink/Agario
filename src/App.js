import logo from './logo.svg';
import './App.css';
import Ball from './Ball.js'
import Grid from './Grid.js'
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper'
import p, { ellipse } from "p5";
import createVector from 'react-p5'
import Sketch from './p5/empty-example/sketch.js'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      window: getWindowDimensions(),

    }
  }


  render() {
    return (
      <div className="App">

        <ReactP5Wrapper sketch={sketch} width={this.state.window.width} height={this.state.window.height}>
          <Sketch>

          </Sketch>
        </ReactP5Wrapper>


      </div>
    );
  }
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


// function Blob(x, y, r) {
//   //this.pos = createVector(this.width / 2, this.height / 2);
//   this.r = r;
//   this.pos = p.createVector(x, y);
//   const { width, height } = getWindowDimensions();

//   this.update = function (mouseX, mouseY) {
//     var vel = p.createVector(mouseX - width / 2, mouseY - height / 2);
//     vel.setMag(3);
//     this.pos.add(vel);
//   }

//   this.show = function () {
//     p.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
//     p.fill(255);
//   }
// }

function sketch(p) {

  const { width, height } = getWindowDimensions();
  var blob;
  var blobs = [];
  let canvas;
  var mouseX, mouseY;
  var pos;
  var r = 64;

  p.setup = () => {

    p.createCanvas(300, 200);

    // pos = p.createVector(width / 2, height / 2);

    // cnv.mouseMoved((event) => {
    //   console.log(event);
    //   this.mouseX = event.clientX;
    //   this.mouseY = event.clientY;
    // })

    // p.ellipse(width / 2, height / 2, r * 2, r * 2);
    // p.stroke(100);
    // blob = new Blob(100, 200, 64);
    // for (var i = 0; i < 10; i++) {
    //   blobs[i] = new Blob(500, 500, 10);
    // }
    // p.stroke(100);
  }

  p.draw = () => {
    p.ellipse(300, 300, r * 2, r * 2);
    // for (var i = 0; i < 10; i++) {
    //   blobs[i].show(19, 19);
    // }
    // blob.update(this.mouseX, this.mouseY);
    // p.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
  }
}

export default App;
