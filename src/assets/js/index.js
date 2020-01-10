// JavaScript Document

'use strict'

const but= document.getElementById('navButton');
const nav= document.getElementById('navigation');
let isNavigationOpen = false;
but.onclick = ()=>{
	if(isNavigationOpen){
		nav.classList.remove('open');
		nav.classList.add('closed');
		isNavigationOpen = false;
	}
	else{
	nav.classList.remove('closed');
	nav.classList.add('open');
	isNavigationOpen = true;
	}
}