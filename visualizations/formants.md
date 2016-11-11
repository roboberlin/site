---
layout: post
title: Formants
description: An audio-visual representation of the spectrum of a sawtooth wave with amplification at two adjustable formant frequencies.
image: 
nav-menu: no
---

<head>
 <!--<link rel="stylesheet" type="text/css" href="http://jsxgraph.uni-bayreuth.de/distrib/jsxgraph.css" />-->
 <link rel="stylesheet" type="text/css" href="{{site.main}}/site/assets/css/jsxgraph.css" />
 <script type="text/javascript" src="{{site.main}}/site/assets/js/jsxgraphcore.js"></script>
 <!--<script type="text/javascript" src="http://www.charlie-roberts.com/gibberish/build/gibberish.js"></script>-->
<script type="text/javascript" src="{{site.main}}/site/assets/js/gibberish.js"></script>
</head>



<div id='jxgbox' class='jxgbox' style='width:647px; height:647px;'></div>
  <html>
  <span onClick="startAudio()" class="button">Start</span>
  <span onClick="endAudio()" class="button">Stop</span>

    <script>

Gibberish.init();
Gibberish.Time.export();
Gibberish.Binops.export();

var f1 = 110.;

var numharmonics = 40;

var Spanx = 4000;
var Spany = 100;

var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox:[0,Spany,Spanx,-10], axis:true, showNavigation:false});
board.renderer.container.style.backgroundColor = 'grey';

var amps = [];
for(var i=0; i<numharmonics; i++){
amps[i] = .0+.8/(i+1);
}


var wave = new Gibberish.Bus();
var wc = [];
var fi = 0.;

var freqslide = board.create('slider', [[.25*Spanx, .9*Spany], [.8*Spanx, .9*Spany], [55, 110, 2000]]);
var freqlabel = board.create('text', [.05*Spanx, .9*Spany, "Singing frequency:"], {fixed:true})
var formant1slide = board.create('slider', [[.25*Spanx, .8*Spany], [.8*Spanx, .8*Spany], [100, 240, 1000]]);
var f1label = board.create('text', [.05*Spanx, .8*Spany, "Formant 1 frequency:"], {fixed:true})
var formant2slide = board.create('slider', [[.25*Spanx, .7*Spany], [.8*Spanx, .7*Spany], [1000, 2400, 2500]]);
var f2label = board.create('text', [.05*Spanx, .7*Spany, "Formant 2 frequency:"], {fixed:true})

//var p0i = [];
//var p1i = [];
//var li = [];

for(var i=0; i<numharmonics; i++){
	fi = f1*(i+1);
        ai = amps[i]*formantMult(fi,235,2100);
	wc[i] = new Gibberish.Sine(fi, ai).connect(wave);
        //p0i[i] = board.create('point', [fi, 0]);
        //p1i[i] = board.create('point', [fi,4*(Math.log(ai)+10)]);
        //li[i] = board.create('line', [[function(){return freqslide.Value()*(i+1);},0],[function(){return freqslide.Value()*(i+1);}, 10.]], {straightFirst:false, straightLast:false, strokeWidth:2});
}

wave.amp = .01;
//wave.connect();

var thecurve = board.create('functiongraph', [function(x) { return ConstructCurve(x); }], {strokeColor:'black'});


board.on('update', function() {
    for(var i=0; i<numharmonics; i++){
	fi = freqslide.Value()*(i+1);
        ai = amps[i]*formantMult(fi, formant1slide.Value(), formant2slide.Value());
	wc[i].frequency = fi;
        wc[i].amp = ai;//amps[i]*formantMult(fi, formant1slide.Value(), formant2slide.Value());
        //p0i[i].coordinates = [fi, 0];
        //p1i[i].coordinates = [fi,4*(Math.log(ai)+10)];
    }
});



function startAudio(){
  wave.connect();
}

function endAudio(){
  wave.disconnect();
}

function formantMult(f, f1, f2){
var v = .1 + 2.5*Math.exp(-Math.pow((f-f1),2)/2./150./150.) + 2.5*Math.exp(-Math.pow((f-f2),2)/2./200./200.);
return v;
}
function ConstructCurve(x){
  var v = 0;
  for(var i=0; i<numharmonics; i++){
     v += 100*wc[i].amp * Math.exp(-Math.pow((x-wc[i].frequency)/20.,2));
  }

  return v;
}


    </script>



  </html>


The above applet demonstrates the production of vowel sounds by the amplification of partial tones near *formant frequencies*. The top slider allows adjustment of the frequency associated with the speaking or singing of the simulated vowel sound. The actual waveform being constructed (before application of the formant resonances) is in this case a sawtooth wave. The second and third sliders allow adjustments of the first and second *formant frequencies*, centroids of frequency ranges that receive significant amplification; in this case by direct amplification of the partial tones; in the case of a real voice, by resonances of the vocal cavity associated with its shape. 

By adjusting the values of the two formant frequencies, you can hear audible variations in timbre associated with different vowel sounds, and see these variations in a cartoon representation of the sound spectrum (the plotted curve). 

Numerical values for the formant frequencies associated with particular vowel sounds can be found in the formant article on [Wikipedia](https://en.wikipedia.org/wiki/Formant).

Note the geometrical point that when the singing frequency is low, the harmonics clearly trace out the shape of the resonance curve, giving precise locations for the two bumps. When the singing frequency is high, the harmonics are spaced much farther apart, making it harder to see, visually, precisely where the resonance peaks are. This is associated with the fact that vowel identification is generally considered more difficult at high frequency. Vibrato (which can be very roughly simulated here by jiggling the singing frequency slider back and forth over a short distance) helps with this identification. 

------------------------

The visualizations above made use of [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/index.html), an extremely useful JavaScript library for interactive plotting, and [Gibberish](http://www.charlie-roberts.com/gibberish/), a wonderful digital signal processing engine.

The visualization is a bit computationally intensive. I find it works best on an actual computer (as opposed to a mobile device), in Google Chrome.