function CalcularMedia() {
    var nota1 = document.getElementById('n1')
    var nota2 = document.getElementById('n2')
    var nota3 = document.getElementById('n3')
    var nota4 = document.getElementById('n4')
    var resultado = document.querySelector('div.res')

    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var n3 = Number(nota3.value)
    var n4 = Number(nota4.value)

    if(nota1.value.length == 0 || nota2.value.length == 0 || nota3.value.length == 0 || nota4.value.length == 0) {
        alert("Um ou mais campos não foram digitados!")
    } else {
        if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10) {
            alert("Valor fora de escopo!")
        } else {
            var media = (n1 + n2 + n3 + n4) / 4
            resultado.innerHTML = ''
            var res = document.createElement('p')
            res.innerHTML = `A média dos 4 valores acima é de ${media.toFixed(2)} <br>`
            if (media >= 7) {
                res.innerHTML += `O aluno foi <strong>APROVADO</strong>`
            } else {
                res.innerHTML += `O aluno foi <strong>REPROVADO</strong>`
            }
            resultado.appendChild(res)
        }
    }
}