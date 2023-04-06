import React from 'react'
import { Link } from 'react-router-dom'

const user = {
    name: 'pedro',
    age: 23,
    address: {
        rua: 'jardim do seridó',
        numero: 120,
        zip: {
            code: '120392122',
            city: 'floripa'
        },
        showFullAddress() {
            return "ok"
        }
    }
}

export default function OptionalChaining() {
    return (
        <div>
            <h1>OptionalChaining ( ? )</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
            <span>
                Encadeamento opcional (?.) O operador encadeamento opcional ( ?. ) acessa a propriedade de um objeto ou chama uma função. Se o objeto acessado ou a função chamada usando esse operador for undefined ou null , a expressão sofrerá um curto-circuito e será avaliada como undefined em vez de lançar um erro.
            </span>

            <h2>Exemplo:</h2>

            <span>{user.address?.zip?.code ?? "não informado"}</span>
            <br />
            <span>{user.address?.showFullAddress?.() ?? "não informado"}</span>

            <h2>Se um dos valores não existirem que estejam com o optional chaining o retorno vai ser : "não informado", portanto é importante usar para previnir erros na aplicação</h2>
        </div>
    )
}

