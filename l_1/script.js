"use strict";
function returnTc(tc) {
    let tf = (9 / 5) * Number(tc) + 32
    return tf
}

function myFunction() {
    let resultC = document.getElementById("inputTc").value
    let resultF = returnTc(resultC)
    document.getElementById("demo").innerHTML = `${resultC} градусов Цельсия = ${resultF} градусов по Фаренгейту `

}

let admin = ''
let name = 'Василий'
admin = name

// Сделано просто для примера вывода через alter
alert(`Переменная admin = ${admin}`)
alert(`JS-выражение 1000 + "108" = ${1000 + "108"}`)