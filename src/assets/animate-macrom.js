var backCircle = document.getElementById("back_circle");
var shadow = document.getElementById("shadow");
var mBorder = document.getElementById("m_border");
var m = document.getElementById("m");
var ring = document.getElementById("ring");

TweenMax.to(backCircle,0, {fill:"#FFFFFF"});
TweenMax.to(shadow,0, {fill:"#FFFFFF"});
TweenMax.to(mBorder,0, {fill:"#FFFFFF"});
TweenMax.to(mBorder,0, {drawSVG:"0"});
TweenMax.to(m,0, {fill:"#FFFFFF"});
TweenMax.to(m,0, {drawSVG:"0"});
TweenMax.to(ring,0, {fill:"#FFFFFF"});
TweenMax.to(ring,0, {drawSVG:"0"});
backCircle.style.display = "block";
shadow.style.display = "block";
mBorder.style.display = "block";
m.style.display = "block";
ring.style.display = "block";

//Draw the outlines first
TweenMax.to(ring,2, {drawSVG:"100%"});
TweenMax.to(mBorder,2, {drawSVG:"100%", onComplete:step2});
TweenMax.to(m,2, {drawSVG:"100%"});


function step2(){
	//Apply fill
	TweenMax.to(backCircle,2, {fill:"#8AA589"});
	TweenMax.to(shadow,2, {fill:"#628462"});
	TweenMax.to(mBorder,2, {fill:"#1B2D1A"});
	TweenMax.to(ring,2, {fill:"#1B2D1A"});
	//Hide the strokes
	TweenMax.to(ring,4, {stroke:"none"});
	TweenMax.to(mBorder,4, {stroke:"none"});
	TweenMax.to(m,4, {stroke:"none"});
}

