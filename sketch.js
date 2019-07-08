var sliders = [];
var n = 319;
var angle = 0;
var inc = 0;

function setup() {
  noCanvas();
  for (var i = 0; i < n; i++) {
    sliders[i] =createSlider(0, 255, 0);
  }
  sliders[0].input(adjustSliders);
}

function draw() {

  //rnd();
 var offset = inc;
  for (var i = 1; i < sliders.length; i++) {
    sinMap(angle+offset);
     sliders[i].value(x);
    //sliders[i].value(x+i);
    offset+=inc;
  }
    angle += 0.1;

}

function rnd() {
  x += random(-5, 5);
}

function sinMap(_a) {
  x = map(sin(_a), -1, 1, 0, 255);
  //angle += 0.01;
}

function adjustSliders() {
  inc = map(sliders[0].value(),0,255,0,Math.PI);
}
