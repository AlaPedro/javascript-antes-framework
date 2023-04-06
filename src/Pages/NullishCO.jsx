import React from 'react'
import { Link } from 'react-router-dom'

const saldo = 0

const idade = null

export default function NullishCO() {
    return (
        <div>
            <h1>Nullish Operator ( ?? )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                O Nullish Operator (??) é um operador lógico que retorna o operando do lado direito quando o operando do lado esquerdo é nulo ou indefinido e, caso contrário, retorna o operando do lado esquerdo.
            </span>

            <h2>Exemplos:</h2>

            <h2>O meu saldo é de : {saldo ?? "Seu saldo é nulo"}</h2>

            <h2>Minha idade é : {idade ?? "A idade não foi informada"}</h2>
        </div>
    )
}
