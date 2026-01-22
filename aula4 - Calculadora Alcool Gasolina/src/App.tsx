import './App.css'
import { useState, FormEvent } from "react"

import logoImg from './assets/logo.png'

export default function App(){
  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [alcoolInput, setAlcoolInput] = useState(1)
  const [oQueCompensa, setOQueCompensa] = useState("")

  function calcular() {
    event?.preventDefault();

    let calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7) {
      setOQueCompensa("Compensa mais utilizar álcool!")
    } else {
      setOQueCompensa("Compensa mais utilizar gasolina!")
    }
    
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br",
      {
        style: "currency",
        currency: "BRL"
      })

      return valorFormatado
  }

  return (
    <div>
      <main className='container'>
        <img
        className='logo'
          src={logoImg}
          alt='Logo da calculadora de gasolina ou alcool'
        />
        <h1 className="title">Qual melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='4,90'
            min={1}
            step={0.01}
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
            ></input>

          <label>Gasolina (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='4,90'
            min={1}
            step={0.01}
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
            ></input>

          <input className='button' type='submit' value='Calcular'></input>
        </form>

        {oQueCompensa && Object.keys(oQueCompensa).length > 0 &&(
          <section className='section'>
          <h2 className='title-button'>{oQueCompensa}</h2>
          <span>Álcool {formatarMoeda(alcoolInput)}</span>
          <span>Gasolina {formatarMoeda(gasolinaInput)}</span>
        </section>
        )}
      </main>
    </div>
  )
}