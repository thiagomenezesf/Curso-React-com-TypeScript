import { useState } from "react"
import './App.css'

export default function App() {

  const [nome, setNome] = useState("");
  const [inputNome, setInputNome] = useState("");

  const [inputAno, setInputAno] = useState("");
  const [ano, setAno] = useState("");

  const [idade, setIdade] = useState(0);

  function calculaIdade(ano: string) {
    setNome(inputNome);
    setAno(inputAno);

    setIdade(
      2026 - Number(ano)
    );

    setInputNome("");
    setInputAno("")
  }

  return (
    <div className="container">
      <h1 className="h1-title">Descubra sua idade</h1>
      <div className="form">
        <h3 className="h3">Digite seu nome</h3>
        <input className="input" value={inputNome} onChange={(e) => setInputNome(e.target.value)} placeholder="Digite seu nome" />

        <h3 className="h3">Digite o ano que nasceu</h3>
        <input className="input" value={inputAno} type="number" onChange={(e) => setInputAno(e.target.value)} placeholder="Digite seu ano de nascimento" />

        <button className="button" {...(inputNome && inputAno ? {onClick: () => calculaIdade(ano)} : {onClick: () => alert("Preencha todos os campos")} )}>Descobrir idade</button>
      </div>
      <h2 className="feedback">{nome && ano ? nome + " tem " + idade + " anos": null}</h2>
    </div>
  )
}