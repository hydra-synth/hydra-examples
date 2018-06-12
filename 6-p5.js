// Initialize P5 canvas in variable p1
// It is only necessary to call this once
p1 = new P5() // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}

// draw a rectangle at point 300, 100
p1.rect(300, 100, 100, 100)

// Note that P5 runs in instance mode, so all functions need to start with the variable where P5 was initialized (in this case p1)
// reference for P5: https://P5js.org/reference/
// explanation of instance mode: https://github.com/processing/P5.js/wiki/Global-and-instance-mode

// When live coding, the "setup()" function of P5.js has basically no use; anything that you would have called in setup you can just call outside of any function.

p1.clear()

for(var i = 0; i < 100; i++){
  p1.fill(i*10, i%30, 255)
  p1.rect(i*20, 200, 10,200)
}

// To live code animations, you can redefine the draw function of P5 as follows:
// (a rectangle that follows the mouse)
p1.draw = () => {
  p1.fill(p1.mouseX/5, p1.mouseY/5, 255, 100)
  p1.rect(p1.mouseX, p1.mouseY, 30, 30)
}


p1.noStroke()
p1.fill(255, 0, 100)
p1.draw = () => {
  p1.clear()
  p1.rect(p1.mouseX, p1.mouseY, 300, 300)
}

// Define a variable to use within the draw loop
xPos = 0
p1.draw = () => {
  xPos++
  p1.clear()
  if(xPos > p1.width) xPos = 0
  p1.rect(xPos, p1.mouseY, 100, 100)
}

// If an error is thrown within the draw loop, sometimes the P5 canvas will stop working. You can remove it and then reinit.
p1.remove() // remove canvas

p1 = new P5() // start again
// You can also create more than one P5 canvas by defining more variables. i.e. p2 = new P5()

// To use P5 as an input to hydra, simply use the canvas as a source:
s0.init({src: p1.canvas})

// Then render the canvas
src(s0).repeat().out()

src(s0).repeat().mult(osc(5, 0.2, 2)).out()

// By default, the P5 canvas is rendered on top of the hydra buffers. You can hide it by calling:
p1.hide()

p1.show() // show the canvas

// using feedback
p1.noStroke()
p1.fill(255, 0, 100)
p1.hide()
p1.draw = () => {
  p1.clear()
  p1.rect(p1.mouseX, p1.mouseY, 300, 300)
}
//
src(s0)
  .add(o0, 0.9)
  .modulate(o0, 0.01)
  .scale(1.01)
  .hue(0.04)
  .out()
