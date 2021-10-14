import React, { useState } from "react";
import { Circle } from 'react-shapes';
const Ball = () => {



    return (
      <div>
        <Circle r={50} fill={{color:'#2409ba'}} 
        stroke={{color:'#E65243'}} strokeWidth={3} />
      </div>
    );

  }
  
  export default Ball;