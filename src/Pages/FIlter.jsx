import React from 'react'
import { Link } from 'react-router-dom'

const array = [1, 2, 3, 4, 5]

const newArray = array
    .filter(item => item % 2 != 0)
    .map(item => item * 10)

export default function Filter() {
    return (
        <div>
            <h1> Métodos de array ( .filter() )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true.
            </span>

            <h2>Exemplos:</h2>
            <span>Novo array com filter e multiplicamos por 10 com o map<br></br>{JSON.stringify(newArray)}</span>
        </div>
    )
}
