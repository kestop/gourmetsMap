"use strict";
addEventListener('load', start);

function start() {
	var b = document.querySelector("#tryme");
	b.addEventListener('click',popup);
	footer();
	navBar();
}

function popup(event) {
	alert("This url is " + location.href);
}

function displayTime() {
	document.querySelector("#clock").innerHTML = new Date();
}

function footer() {
	document.querySelector("#foot01").innerHTML =  "<p> &#169; Copyright " + new Date().getFullYear() + " By Zihao Chen &amp; Nan Mo</p>" ; 
}

function validateSearch() {
	var text;
	var x;
	x = document.getElementById("search").value;
	if( x == null || x == "" ) {
		alert("Cannot be null");
		text = "Cannot be null";
		return false;
	}else { 
		text = "Searching"; 
	}
	document.getElementById("searchValid").innerHTML = text;

}


function navBar() {
	document.getElementById("nav01").innerHTML = 
	"<ul id='menu'>" + 
	"<li><a href='index.html'>Home</a></li>" +
	"<li><a href='profile.html'>Profile</a></li>" +
	"<li><a href='about.html'>About</a></li>" +
	"</ul>";
}