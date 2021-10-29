const restButton = document.querySelector('#button-two')
const restInfo = document.querySelector('#rest-info')
const randomArray = ['Olive Garden', 'Texas Roadhouse', 'Applebees', 'Outback Steakhouse'];

function randomRest (event){
	event.preventDeault();
	const randomIndex = Math.floor(Math.random() * randomArray.length);
	restInfo.textContent = randomArray[randomIndex];
}

restButton.addEventListener("click", randomRest)