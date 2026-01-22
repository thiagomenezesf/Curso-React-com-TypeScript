import { useState } from "react"

export default function App(){

  interface InfoAlunoProps {
    nome: string;
    idade: string;
  }

  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()
  const[contador, setContador] = useState(0)

  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    }
    )
  }

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  return (
    <div>
      <h1>Conhecendo useState</h1>

      <input className="pinto" placeholder="Digite o nome" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <br/>
      <br/>
      <input className="pinto" placeholder="Digite a idade" value={idade} onChange={(e) => setIdade(e.target.value)}></input>
      <br/>
      <br/>
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr/>
      <h2>Bem vindo: {infoAluno?.nome}</h2>
      <h3>Idade: {infoAluno?.idade}</h3>
      <br/>
      <hr/>
      <h2>Contador com useState:</h2>
      <button onClick={diminuir}>-</button> {contador} <button onClick={aumentar}>+</button>
    </div>
  )
}