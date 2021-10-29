const colorButton = document.querySelector('#color')
const placeButton = document.querySelector('#place')
const traditionButton = document.querySelector('#tradition')

const colorAlert = () =>{
   alert ("Green")
}

const placeAlert = () =>{
    alert ("Zion's National Park")
}

const traditionAlert = () =>{
    alert ("Indepence Day Fireworks and BBQ")
}

colorButton.addEventListener("click", colorAlert)
placeButton.addEventListener("click", placeAlert)
traditionButton.addEventListener("click", traditionAlert)


