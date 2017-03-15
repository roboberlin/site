---
layout: post
title: The final state of a black hole merger
description: The final state of a binary black hole merger.
image: assets/images/QuadrupoleDegeneracies_noaxes.png
nav-menu: yes
---

<head>
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
</head>

Multipole Decomposition:
========================

Stationary black holes have mass, spin, and charge. Astrophysical black holes are presumed to have negligible electric charge, so in fact mass and spin are all that matter for astrophysics. But the black holes in numerical relativity simulations are not normally stationary. Or rather, they normally begin in binary systems, where two black holes orbit around one another. As gravitational waves carry energy away from the system, and as non-Newtonian forces begin to take over, the orbit decays until the holes come together and merge into one. This final black hole starts out with a highly distorted horizon, "peanut shaped", where both of the lobes correspond to the progenitor horizons), which then settles down to a final stationary state. This final stationary state must be the so-called Kerr black hole, the stationary state with prescribed mass and spin.

This process of black hole "hair loss" was explored in great detail in the early 1970's (a time now referred to as the "golden age of black hole research"), in which people applied techniques of *black hole perturbation theory*, where the deviations from stationarity are initially presumed to be "small", and [can then be shown](http://thesis.library.caltech.edu/5526/) to ring down to nothing.

The expectation was that similar behavior would occur in fully nonlinear general relativity. But until numerical codes were stable it was an impossible hypothesis to test. Even with numerical relativity, it's a trickier project than you might guess. In textbooks, the Kerr black hole is defined by a particular *"line element"*, a formula defining the length of a path through spacetime. Unfortunately, this formula depends strongly on the choice of coordinates that label the points in space and time. The choice of coordinates is physically arbitrary and there's no reason to presume that the coordinates that spacetime settles to at late times would correspond in any obvious way to any of the dozen or so coordinate systems that we use to describe Kerr black holes. We have to look deeper than the mere mathematical formulas of the Kerr geometry. We need to coax out deeper geometrical structure, structure that we can compute without any reference to coordinates. 

As it so happened, my work on [black-hole spin](robowen.org/research/spin.html) just happened to provide such a structure. The spin angular momentum, aside from its relevance to spacetime symmetries, frame dragging, etc., is a particular component of a standard decomposition that we use in physics to describe the structure of objects. The *multipole* decomposition, in electromagnetism for example, breaks up a charge distribution into a *monopole* part (the overall charge), a *dipole* part (describing average displacement of positive from negative charges), and higher-order multipoles that describe further structure of the charge distribution. Along with this, there are *current multipoles* which describe the distribution of electric current flow in electromagnetism.

In a beautiful [paper](http://iopscience.iop.org/article/10.1088/0264-9381/21/11/003/meta), Ashtekar, Pawlowski, and Van Den Broeck argued that similar multipolar structure of black hole horizons could be described with a kind of spectral decomposition of quantities associated with the curvature of the horizon. By "spectral" decomposition, I mean that these curvature quantities are normally defined as functions of position on the horizon, but we can only describe "position" using coordinates, which are fundamentally arbitrary and best avoided. Instead, if we can find a set of functions, $$y_\alpha$$, described fundamentally by intrinsic horizon *geometry*, then we can define the multipole moments using integrals of these curvature quantities against these functions. For example, the *mass multipoles* are described using integrals of the horizon scalar curvature $$R$$:
\begin{align}
M_\alpha = \oint_{\cal H} y_\alpha R dA.
\end{align}

In their work, Ashtekar et al. assumed the spacetime was symmetric around some axis, a condition that turns out to provide enough structure to define the functions $$y_\alpha$$ uniquely. Unfortunately in most binary black hole problems this structure disappears. Luckily, I'd just implemented in the [SpEC](www.black-holes.org/SpEC.html) code an alternative approach that happens to reduce the the approach of Ashtekar and collaborators in cases of axisymmetry. This alternative approach involves the eigenproblem that naturally arises in my treatment of [black-hole spin](robowen.org/research/spin.html):
\begin{align}
\nabla^4 y_\alpha + {\rm div}\left( R {\rm grad} (y_\alpha)\right) = \lambda_\alpha \nabla^2 y_\alpha,
\end{align}
where $$\alpha$$ is an index that labels all of the solutions to this eigenproblem.

Defining multipolar structure in this way turns out to automatically guarantee that the "current quadrupole moment" will coincide with the spin angular momentum, a fact that comfortably agrees with Newtonian results. 

Defining multipolar structure in this way, I was able to [show](http://journals.aps.org/prd/abstract/10.1103/PhysRevD.80.084012) that the merger remnant in SpEC simulations settles down to Kerr geometry is an invariant sense. Along the way, the data showed an initial approximate symmetry (around the "peanut axis" of the initial merged hole) is quickly broken as the hole starts to ring down, and that a new symmetry (around the eventual spin axis) eventually arises. Most beautiful of all, each multipole quickly starts ringing down at precisely the frequencies and damping rates known from black-hole perturbation theory. 



Algebraic Classification:
=========================

Petrov is cool, and Penrose is even better.