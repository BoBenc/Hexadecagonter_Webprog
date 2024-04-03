/*
* File: app.js
* Author: Bőgér Bence
* Copyright: 2024, Bőgér Bence
* Group: Szoft I-2-N
* Date: 2024-04-03
* Github: https://github.com/BoBenc/
* Licenc: GNU GPL
*/

const oldalInput = document.querySelector("#oldal")
const teruletInput = document.querySelector("#terulet")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener("click", () => {
    teruletszamitas()

})

function teruletszamitas(){
    let oldal = Number(oldalInput.value)
    let terulete = (4*Math.pow(oldal, 2))*Math.cos(Math.PI/16)/Math.sin(Math.PI/16)
    teruletInput.value = terulete.toFixed(2)
}