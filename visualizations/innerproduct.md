---
layout: post
title: Inner product of one-form and vector.
description: Visualizing one-forms by level sets, as in Misner, Thorne, and Wheeler's Gravitation, and inner products with vectors by the piercing of those level sets.
image: 
nav-menu: no
---

<head>
 <!--<link rel="stylesheet" type="text/css" href="http://jsxgraph.uni-bayreuth.de/distrib/jsxgraph.css" />-->
 <link rel="stylesheet" type="text/css" href="{{site.main}}/site/assets/css/jsxgraph.css" />
 <!--<script type="text/javascript" src="{{site.main}}/site/assets/js/jsxgraphcore.js"></script>-->
 <script type="text/javascript" src="https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore.js"></script>
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
</head>



<div id='jxgbox1' class='jxgbox' style="width:600px; height:600px;"></div>
  <html>

    <script src="{{site.main}}/site/assets/js/vectorand1form.js"></script>



  </html>


The above applet demonstrates the resonances of a swinging, ideal string, near its normal mode frequencies. The top panel shows a visualization of the string. Its left end is held fixed in the visualization, but if this were a real musical instrument, that end would likely represent a *bridge*, a nearly-stationary endpoint connecting to a *soundboard*, which pushes large quantities of air to produce more significant sound than the string produces on its own. The right end of the string (the large red dot) represents an end that is manually oscillated, like a physics professor, in lecture, swinging the end of a real rope.

The bottom panel shows a plot of the rate of sound emission due to oscillations of the bridge. 

The **slider** on the horizontal axis of the bottom panel allows you to adjust the oscillation frequency of the "hand" (red circle) that's swinging the rope, to confirm that the resonances arise as expected.

The "play audio" button turns on a sinusoidal audio stream with frequency equal to that given by the slider (scaled up by a factor of 100, to be audible to the human ear), and amplitude given by the curve of the bottom panel. 

Notice that if the frequency is just below a resonance, the motion of the driver is in phase with the direction of the force supplied to the the driver by the string (the string pulls upward when the driver is above zero, and downward when the driver is below zero), whereas if the frequency is just above a resonance, the driver is out of phase (negative when the force is upward, positive when the force is downward). This phase shift is a standard feature of driven oscillators near resonance. Note, also, that the resonance curve takes a sharp dip precisely *at* resonance, as that's when this phase shift needs to occur.

-------------------------

Technical details:
------------------

The problem solved here is a damped one-dimensional wave equation:
\begin{equation}
-\ddot \psi + \psi^{\prime \prime} + \gamma \dot \psi = 0,
\end{equation}
where the damping parameter $$\gamma$$ is set by hand to something small but nonzero. (Zero damping would cause the resonances to be unbounded, which wouldn't be good for the visualization.)

We impose the boundary conditions:
\begin{align}
\psi\rvert_{x = 0} = 0, \hspace{2cm} \psi\rvert_{x = L} = \alpha \cos(\omega t),
\end{align}
and seek a steady-state solution of the form:
\begin{equation}
\psi(x,t) = \psi(x) \cos(\omega t).
\end{equation}

A relatively straightforward calculation (if you've done this sort of thing before), yields the solution:
\begin{equation}
\psi(x,t) = \alpha \frac{\sinh(s k_0 L) \sinh(s k_0 x) \cos(c k_0 L) \cos(c k_0 x) + \cosh(s k_0 L) \cosh(s k_0 x) \sin(c k_0 L) \sin(c k_0 x)}{\sinh^2(s k_0 L) \cos^2(c k_0 L) + \cosh^2(s k_0 L) \sin^2(c k_0 L)} \cos(\omega t),
\end{equation}
where $$k_0 = \omega \left[1+\gamma^2/\omega^2\right]^{1/4}$$, $$c = \cos(\arctan(\gamma/\omega)/2)$$, $$s = \sin(\arctan(\gamma/\omega)/2)$$, and $$L$$ is the length of the string.

The power of sound emission is estimated from the amplitude of force on the bridge, proportional to the slope of the curve at $$x=0$$:
\begin{equation}
\psi^\prime\rvert_{x = 0} = \alpha k_0 \frac{s \sinh(x k_0 L) \cos(c k_0 L) + c \cosh(s k_0 L) \sin(c k_0 L)}{\sinh^2(s k_0 L) \cos^2(c k_0 L) + \cosh^2(s k_0 L) \sin^2(c k_0 L)} \cos(\omega t).
\end{equation}

------------------------

The visualizations above made use of [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/index.html), an extremely useful JavaScript library for interactive plotting, and [Gibberish](http://www.charlie-roberts.com/gibberish/), a wonderful digital signal processing engine.
