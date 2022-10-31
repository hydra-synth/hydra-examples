// use custom shaders in hydra

//example

setFunction({
  name: 'red', // name that will be used to access function in js as well as in glsl
  type: 'src', // can be 'src', 'color', 'combine', 'combineCoords'. see below for more info
  inputs: [
    {
      name: `amount`,
      type: `float`,
      default: 1.0
    }
  ],
  // The above code generates the glsl function
  glsl:
  `return vec4(amount,0,0,1);`
},)

//try it

red(0.7).out()


//Types and default arguments for hydra functions.
//The value in the 'type' field tells which type the function will be returned as well as default arguments.

const types = {
  'src': {
    returnType: 'vec4',
    args: ['vec2 _st'] // the texture coordinates
  },
  'coord': {
    returnType: 'vec2',
    args: ['vec2 _st'] // the texture coordinates
  },
  'color': {
    returnType: 'vec4',
    args: ['vec4 _c0'] // the input texture
  },
  'combine': {
    returnType: 'vec4',
    args: ['vec4 _c0', 'vec4 _c1'] // two input texture
  },
  'combineCoord': {
    returnType: 'vec2',
    args: ['vec2 _st', 'vec4 _c0'] //texture coordinates and input texture
  }
}


//get glsl code from hydra code
//this way you will get the code + all the utility functions, the code is at the bottom

shader = osc().modulate(noise()).glsl()

console.log(shader)
