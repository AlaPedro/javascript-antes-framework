import React from 'react'
import { Link } from 'react-router-dom'

const array = [1, 2, 3, 4, 5, 'badala']

const todosOsItensSaoNumeros = array.every(item => typeof item === 'number')

console.log(todosOsItensSaoNumeros)

export default function Every() {
    return (
        <div>
            <h1> Métodos de array ( .every() )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                O método every executa a função callback fornecida uma vez para cada elemento presente no array, até encontrar algum elemento em que a função retorne um valor false (valor que se torna false quando convertido para boolean). Se esse elemento é encontrado, o método every imediatamente retorna false.
            </span>

            <h2>Exemplos:</h2>
            
        </div>
    )
}
