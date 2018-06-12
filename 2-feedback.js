// Feedback is when the output of a system is used as the input to itself
// https://en.wikipedia.org/wiki/Feedback

// In analog video synthesis, this is like a camera being pointed as its own output monitor.
// i.e.
// Space-Time Dynamics in Video Feedback (1980): https://www.youtube.com/watch?v=B4Kn3djJMCE
// Accompanying research paper: http://csc.ucdavis.edu/~cmg/papers/Crutchfield.PhysicaD1984.pdf

// While it is possible to create feedback in hydra using a camera pointed at the output monitor or screen,
// there are several other ways to experiment with video feedback directly within hydra.
// 1. Using the screen as input to itself
// 2. Using an output buffer (i.e. o0) as input to itself
// 3. Opening hydra in two separate windows and using each as an input to the other
// 4. Combinations of the above
// 5. Using networking in hydra to share screens between computers (not yet implemented in atom)

// Some inspiration for feedback in open gl:
// Adam Ferriss: https://adamferriss.com/sheeting/
// Andrew Benson: https://pixlpa.com/
// kynd.info:  https://vimeo.com/225717368

// To be continued ...
