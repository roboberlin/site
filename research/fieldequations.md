---
layout: post
title: Representing Einstein's Field Equations
description: Here is the description.
image: 
nav-menu: yes
---

<head>
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
</head>

The numerical simulation of binary black hole spacetimes began in 1964, with a [paper by Susan Hahn and Richard Lindquist](http://www.sciencedirect.com/science/article/pii/0003491664902234) which boasted a grand total of fifty timesteps before the code crashed. From there, progress quickly stalled, but resumed again in the 1980s as astrophysical interest in black holes (and, in particular, gravitational waves), began to grow.

But even as the effort gained steam, with multiple focused research groups, progress remained agonizingly slow. In the early 2000's, as the [LIGO](https://www.nytimes.com/2016/02/12/science/ligo-gravitational-waves-black-holes-einstein.html) experiment was starting to move toward a reality (turning binary black hole problem from "interesting theoretical challenge" to "essential astronomical prediction"), simulations that achieved a single orbit, with relatively low precision, were still considered breakthroughs in the field. There was widespread speculation at the time that LIGO's experimentalists might detect gravitational waves before numerical relativity theorists were able to say whether a given signal was consistent with Einstein's theory. 

The situation changed in the auspicious year of 2005, a century after Einstein's "annus mirabilis", when the numerical relativity community underwent a miracle year of our own. Multiple research groups, using vastly different computational and mathematical techniques, each achieved stable, well-behaved numerical solutions of this "holy grail" problem of computational physics. 

I was at Caltech at the time, a member of what was then called the "Caltech/Cornell collaboration" (now, after the usual diaspora of a successful research group, known as the [SXS collaboration](https://black-holes.org/)). Our approach to the problem rested largely on a faith in mathematical rigor and state-of-the-art computational techniques, principally: "pseudospectral collocation", a relatively uncommon technique in the field at the time. In principle, spectral methods allow vastly higher accuracy than the conventional techniques of the time, at the cost of somewhat more complex code infrastructure, and as we would eventually discover, rather demanding conditions of mathematical well-posedness.

As I entered the Caltech NR group, we were focused on developing "symmetric hyperbolic" representations of Einstein's evolution equations. Einstein gave us his field equations in a beautiful, elegant form known from any number of corny t-shirts:
\begin{align}
G_{\mu \nu} = 8 \pi T_{\mu \nu}
\end{align}
What one doesn't learn from the T-shirts is that there are many ways to represent these field equations of physics as *partial differential equations* for mathematical analysis and numerical solution. All such representations should provide physically equivalent results if solved with absolute precision. However, in the heat of battle, when a simulation might reasonably crash in fifty time steps, some representations will behave very differently than others.

Specifically, some of Einstein's equations contain time derivatives, and hence allow one to step fields forward in time. A useful analogy is to electrodynamics, where the evolution equations are:
\begin{align}
\frac{\partial}{\partial t} \vec E &= \vec \nabla \times \vec B - 4 \pi \vec j
\end{align}
\begin{align}
\frac{\partial}{\partial t} \vec B &= -\vec \nabla \times \vec E.
\end{align}
Others of Einstein's equations *do not* contain time derivatives, and hence must be satisfied throughout space, at all times in the ensuing simulation. These equations are known as the *constraint equations*, and they again have useful analogues in electrodynamics:
\begin{align}
\vec \nabla \cdot \vec E = 4 \pi \rho
\end{align}
\begin{align}
\vec \nabla \cdot \vec B = 0.
\end{align}

The last of these electrodynamics equations enforces the nonexistence of *magnetic monopole charges*, so if a simulation develops enough numerical error to violate this condition, the result would be very bad indeed, in physical terms. We'll come back to that in a moment, though. 

Because the constraint equations must be satisfied at all times, they define (simply by shifting all terms to the left of the equations), fields that must identically vanish whenever the computed solution is physically reasonable. This is one reason that there are many physically-equivalent yet mathematically-distinct ways to represent Einstein's equations (and indeed Maxwell's equations). 

As I was starting my work with the Caltech/Cornell group, they were engrossed in finding *symmetric hyperbolic* representations of Einstein's field equations. Such representations are nice because they allow us to mathematically prove that unique and well-behaved solutions exist (at least under certain technical conditions). Symmetric hyperbolicity is also convenient because it allows us to infer what kinds of *boundary conditions* must be imposed on the solutions far away from the holes, as it is computationally inconvenient to extend the simulation space all the way off to infinity. 

However, even with the benefit of such symmetric-hyperbolic representations, difficulties still remained. The major stumbling block was quickly identified to be *constraint-violating instabilities*. Physics ensures for us that if the constraint fields vanish throughout all of space at the moment the simulation begins, then these fields will continue to vanish at later times, *if* they initially vanished *exactly*, and *if* the evolution equations were solved with *exact* accuracy. In computation, neither of these conditions is satisfied, and our representations of Einstein's equations happily allowed "small" constraint violations to grow at exponential speeds, like multiplying magnetic charges, eventually destroying physical accuracy and crashing the code. 

We explored a few pathways to mitigate this problem, but the one that proved crucial was *constraint damping*. The idea is to further modify the representation of the evolution equations, adding terms proportional to the constraints and therefore physically benign, but to do so with the goal of ensuring that "small" violations of the constraints *decay* exponentially, rather than *growing* exponentially. Constraint damping was a crucial ingredient in the [initial breakthrough work](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.95.121101) on binary black holes, by Frans Pretorius. However we needed to implement it in a way that was consistent with our conditions for symmetric hyperbolicity. 

At one point, we were working on a project to develop an [alternative method](http://journals.aps.org/prd/abstract/10.1103/PhysRevD.70.084017) for solving the issue of constraint-violating instabilities. For this, we wanted a toy system, similar to Einstein's equations, but much simpler. The system of most interest to us was the simple scalar wave equation, which provided some nice parallels to Einstein's system with vastly simpler mathematical structure. However one parallel that it did not have with Einstein's system, apparently, was constraint-violating instabilities. 

However, I realized that it was possible to modify our simple scalar wave system in a manner that would preserve symmetric hyperbolicity while providing a tunable constraint-violating instability. This "intentionally unstable" scalar wave system became the central system of that paper, but more importantly, provided a technique for *damping* some instabilities that might exist in more complex systems. I explored this issue further in a [paper](http://journals.aps.org/prd/abstract/10.1103/PhysRevD.76.044019) on a broad class of representations of the Einstein system. And our group more broadly came up with a symmetric hyperbolic representation with *"generalized harmonic"* gauge conditions similar to the system used by Pretorius. Our system included damping terms of the type used by Pretorius, and others of the type that I had discovered for the scalar wave system. This system of evolution equations, with a few generalizations, remains the central mathematical structure of the [SpEC](https:www.black-holes.org/SpEC.html) code to this day.
