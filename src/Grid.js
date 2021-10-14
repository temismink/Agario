import React from "react";
import reactDom from "react-dom";
import Sketch, { keyPressed } from "react-p5";
import { Line } from "react-shapes";

	let x = 50;
    let y = 50;
    let ballX = 500;
    let ballY = 500;
    let mass = 10;
    let cols = 30;
    let rows = 30;
    let speedX = 1;
    let speedY = 1;

export default (props) => {
	const setup = (p5, canvasParentRef) => {

		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
        let cnv = p5.createCanvas(1000, 1000).parent(canvasParentRef);
        cnv.mouseMoved((event) => {
            console.log(event);
            x = event.clientX;
            y = event.clientY;
        })

        console.log(keyPressed());
    };
    
    function keyPressed(key) {
       console.log(key);
    }

	const draw = (p5) => {
		p5.background(50);
        p5.ellipse(500, 500, 70, 70);
        
        if (x > ballX){
            speedX+=(x-ballX)/100;
        } else if (x < ballX){
            speedX-=(ballX-x)/100;
        }

        if (y > ballY){
            speedY+=(y-ballY)/100;
        } else if (y < ballY){
            speedY-=(ballY-y)/100;
        }

        let ax1 = p5.line(1000, 1000-speedY, 0, 1000-speedY);
        let ax2 = p5.line(1000, 900-speedY, 0, 900-speedY);
        let ax3 = p5.line(1000, 800-speedY, 0, 800-speedY);
        let ax4 = p5.line(1000, 700-speedY, 0, 700-speedY);
        let ax5 = p5.line(1000, 600-speedY, 0, 600-speedY);
        let ax6 = p5.line(1000, 500-speedY, 0, 500-speedY);
        let ax7 = p5.line(1000, 400-speedY, 0, 400-speedY);
        let ax8 = p5.line(1000, 300-speedY, 0, 300-speedY);
        let ax9 = p5.line(1000, 200-speedY, 0, 200-speedY);
        let ax10 = p5.line(1000, 100-speedY, 0, 100-speedY);
        

        let rect2 = p5.line(1000-speedX, 0, 1000-speedX, 1000);
        let rect3 = p5.line(900-speedX, 0, 900-speedX, 1000);
        let rect4 = p5.line(800-speedX, 0, 800-speedX, 1000);
        let rect5 = p5.line(700-speedX, 0, 700-speedX, 1000);
        let rect6 = p5.line(600-speedX, 0, 600-speedX, 1000);
        let rect7 = p5.line(500-speedX, 0, 500-speedX, 1000);
        let rect8 = p5.line(400-speedX, 0, 400-speedX, 1000);
        let rect9 = p5.line(300-speedX, 0, 300-speedX, 1000);
        let rect10 = p5.line(200-speedX, 0, 200-speedX, 1000);
       
        
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
        //ballX+=1;
        //speedX++;
	};

	return <Sketch setup={setup} draw={draw} />;
};
