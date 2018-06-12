p1 = new P5()
  // load video
  vid = p1.createVideo(atom.project.getPaths()[0]+'/assets/jelly.webm')
  // set video to loop
  vid.loop()
  // draw to canvas
  p1.draw = () => {
    p1.clear()
    p1.image(vid, 0, 0, p1.width, p1.height)
  }

  p1.hide()

  // use within hydra
  s0.init({src: p1.canvas})
  src(s0)
    .rotate(0, -0.2)
    .repeat(5, 3, 0.5)
    .saturate(4.0)
    .mult(osc(4, 0.1, 2))
    .scrollX(0, -0.1)
  //  .kaleid(3)
    .diff(src(s0).saturate().hue(0.2))
    .out()
