
// This code forwards messages from tidal to an additional port via OSC.
// From https://github.com/tado/ofxTidalCycles

var hydraAddr = NetAddr.new("127.0.0.1", 3333);
var tidalAddr = NetAddr.new("127.0.0.1", 6010);
OSCFunc.newMatching({ |msg, time, addr, port|
	var latency = time - Main.elapsedTime;
	msg = msg ++ ["time", time, "latency", latency];
	msg.postln;
	hydraAddr.sendBundle(latency, msg)
}, '/dirt/play', tidalAddr);
SuperDirt.start;
