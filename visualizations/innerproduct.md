---
layout: post
title: Inner product of one-form and vector
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



<div id='jxgbox1' class='jxgbox' style="width:60vw; height:60vw;"></div>
  <html>

    <script src="{{site.main}}/site/assets/js/vectorand1form.js"></script>



  </html>



Brief Summary
-------------
The blue and green arrows represent vectors, and the "product" shown at the bottom of the box is the inner product of these two vectors. However, graphically, there is no easy way to confirm that this computed product is accurate. 

To aid with this, the thin black lines represent the level-surfaces used to describe a *differential form*. This form is "dual" to the green vector in the usual index-lowering sense, so the inner product of the two vectors can be seen graphically in the number of these level surfaces get *pierced* by the blue arrow. Drag either arrowhead, or the red dot which controls the level surfaces, to confirm this relationship. 

Discussion
----------
In their profoundly influential book on gravitation theory, Misner, Thorne, and Wheeler ([MTW](https://www.amazon.com/Gravitation-Charles-W-Misner/dp/0691177791/)) began their treatment of vectors and inner products with an idiosyncratc but very elegant pictorial description of *differential forms*. The simplest differential forms --- called one-forms --- are in a certain sense "dual" to vectors. That is: they are very similar to one another, but it is easier to combine a one-form with a vector, or a vector with a one-form, than it is to combine a one-form with a one-form or, even, a vector with a vector. The "combination" I'm talking about is the so-called "inner product." If two vectors are represented with respect to the standard coordinate basis: 
\begin{align}
\vec X = V^a \vec \partial_a \hspace{1cm} \vec W = W^a \vec \partial_a,
\end{align}
then calculating their inner product (also called the *dot* product), requires the presence of a *metric structure*, $$\textbf{g}$$.
\begin{align}
\vec X \cdot \vec W = \mathbf{g}(\vec X, \vec W) = g_{ab} X^a W^b.
\end{align}

One-forms are objects represented with respect to what is often called the dual coordinate basis, $$\mathbf{d}x^a$$, where $$x^a$$ are the coordinates and $$\mathbf{d}$$ is the "[exterior derivative](https://en.wikipedia.org/wiki/Exterior_derivative)" operator (similar to the gradient). A general one-form at a point can be written as:
\begin{align}
\mathbf{\omega} = \omega_a \mathbf{d}x^a \hspace{1cm} \mathbf{\alpha} = \alpha_a \mathbf{d}x^a.
\end{align}
But again, to compute their inner product, one must refer to the metric (or rather, its inverse):
\begin{align}
\mathbf{\omega} \cdot \mathbf{\alpha} = g^{ab} \omega_a \alpha_b.
\end{align}

On a typographical level (typography representative of the underlying geometrical structure of the problem), the metric is present in both of these inner product expressions for purposes of "index-gymnastics." Two vectors both have components with "upstairs" indices, so any geometrical combination must involve some other object with two "downstairs" indices. And similarly for two two one-forms. 

However, the combination of a one-form and a vector requires no further index gymnastics. This implies that the inner product between these two distinct kinds of geometrical objects (conventionally denoted $$\mathbf{\omega}(\vec X)$$, or $$\langle \mathbf{\omega}, \vec X \rangle$$ in MTW) requires no additional structure:
\begin{align}
\mathbf{\omega}(\vec X) = \langle \mathbf{\omega}, \vec X \rangle = \omega_a X^a.
\end{align}

In graphical terms, it makes some intuitive sense that the inner product of two vectors requires an additional structure. Recall, geometrically, what the inner product of two vectors represents. The usual first formula that students see for defining dot products is this:
\begin{align}
\vec A \cdot \vec B = |\vec A| |\vec B| \cos\left(\theta_{AB}\right).
\end{align}
In other words, the dot product of $$\vec A$$ and $$\vec B$$ is the *length* of $$\vec A$$, $$|\vec A|$$, times the *projection* of $$\vec B$$ onto $$\vec A$$, ($$|\vec B| \cos\left(\theta_{AB}\right)$$), or vice versa. Graphically, calculating that projection would require tracing a perpendicular from one of the vectors to the other. That is essentially what the metric structure does. 

However, for any vector $$\vec W$$, we can define a corresponding one-form $$\mathbf{\omega}$$:
\begin{align}
\omega_a = g_{ab} W^b.
\end{align}
Ordinarily one would even use the same letter for the two objects (i.e.: $$W_a = g_{ab} W^b)$$, however for this discussion I'm trying to stick to MTW's pattern of using greek letters for one-forms and latin letters for vectors. A less basis-centric way of stating this duality between $$\mathbf{\omega}$$ and $$\vec W$$ is:
\begin{align}
\mathbf{\omega}(\vec W) = \vec W \cdot \vec W = \mathbf{\omega} \cdot \mathbf{\omega}.
\end{align}
Note that this duality between $$\mathbf{\omega}$$ and $$\vec W$$ is a statement that again involves the metric. This is essential, because the duality pairs an object (the one-form $$\mathbf{\omega}$$) that can be trivially combined with a vector, with another object (the vector $$\vec W$$) that cannot.

Let's return to the fact that a one-form can be trivially combined with a vector, without any need for a metric. MTW describe this fact with an ingenious pictorial structure. Recall that the basis one-forms are *gradients* --- $$\mathbf{d}x^a$$. In a two-dimensional space, like the one pictured above, these gradients would naturally be $$\mathbf{d}x$$ and $$\mathbf{d}y$$. MTW argue that these gradients should be pictured not by their standard vector arrows, but rather by the *level sets* of the functions $$x$$ and $$y$$. Moreover, linear combinations could be constructed as:
\begin{align}
2 \mathbf{d}x + 3 \mathbf{d}y = \mathbf{d}(2x+3y).
\end{align}
The level sets of the combination $$(2x+3y)$$ are *closer together* than those of $$x$$ or $$y$$, and have a finite slope.

MTW therefore argue that when one pictures a one-form, one should think of an array of "sheets", and the inner product of that one-form with a vector simply represents **the number of those sheets that get pierced by the vector**. 

In the above applet, the green arrow represents a vector $$\vec W$$ and the thin black lines represent the sheets of the corresponding one-form $$\mathbf{\omega}$$. If you drag either the green arrowhead or the red dot, then you can see the graphical relationship between these two objects in this simple vector space. The blue arrow represents another vector $$\vec X$$, whose arrowhead can also be dragged about. 

The "product" labeled at the bottom of the applet represents the inner product of these objects, which can be calculated as either form of:
\begin{align}
\vec X \cdot \vec W = \mathbf{\omega}(\vec X).
\end{align}

Note that as these objects are moved about, this inner product can be trivially calculated graphically (at least its integer part) as the number of black surfaces pierced by the blue arrow.




------------------------

The visualization above was created with [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/index.html), a very simple javascript library for interactive plotting.
