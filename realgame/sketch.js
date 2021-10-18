import blob from blob.js

var blob;
var blobs = [];

function setup() {
  createCanvas(600, 600);
  blob = new Blob(64);
  for (var i = 0; i < 10; i++) {
    blobs[i] = new Blob(16);
  }
}

function draw() {
  background(0);
  blob.show();
  for (var i = 0; i < 10; i++) {
    blobs[i].show();
  }
  // put drawing code here
}