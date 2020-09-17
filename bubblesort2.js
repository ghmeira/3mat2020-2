// Para objetos

function bubbleSort(vetor, fnComp) {
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

const candidatos = require('./dados/candidatos-2018.js')

console.time('Nova troca')
bubbleSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('Nova troca')
console.log(candidatos)