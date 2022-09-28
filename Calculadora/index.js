var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var reset = document.getElementById("botaoReset")
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

reset.addEventListener('click', () => {
    n1.forEach(n1 => n1.value = '')
    n2.forEach(n2 => n2.value = '')
    resul.forEach(resul => resul.value = '')
})