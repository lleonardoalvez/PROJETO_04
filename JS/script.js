let contador = 0 
let res = document.querySelector('section#result')

function contar() {
    contador ++
    res.innerHTML = `<p>Contador com <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = `<p>Contador com <mark>${contador}</mark> cliques.</p>`
}
