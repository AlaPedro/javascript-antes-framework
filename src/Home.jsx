import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>Revisão de javascript - pontos mais importantes</h1>
      <nav>
        <Link to={"/nullishOperator"}>
          <h2>Nullish Operator</h2>
        </Link>

        <Link to={"/Objetos"}>
          <h2>Objetos</h2>
        </Link>

        <Link to={"/RestOperator"}>
          <h2>Rest Operator</h2>
        </Link>

        <Link to={"/OptionalChaining"}>
          <h2>Optional Chaining</h2>
        </Link>

        <Link to={"/Map"}>
          <h2>Métodos de array: .map()</h2>
        </Link>

        <Link to={"/Filter"}>
          <h2>Métodos de array: .filter()</h2>
        </Link>
      </nav>
    </div>
  )
}

export default App
