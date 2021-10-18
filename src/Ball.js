import React, { useState } from "react";
import { Circle, Ellipse } from 'react-shapes';
import createVector from 'react-p5'
import { ellipse } from 'react-p5'
import sketch from './p5/empty-example/sketch.js'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import './App.js'
import p5 from "p5";

let width;
let height;

const Ball = (props) => {



  // ellipse(this.pos, this.pos, this.r * 2, this.r * 2);

  console.log("Here it is 20", props.width);

  return (
    <>
      {props.height, props.width}
      <ReactP5Wrapper sketch={sketch} width={props.width} height={props.height} />
    </>
  );

}

export default Ball;