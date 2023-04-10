import React from 'react'
import { Link } from 'react-router-dom'

const array = [1, 2, 3, 4, 5, 'badala']

const peloMenosUmItenENumero = array.some(item => typeof item != 'number')

console.log(peloMenosUmItenENumero)

export default function Some() {
    return (
        <div>
            <h1> Métodos de array ( .every() )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                Descrição. some() executa a função callback uma vez para cada elemento presente no array até achar um onde o callback retorne um valor true. Se em qualquer dos elementos o valor for encontrado, some() imediatamente retorna true .
            </span>

            <h2>Exemplos:</h2>

        </div>
    )
}
