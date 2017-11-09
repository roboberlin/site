var gamma = .05;

var board = JXG.JSXGraph.initBoard('jxgbox1', {boundingbox:[-5.,5.,5.,-5.], axis:false, showNavigation:false});
board.renderer.container.style.backgroundColor = '#99a5b2';


var point0 = board.create('point', [0,0], {name:'',size:0,color:'black',fixed:true});
var point1 = board.create('point', [0,2], {name:'',size:0,color:'gray'});
var vector = board.create('arrow', [point0, point1], {shadow:false, strokeWidth:4, highlightStrokeColor:'blue'});

var point2 = board.create('point', [2,2], {name:'',size:1});

var vecdualtopoint2point = board.create('point', [.25,.25], {size:0, name:'', color:'gray'});

var prodlabel = board.create('text', [-4.8,-4.5,function(){return ProdText(point1,vecdualtopoint2point)}], {fontsize:30});

var vecdualtopoint2 = board.create('arrow', [point0, vecdualtopoint2point], {shadow:false, color:'green', highlightStrokeColor:'green'});

point2.on('drag', function(){
  var Norm2 = point2.X()*point2.X() + point2.Y()*point2.Y();
  vecdualtopoint2point.moveTo([point2.X()/Norm2, point2.Y()/Norm2]);
});

vecdualtopoint2point.on('drag', function(){
  var VNorm2 = Math.pow(vecdualtopoint2point.X(), 2)+Math.pow(vecdualtopoint2point.Y(),2);
  point2.moveTo([vecdualtopoint2point.X()/VNorm2, vecdualtopoint2point.Y()/VNorm2])
});

var formline = board.create('line', [point0, point2], {strokeWidth:0, visible:0});

var perp1 = board.create('perpendicular', [formline, point2], {highlightStrokeColor:'black', strokeWidth:.5, highlightStrokeWidth:.5});

var trans = [];
for(i=0; i<30; i++){
   trans[i] = board.create('transform', [2+i,2+i], {type:'scale'});
}

var newpoints = [];
for(i=0; i<trans.length; i++){
   newpoints[i] = board.create('point', [point2, trans[i]], {size:0, name:''});
}

var perps = []
for(i=0; i<trans.length; i++){
   perps[i] = board.create('perpendicular', [formline, newpoints[i]], {highlightStrokeColor:'black', strokeWidth:.5, highlightStrokeWidth:.5});
}

var ProductValue = function(){return CalcProd(point1,vecdualtopoint2point);}

point2.on('drag', function(){
  for(i=0; i<trans.length; i++){
    if(i<Math.floor(CalcProd(point1, vecdualtopoint2point))-1){
      perps[i].setAttribute({dash:2});
    }
    else{perps[i].setAttribute({dash:0});}
    if(Math.floor(CalcProd(point1, vecdualtopoint2point))>=1){
      perp1.setAttribute({dash:2});
    }
    else{perp1.setAttribute({dash:0});}
  }
});
point1.on('drag', function(){
  for(i=0; i<trans.length; i++){
    if(i<Math.floor(CalcProd(point1, vecdualtopoint2point))-1){
      perps[i].setAttribute({dash:2});
    }
    else{perps[i].setAttribute({dash:0});}
    if(Math.floor(CalcProd(point1, vecdualtopoint2point))>=1){
      perp1.setAttribute({dash:2});
    }
    else{perp1.setAttribute({dash:0});}
  }
});
vecdualtopoint2point.on('drag', function(){
  for(i=0; i<trans.length; i++){
    if(i<Math.floor(CalcProd(point1, vecdualtopoint2point))-1){
      perps[i].setAttribute({dash:2});
    }
    else{perps[i].setAttribute({dash:0});}
    if(Math.floor(CalcProd(point1, vecdualtopoint2point))>=1){
      perp1.setAttribute({dash:2});
    }
    else{perp1.setAttribute({dash:0});}
  }
});

point1.on('mouseover', function(){
  point1.setAttribute({size:2});
});
point1.on('mouseout', function(){
  point1.setAttribute({size:0});
});

vecdualtopoint2point.on('mouseover', function(){
  vecdualtopoint2point.setAttribute({size:2});
});
vecdualtopoint2point.on('mouseout', function(){
  vecdualtopoint2point.setAttribute({size:0});
});



function CalcProd(p1,p2){
  var theProduct = p1.X()*p2.X()+p1.Y()*p2.Y();
  return theProduct;
}

function ProdText(p1, p2){
  var theProduct = CalcProd(p1,p2);
  return "product = "+theProduct.toFixed(2);
}

