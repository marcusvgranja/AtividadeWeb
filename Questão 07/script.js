function gerarFatorial() {
    var numero = document.getElementById('txtn')
    var n = Number(numero.value)
    var resultado = 1
    var res = document.getElementById('res')

    //como nao existem fatoriais negativos, vou fazer uma verificaçao pra n entrar com valores negativos e nem maiores que 10

    if (numero.value.length == 0){
        alert("Valor não Digitado")
        return
    }
    if (n < 0 || n > 10) {
        alert("Valor fora do escopo de 0 a 10.")
    } else {
        for (let i = 1 ; i <= n; i++) {
            resultado *= i
        }
        var p = document.createElement('p')
        res.innerHTML = ''
        if (n == 0) {
            p.innerHTML = `O fatorial de 0! é 1`
        } else {
            p.innerHTML = `O resultado de ${n}! é ${resultado}.`
        }
        res.appendChild(p)
    }
}