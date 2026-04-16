function gerarTabuada() {
    var numero = document.getElementById('numero')
    var n = Number(numero.value)

    var res = document.getElementById('res')

    if (numero.value.length == 0) {
        alert("Valor não digitado!")
        return
    }

    var paragrafo = document.createElement('p')
    res.innerHTML = ''

    for (let i = 0; i <= 10; i++) {
        paragrafo.innerHTML += `${n} X ${i} = ${n*i}<br>`
        res.appendChild(paragrafo)
    }
}