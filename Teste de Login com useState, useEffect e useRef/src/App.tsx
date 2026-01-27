import { useState, useEffect, useRef } from "react";
import './App.css';

export default function App() {

  const [username, setUsername] = useState<string[]>([]);
  const firstRender = useRef(true);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  function cadastrar() {
    setUsername(usuario => [...usuario, input]);
    setInput("");

    //localStorage.setItem("@cursoreact_user", JSON.stringify([...username, input]));
    setMessage("Usuário cadastrado com sucesso!");
  }

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact_user");
    console.log(tarefasSalvas)
    if(tarefasSalvas) {
      setUsername(JSON.parse(tarefasSalvas))
    } 
  }, [])
  
  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@cursoreact_user", JSON.stringify(username));
  }, [username, input])

  function logar() {
    if(username.includes(input)) {
      setMessage("Usuário logado com sucesso!");
    } else {
      setMessage("Usuário não encontrado. Por favor, cadastre-se.");
    }
}

  return (
    <div>
      <h1>Teste de Login</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite seu nome" />
      <button onClick={cadastrar}>Cadastrar</button>
      <button onClick={logar} >Logar</button>
      <p>{message}</p>
    </div>
  );
}