function EncontrarCor() {
    var cor = document.getElementById("encontracor")
    var res = document.getElementById("res")
    var strCor = cor.value.toUpperCase()
    var corPT = ''

    if (cor.value.length == 0) {
        alert("Por favor digite uma cor!")
        return
    }
    switch(true) {
        case (strCor == 'RED'):
            corPT = 'Vermelho'
            break
        case (strCor == 'BLUE'):
            corPT = 'Azul'
            break
        case (strCor == 'GREEN'):
            corPT = 'Verde'
            break
        case (strCor == 'YELLOW'):
            corPT = 'Amarelo'
            break
        case (strCor == 'ORANGE'):
            corPT = 'Laranja'
            break
        case (strCor == 'PURPLE'):
            corPT = 'Roxo'
            break
        case (strCor == 'BLACK'):
            corPT = 'Preto'
            break
        case (strCor == 'WHITE'):
            corPT = 'Branco'
            break
        default:
            corPT = 'Cor Desconhecida'
            break
    }

    res.innerHTML = ''
    var paragrafo = document.createElement('p')
    if (corPT == 'Cor Desconhecida') {
        paragrafo.innerHTML = `Não conseguimos traduzir essa cor.`
    } else {
        paragrafo.innerHTML = `A cor correspondente é <strong>${corPT}</strong>`
    }

    res.appendChild(paragrafo)
}