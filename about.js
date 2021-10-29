console.log("hello world");



function handleSubmit(event) {
	event.preventDefault();
	
	alert('You have successfuly submitted your form');
}
const image= document.querySelector('#image')

const mouseOverEvent = (event) => {
	alert ('You are the coolest')
}	
image.addEventListener("mouseover", mouseOverEvent)



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


