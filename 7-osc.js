// to do: add more examples

// to try this example, run the processing sketch in the folder processing.
// clicking on the sketch window sends the mouse x and y position to hydra via osc
// set port to listen to osc messages. default port is 57101
msg.setPort(51000)

// do something when a message is received at address '/test'
msg.on('/test', (args) => {
// log osc results to console
 log(args)
})

// uses argument as variables in hydra
freq = 10
rot = 0.2
msg.on('/test', (args) => {
 freq = args[0]
 rot = args[1]/10
})

osc(() => freq)
.mult(osc().rotate(()=>rot))
.out()
