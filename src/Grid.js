import React from "react";
import reactDom from "react-dom";
import Sketch, { keyPressed } from "react-p5";
import LineDrawer from "react-p5";
import { Line } from "react-shapes";
import createVector from 'react-p5'
import Ball from './Ball.js'
let mass = 10;
let cols = 30;
let rows = 30;
let speedX = 1;
let speedY = 1;
let j = 0;
let mapX = 5000
let lines = [];
var width = 100;
var height = 100;
var blob;
let r = 50;
let pos;
var blobs = [10];
export default (props) => {
    const setup = (p5, canvasParentRef) => {

        pos = p5.createVector(width / 2, height / 2);

        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        let cnv = p5.createCanvas(600, 600).parent(canvasParentRef);


        for (var i = 0; i < 10; i++) {
            blobs[i] = p5.ellipse(100, 100, 16, 16);
        }

        // cnv.mouseMoved((event) => {
        //     console.log(event);
        //     x = event.clientX;
        //     y = event.clientY;
        // })
    };

    const draw = (p5) => {

        p5.background(100);
        //p5.ellipse(pos.x, pos.y, r, r);
        <Ball>

        </Ball>

        for (var i = 0; i < blobs.length; i++) {
            let rand = blobs[i];
        }
        // if (x > ballX) {
        //     speedX += (x - ballX) / 100;
        // } else if (x < ballX) {
        //     speedX -= (ballX - x) / 100;
        // }

        // if (y > ballY) {
        //     speedY += (y - ballY) / 100;
        // } else if (y < ballY) {
        //     speedY -= (ballY - y) / 100;
        // }


        // let i = 1000;


        // let j = 1000;
        // if ((1000 - (i - speedY)) > 100) {
        //     while (1000 - (j - speedY) > 100) {
        //         lines.push(p5.line(1000, j - speedY, 0, j - speedY));
        //         j += 100;
        //     }
        // }

        // let h = 1000;
        // if (speedY - 1000 < 0) {
        //     while ((h - speedY) > 0) {
        //         lines.push(p5.line(1000, h - speedY, 0, h - speedY));
        //         h -= 100;
        //     }
        // }

        // let k = 1000;

        // lines.push(p5.line(k - speedX, 0, k - speedX, 1000));
        // if ((1000 - (1000 - speedX)) > 100) {
        //     while ((1000 - (k - speedX)) < 1000) {
        //         lines.push(p5.line(k - speedX, 0, k - speedX, 1000));
        //         k += 100;
        //     }
        // }
        // else if ((i - speedY) > 0){
        //     while ((j - speedY) > 0){
        //         lines.push(p5.line(1000, j-speedY, 0, j-speedY));
        //         j -= 100;
        //     }
        // }



        // let newLine = lines[lin];




        // let ax3 = p5.line(1000, 800-speedY, 0, 800-speedY);
        // let ax4 = p5.line(1000, 700-speedY, 0, 700-speedY);
        // let ax5 = p5.line(1000, 600-speedY, 0, 600-speedY);
        // let ax6 = p5.line(1000, 500-speedY, 0, 500-speedY);
        // let ax7 = p5.line(1000, 400-speedY, 0, 400-speedY);
        // let ax8 = p5.line(1000, 300-speedY, 0, 300-speedY);
        // let ax9 = p5.line(1000, 200-speedY, 0, 200-speedY);
        // let ax10 = p5.line(1000, 100-speedY, 0, 100-speedY);



        // let rect2 = p5.line(1000 - speedX, 0, 1000 - speedX, 1000);
        // let rect3 = p5.line(900 - speedX, 0, 900 - speedX, 1000);
        // let rect4 = p5.line(800 - speedX, 0, 800 - speedX, 1000);
        // let rect5 = p5.line(700 - speedX, 0, 700 - speedX, 1000);
        // let rect6 = p5.line(600 - speedX, 0, 600 - speedX, 1000);
        // let rect7 = p5.line(500 - speedX, 0, 500 - speedX, 1000);
        // let rect8 = p5.line(400 - speedX, 0, 400 - speedX, 1000);
        // let rect9 = p5.line(300 - speedX, 0, 300 - speedX, 1000);
        // let rect10 = p5.line(200 - speedX, 0, 200 - speedX, 1000);


        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        //ballX+=1;
        //speedX++;
    };

    return <Sketch setup={setup} draw={draw} />;
};
