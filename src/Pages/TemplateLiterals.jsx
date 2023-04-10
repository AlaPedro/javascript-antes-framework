import React from 'react'
import { Link } from 'react-router-dom'

const name = "Badala"

const message = `Seja bem vindo ${name ?? 'Visitante'}`

export default function TemplateLiterals() {
    return (
        <div>
            <h1> Métodos de array ( .every() )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                Também chamado de Template Strings é um recurso da linguagem que permite declarar strings dentro das quais podemos interpolar valores ou ainda quebrar o texto em múltiplas linhas.
            </span>

            <h2>Exemplos:</h2>
            <span>{message}</span>
        </div>
    )
}
