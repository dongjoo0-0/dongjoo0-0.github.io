let myImage = document.querySelector('img');

myImage.onclick = function() {
	let src = myImage.getAttribute('src');
	if (src === 'images/nurireneu.png'){
		myImage.setAttribute('src','images/sharoda.png');
	} else {
		myImage.setAttribute('src','images/nurireneu.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please Enter your name...');
	if (!myName || myName === null){
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Pokemon image for ' + myName;
	}
}

myButton.onclick = function() {
	setUserName();
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Pokemon image for ' + storedName;
}