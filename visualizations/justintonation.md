---
layout: post
title: Just intonation
description: An audio-visual representation of the interval of a perfect fifth, tunable between standard *even temperament* and *just intonation*.
image: 
nav-menu: no
---

<head>
 <!--<link rel="stylesheet" type="text/css" href="http://jsxgraph.uni-bayreuth.de/distrib/jsxgraph.css" />-->
 <link rel="stylesheet" type="text/css" href="assets/css/jsxgraph.css" />
 <script type="text/javascript" src="assets/js/jsxgraphcore.js"></script>
 <!--<script type="text/javascript" src="http://www.charlie-roberts.com/gibberish/build/gibberish.js"></script>-->
<script type="text/javascript" src="assets/js/gibberish.js"></script>
</head>



<div id='jxgbox' class='jxgbox' style='width:647px; height:647px;'></div>
  <html>
  <span onClick="startAudio()" class="button">Start</span>
  <span onClick="endAudio()" class="button">Stop</span>

    <script>

Gibberish.init();
Gibberish.Time.export();
Gibberish.Binops.export();

var f1 = 220.;
var f2 = 330.;

var T = 1./f1;
var Span = 5.*T;

var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox:[0,10,Span,-10], axis:false, showNavigation:false});
board.renderer.container.style.backgroundColor = 'grey';

var amps = [.8, .5, .4, .4, .25, .15];

var wave1 = new Gibberish.Bus();
var c1 = new Gibberish.Sine(f1*1, amps[0]).connect(wave1);
var c2 = new Gibberish.Sine(f1*2, amps[1]).connect(wave1);
var c3 = new Gibberish.Sine(f1*3, amps[2]).connect(wave1);
var c4 = new Gibberish.Sine(f1*4, amps[3]).connect(wave1);
var c5 = new Gibberish.Sine(f1*5, amps[4]).connect(wave1);
var c6 = new Gibberish.Sine(f1*6, amps[5]).connect(wave1);

var wave2 = new Gibberish.Bus();
var d1 = new Gibberish.Sine(f2*1, amps[0]).connect(wave2);
var d2 = new Gibberish.Sine(f2*2, amps[1]).connect(wave2);
var d3 = new Gibberish.Sine(f2*3, amps[2]).connect(wave2);
var d4 = new Gibberish.Sine(f2*4, amps[3]).connect(wave2);
var d5 = new Gibberish.Sine(f2*5, amps[4]).connect(wave2);
var d6 = new Gibberish.Sine(f2*6, amps[5]).connect(wave2);

wave = new Gibberish.Bus();
wave1.connect(wave);
wave2.connect(wave);

//wave.connect();

wave1.amp = .06;
wave2.amp = .06;
wave.amp = .4;

var freqslide = board.create('slider', [[.2*Span, 8], [.8*Span, 8], [100, 220, 1000]]);
var ampslide = board.create('slider', [[.2*Span, 7], [.8*Span, 7], [0., 0.06, .075]]);
var amp2slide = board.create('slider', [[.2*Span,6], [.8*Span, 6], [0., 0.06, .075]]);
var temperamentslide = board.create('slider', [[.2*Span,4.5],[.8*Span,4.5],[1.49830707688, 1.5, 1.5]], {withLabel:false});

var partial1slide = board.create('slider', [[.15*Span, -8], [.15*Span, -4], [0., 0.8, .8]]);
var partial2slide = board.create('slider', [[.2*Span, -8], [.2*Span, -4], [0., 0.5, .8]]);
var partial3slide = board.create('slider', [[.25*Span, -8], [.25*Span, -4], [0., 0.4, .8]]);
var partial4slide = board.create('slider', [[.3*Span, -8], [.3*Span, -4], [0., 0.4, .8]]);
var partial5slide = board.create('slider', [[.35*Span, -8], [.35*Span, -4], [0., 0.25, .8]]);
var partial6slide = board.create('slider', [[.4*Span, -8], [.4*Span, -4], [0., 0.15, .8]]);

var f1label = board.create('text', [.05*Span, 8.3, "Frequency of lower tone:"]);
var a1label = board.create('text', [.05*Span, 7.3, "Amplitude of lower tone:"]);
var a2label = board.create('text', [.05*Span, 6.3, "Amplitude of higher tone:"]);
var intonationlabel = board.create('text', [.45*Span, 4.8, "Intonation:"]);
var eventemplabel = board.create('text', [.05*Span, 4.5, "Even-tempered"]);
var justlabel = board.create('text', [.82*Span, 4.5, "Just"]);

var relamplabel = board.create('text', [.05*Span, -8.5, "Relative amplitudes of harmonics 1-6 in both tones."]);

var p0 = board.create('point', [0,0], {face:'',name:'',trace:false});

