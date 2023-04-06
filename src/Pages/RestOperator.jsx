import React from 'react'
import { Link } from 'react-router-dom'

const user = {
    name: 'pedro',
    age: 23,
    address: {
        rua: 'jardim do seridó',
        numero: 120
    },
    zip: {
        code: '120392122',
        city: 'floripa'
    }
}

const { name, age, ...rest } = user


export default function RestOperator() {
    return (
        <div>
            <h1>Rest Operator ( ... )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                O operador rest em javaScript permite que uma função pegue um número indefinido de argumentos e os agrupe em uma matriz, permitindo-nos escrever funções que podem aceitar um número variável de argumentos, independentemente do número de parâmetros definidos.
            </span>

            <h2>Exemplo:</h2>

            <span>{JSON.stringify({ name, age, rest })}</span>
        </div>
    )
}
