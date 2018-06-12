// to do:
// talk about functions, variables, and abstractions
// using mouse and time as input
// logging to console


// Each parameter can be defined as a function rather than a static variable. For example,
gradient().repeat(
  function({time}) {
    return 10*Math.sin(time*0.6)
  }
).out()
// modifies the number of repetitions as a function of time.

// This can be written more concisely using es6 syntax:
gradient().repeat(
  ({time}) => 10*Math.sin(time*0.6)
).out()

// you can also define functions as variables and then reuse them
sides = ({time}) => Math.floor(10 * Math.sin(time * 0.6))
//
shape(sides)
  .diff(shape(sides, 0.1))
  .out()

// return a function from a function
scaledSides = scale => ({time}) => (Math.floor(scale * Math.sin(time * 0.6))+ scale + 3)
// use the function scaled sides, passing a different value in for scale each time
shape(scaledSides(8))
  .diff(shape(scaledSides(4), 0.2))
  .out()


// modifies the oscillator frequency as a function of time.
// This can be written more concisely using es6 syntax:

osc(({time}) => (100 * Math.sin(time * 0.1))).out()
