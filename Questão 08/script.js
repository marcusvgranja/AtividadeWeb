function verificarFormulario() {
    var nome  = document.getElementById('nomeUsuario')
    var email = document.getElementById('emailUsuario')
    var res = document.getElementById('res')
    var erros = 0

    nome.style.border = '1px solid #ccc'
    email.style.border = '1px solid #ccc'
    res.style.color = 'red'
    res.style.fontSize = '14px'
    res.innerHTML = ''

    if (nome.value.length == 0) {
        nome.style.border = '1px solid red'
        res.innerHTML += '<p>Erro: Nome não informado!</p>'
        erros += 1
    }
    if (email.value.length == 0) {
        email.style.border = '1px solid red'
        res.innerHTML += '<p>Erro: E-mail não informado!</p>'
        erros += 1
    } 

    if (erros == 0) {
        res.style.color = 'green'
        res.innerHTML = '<p>Todos os dados foram preenchidos.</p>'
    } else {
        if (erros == 2) {
             res.innerHTML = '<p>Nenhum dos dados foi preenchido!</p>'
        }
    }
}