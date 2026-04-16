function CalcularLetra() {
    let numero = document.getElementById('numero')
    let res = document.getElementById('res')
    let n = Number(numero.value)
    
    if (numero.value.length == 0) {
        alert("Valor não digitado! Por favor, digite um valor para a conversão")
    } else if (n < 0 || n > 100) {
        alert("Valor fora do escopo de 0 a 100.")
    } else {
        let letra = ''

        switch (true) {
            case (n >= 90):
                letra = 'A'
                break

            case (n >= 80):
                letra = 'B'
                break

            case (n >= 70):
                letra = 'C'
                break
            
            case (n >= 60):
                letra = 'D'
                break
            
            default:
                letra = 'F'
                break
        }

        res.innerHTML = ''
        var p = document.createElement('p')
        p.innerHTML = `O valor foi ${n}. A nota correspondente é ${letra}`
        
        res.appendChild(p)
    }
}