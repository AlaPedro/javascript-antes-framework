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

        <Link to={"/Every"}>
          <h2>Métodos de array: .every()</h2>
        </Link>

        <Link to={"/Some"}>
          <h2>Métodos de array: .some()</h2>
        </Link>

        <Link to={"/Reduce"}>
          <h2>Métodos de array: .reduce()</h2>
        </Link>

        <Link to={"/TemplateLiterals"}>
          <h2>Template Literals</h2>
        </Link>

        <Link to={"/Promisses"}>
          <h2>Promisses</h2>
        </Link>
      </nav>
    </div>
  )
}

export default App
