import React from 'react'
import { Link } from 'react-router-dom'

const array = [1, 2, 3, 4, 5]

export default function Map() {
    return (
        <div>
            <h1> Métodos de array ( .map() )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                O map é um método nativo do JavaScript, utilizado na manipulação de dados dentro de arrays. Seu funcionamento é semelhante a uma estrutura de repetição, como, por exemplo, um loop for, pois executa uma determinada ação em todos os elementos do array.
            </span>

            <h2>Exemplos:</h2>
            <h3>Pegando itens do array e printando no html</h3>
            {array.map(item => (
                <span>
                    {item + ' '}
                </span>
            ))}

            <h3>Usando condicionais no map.()</h3>

            {array.map((element, index) => {
                if (element % 2 === 0) {
                    return <span key={index}> {element * 10 + " "}</span>
                }
                return element + " "
            })}
        </div>
    )
}
