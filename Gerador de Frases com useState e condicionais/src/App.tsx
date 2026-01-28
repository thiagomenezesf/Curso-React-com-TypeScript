import { useState } from "react"
import './App.css'

import logoImg from './assets/logo.png'

export default function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Nada é tão ruim que não possa piorar',
        'Hoje melhor que ontem',
        'Não deixe para hoje o que você pode fazer amanhã'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Está um ótimo dia nublado, aproveite!",
        "Espero que seu dia seja do jeito que você não espera",
        "Bom dia! Não se esqueça que vai trabalhar mais 12 horas hoje!"
      ]
    }
  ]

  function mudarCategoria(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}".`)
  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logoImg}
        className="logo"
      />
        
      <h1 className="title">Categorias</h1>
      <section className="category-area">
        {allFrases.map( (item, index) => (
          <button
          className="button-mensagem"
          key={item.id}
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "blue"
          
          }}
          onClick={() => mudarCategoria(index)}
          >{item.nome}</button>
        ) )}
      </section>
      
      <button className="button-frase" onClick={() => gerarFrase()}>Gerar frase</button>

      <h2 className="texto-frase" >{textoFrase ? textoFrase : "Aperte o botão para gerar a frase."}</h2>
    </div>
  )

}