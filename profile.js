const colorButton = document.querySelector('#color')
const placeButton = document.querySelector('#place')
const traditionButton = document.querySelector('#tradition')

const colorAlert = () =>{
    colorButton.alert = ("Green")
}

const placeAlert = () =>{
    placeButton.alert = ("Zion's National Park")
}

const traditionAlert = () =>{
    traditionButton.alert = ("Indepence Day Fireworks and BBQ")
}

colorButton.addEventListener("click", colorAlert)
placeButton.addEventListener("click", placeAlert)
traditionButton.addEventListener("click", traditionAlert)


