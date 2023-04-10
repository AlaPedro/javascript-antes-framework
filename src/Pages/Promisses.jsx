import React from 'react'
import { Link } from 'react-router-dom'

async function buscaDadosNoGitHub() {
    try {
        const response = await fetch('https://api.github.com/users/AlaPedro')
        const body = await response.json()

        console.log(body.login)
    } catch (err) {
        console.log(err)
    }
}

buscaDadosNoGitHub()


export default function Promisses() {
    return (
        <div>
            <h1> Promisses </h1>
            <Link to={"/"}> <h2>Voltar para home</h2></Link>
        </div>
    )
}
