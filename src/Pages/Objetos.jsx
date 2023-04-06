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

// desestruturação 

const age = user.age

const { address } = user

function mostraDados({ age }) {
    return age
}

export default function Objetos() {
    return (
        <div>
            <h1>Objetos</h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>

            <span>{JSON.stringify(Object(user))}</span>

            <br />
            <br />

            <span>a idade é: {age}</span>

            <br />
            <br />

            <span>o address é: {JSON.stringify({ address })}</span>

            <br />
            <br />

            <h2>{mostraDados(user)}</h2>

        </div>
    )
}
