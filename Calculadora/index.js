var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resul = document.querySelector('#resultado')

function Somar(){
    resul.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

function Subtrair(){
    resul.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}

function Multiplicar(){
    resul.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}

function Dividir(){
    resul.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}