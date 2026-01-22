import { useState } from "react"

  interface UserProps {
    nome: string;
    senha: string;
  }

export default function App(){

  const [user, setUser] = useState<UserProps>({
    nome: "Visitante",
    senha: "",
  })
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  
function logar() {
  setUser({
    nome: nome,
    senha: senha,
  })
}

function deslogar() {
  setUser ({
    nome: "Visitante",
    senha: "",
  })
}

  return (
    <div>
      <h1>Conhecendo useState</h1>

      <input placeholder="Digite o login" value={nome} onChange={(e) => setNome(e.target.value)}></input>
      <input placeholder="Digite a senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
      <br/>
      <button onClick={logar} >Login</button> <button onClick={deslogar} >Logout</button>
      <br/>
      <h2>Nome: {user.nome}</h2>
      <h3>Senha: {user.senha}</h3>
    </div>
  )
}