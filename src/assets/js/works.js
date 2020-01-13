// JavaScript Document

'use strict'

const illustrations = document.getElementsByClassName('work-box');

for(let i=0; i<illustrations.length;i++){
	
	illustrations[i].onclick = () =>{
		console.log(illustrations[i].children[0].getAttribute('src'));
		
	}
}