var thecurve = board.create('functiongraph', [function(x) { return 2.*ConstructCurve(x-p0.Y()+p0.Y()%(2./c1.frequency)); }], {strokeColor:'black'});

board.on('update', function() {
    //sinewave.frequency = freqslide.Value();
    c1.frequency = freqslide.Value();
    c2.frequency = 2.*freqslide.Value();
    c3.frequency = 3.*freqslide.Value();
    c4.frequency = 4.*freqslide.Value();
    c5.frequency = 5.*freqslide.Value();
    c6.frequency = 6.*freqslide.Value();
    d1.frequency = 1.*freqslide.Value()*temperamentslide.Value();
    d2.frequency = 2.*freqslide.Value()*temperamentslide.Value();
    d3.frequency = 3.*freqslide.Value()*temperamentslide.Value();
    d4.frequency = 4.*freqslide.Value()*temperamentslide.Value();
    d5.frequency = 5.*freqslide.Value()*temperamentslide.Value();
    d6.frequency = 6.*freqslide.Value()*temperamentslide.Value();
    c1.amp = partial1slide.Value();
    c2.amp = partial2slide.Value();
    c3.amp = partial3slide.Value();
    c4.amp = partial4slide.Value();
    c5.amp = partial5slide.Value();
    c6.amp = partial6slide.Value();
    d1.amp = partial1slide.Value();
    d2.amp = partial2slide.Value();
    d3.amp = partial3slide.Value();
    d4.amp = partial4slide.Value();
    d5.amp = partial5slide.Value();
    d6.amp = partial6slide.Value();
    wave1.amp = ampslide.Value();
    wave2.amp = amp2slide.Value();
});

function ConstructCurve(x){
  var v = 0;
  v += 5 * wave1.amp * c1.amp * Math.sin((c1.frequency) * 2 * Math.PI * x);
  v += 5 * wave1.amp * c2.amp * Math.cos((c2.frequency) * 2 * Math.PI * x);
  v += 5 * wave1.amp * c3.amp * Math.sin((c3.frequency) * 2 * Math.PI * x);
  v += 5 * wave1.amp * c4.amp * Math.cos((c4.frequency) * 2 * Math.PI * x);
  v += 5 * wave1.amp * c5.amp * Math.sin((c5.frequency) * 2 * Math.PI * x);
  v += 5 * wave1.amp * c6.amp * Math.cos((c6.frequency) * 2 * Math.PI * x);

  v += 5 * wave2.amp * d1.amp * Math.sin((d1.frequency) * 2 * Math.PI * x);
  v += 5 * wave2.amp * d2.amp * Math.cos((d2.frequency) * 2 * Math.PI * x);
  v += 5 * wave2.amp * d3.amp * Math.sin((d3.frequency) * 2 * Math.PI * x);
  v += 5 * wave2.amp * d4.amp * Math.cos((d4.frequency) * 2 * Math.PI * x);
  v += 5 * wave2.amp * d5.amp * Math.sin((d5.frequency) * 2 * Math.PI * x);
  v += 5 * wave2.amp * d6.amp * Math.cos((d6.frequency) * 2 * Math.PI * x);

  return v;
}

function startAudio(){
  wave.connect();
  p0.moveTo([0.,6000.],6000000);
}

function endAudio(){
  wave.disconnect();
  p0.moveTo([0.,0.],1);
}

    </script>



  </html>


The above applet demonstrates intonation of the musical interval of the *perfect fifth* (*A*<sub>3</sub> to *E*<sub>4</sub> in the default setup).

The sliders at the bottom allow you to adjust the timbre of the "organ" tone, produced here by Fourier synthesis. The sliders at the top allow for adjustment of the pitches being played. The first slider adjusts the frequency of the lower pitch. The higher pitch has a frequency 3/2 that value in just intonation. The next two sliders allow for adjustment of the relative strengths of the two tones. Set one of these amplitudes to zero to see how adjusting the harmonics affects the shape of the waveform. Finally, the fourth slider allows continuous adjustment between just intonation (usually the preferred intonation of serious musicians) and even temperament (the compromise tuning system that subdivides the octave into twelve equally-spaced pitch intervals). 

The waveform is timed to the lower-pitched of the two tones, roughly as it would be on an oscilloscope (the marker draws the waveform from left to right and repeats itself in such a way as to produce a smooth curve). In just intonation, this timing is also correct for the higher pitch, so the combination is stable.

If the intonation is *offset* from just, then the two oscillations shift relative to one another. Watch the waveform carefully and compare the shape of the waveform with the unsteady timbre that you hear. 


------------------------

The visualizations above made use of [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/index.html), an extremely useful JavaScript library for interactive plotting, and [Gibberish](http://www.charlie-roberts.com/gibberish/), a wonderful digital signal processing engine.

The visualization is a bit computationally intensive. I find it works best on an actual computer (as opposed to a mobile device), in Google Chrome.