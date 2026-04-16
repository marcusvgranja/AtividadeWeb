function VerificarNumero() {
    var numero = document.getElementById("txtn")
    var res = document.querySelector(".res")
    
    if (numero.value.length == 0) {
        window.alert ("Valor Não Digitado!")
    } else {
        var resultado = document.createElement('p')
        res.innerHTML = ''
        if (Number(numero.value) % 2 == 0) {
            resultado.innerHTML = `O valor ${numero.value} é Par`
        } else {
            resultado.innerHTML = `O valor ${numero.value} é Ímpar`
        }

        res.appendChild(resultado)
    }
}