// Real time audio analysis using system microphone, using fourier transform and beat detection.
// More about audio visualization:
// https://github.com/therewasaguy/p5-music-viz
// Fourier transform explained: https://www.youtube.com/watch?v=spUNpyF58BY

// show audio fft (fourier transform) analysis using the default microphone
a.show()

// hide audio fft
a.hide()

a.show()
// use audio as a parameter in hydra.
shape(5, () => a.fft[0]).out()

// The number in brackets [0] corresponds to which frequency band to use. 0 corresponds to low frequency and higher numbers
// correspond to higher frequency bands.
shape(5, () => a.fft[2]).out()

shape(5, () => 0.5 + a.fft[0])
  .scale(0.5, ()=> 0.5 + a.fft[2])
  .out()



// change number of repetitions if fft above 0.4, otherwise repeat once
  shape(5)
    .repeat(
      () => {
        if(a.fft[0] > 0.4) return 5
        return 1
      },
      1
    )
    .out()

//  smooth the fft values (make more or less sensitive to rapid changes)
a.setSmooth(0.96)

// Values are between 0 and 1. 0 is most senstive 1 is most smooth
a.setSmooth(0.3)

a.setSmooth(0.94)

// change cutoff for sound detection
a.setCutoff(6)

// The blue lines in the audio visualizer correspond to values between 0 and 1.
// changing the cutoff value changes the minimum value detected.
a.setCutoff(2)

// change the range of values detected
a.setScale(3)

// set number of frequency ranges to detect
a.setBins(6)

// You can also individually change the cutoff and scale of each frequency range

// change the cutoff for the first frequency band(low sounds)
a.settings[0].cutoff = 8

// change the scale for the first frequency bin
a.settings[0].scale = 10

// to do: add beat detection code
