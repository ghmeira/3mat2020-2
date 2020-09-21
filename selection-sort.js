/*
    Parâmetro:
    1- O vetor onde será feito a busca
    2- A posição inicial do vetor a partir do qual será feito a busca
    Retorno:
    - A posição do menor valor encontrado
*/

function selectionSort(vetor){
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    function encontrarMenor(vetor, inicio){
        let res = inicio

        //for interno
        for(let i = inicio + 1 ; i < vetor.length;i++){
            comparacoes++
            if(vetor[i] < vetor[res]) res = i
        }
        return res
    }

    // for externo - da primeira a penultima posição
    for(let i = 0;i < vetor.length - 1; i++){
        passadas++

        let posMenor = encontrarMenor(vetor, i+1)

        comparacoes++
        if(vetor[i] > vetor[posMenor]) {
            [vetor[i], vetor[posMenor]] = [vetor[posMenor], vetor[i]]
            totalTrocas++
        }
    }
    console.log("Passadas:", passadas, "Comparações:", comparacoes, "Total de Trocas:", totalTrocas)
}

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

// console.log(encontrarMenor(nums, 4))
console.time('selection-sort')
selectionSort(nums)
console.timeEnd('selection-sort')
console.log(nums)

const nomes = require('./dados/100-mil-nomes.js')
console.time('selection-sort2')
selectionSort(nomes)
console.timeEnd('selection-sort2')
console.log(nomes)