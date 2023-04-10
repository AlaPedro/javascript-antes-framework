import React from 'react'
import { Link } from 'react-router-dom'

const array = [1, 2, 3, 4, 5]

const soma = array.reduce((acc, item) => {
    return acc + item
}, 0)

console.log(soma)

// Nesse caso o reduce percorre pelo array somando do primeiro valor que a gente setou como "0" e vai somando um por um.. 0 + 1, 1+2 e assim por diante até o último valor. Chegando no resultado da soma = 15

export default function Reduce() {
    return (
        <div>
            <h1> Métodos de array ( .reduce() )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único.
            </span>

            <h2>Exemplos:</h2>

        </div>
    )
}
