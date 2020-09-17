function bubbleSort(vetor) {
    let trocas
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    do {
        passadas++
        trocas = 0
        // Percurso do vetor do início até a PENÚLTIMA (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            if(vetor[i] > vetor[i + 1]) {
                // Fazer a troca entre os elementos usando DESESTRUTURAÇÃO (destructuring)
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
        }
        totalTrocas += trocas
    } while(trocas > 0)
    console.log({passadas, comparacoes, totalTrocas})
}

const nomes = require('./dados/100-mil-nomes.js')

console.time('sort names')
bubbleSort(nomes)
console.timeEnd('sort names')
console.log(nomes)