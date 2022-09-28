var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var resetar = document.getElementById("botaoReset")
var resul = document.getElementById("resultado")

function Somar(){
    resul.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}

function Subtrair(){
    resul.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}

function Multiplicar(){
    resul.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}

function Dividir(){
    resul.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}

function Limpar(){
    n1.value = ''
    n2.value = ''
    resul.innerHTML = ''
}