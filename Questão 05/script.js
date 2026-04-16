function somarPares() {
    var res = document.getElementById('res')
    var soma = 0
    for (let i = 0; i <= 100; i += 2) {
        soma += i
    }

    res.innerHTML = ''
    paragrafo = document.createElement('p')
    paragrafo.innerHTML = `A soma dos números pares entre 1 e 100 é ${soma}`
    paragrafo.style.color = 'black'
    
    res.appendChild(paragrafo)
    
}