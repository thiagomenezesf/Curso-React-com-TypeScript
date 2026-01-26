import { useState, FormEvent } from "react"
import './assets/App.css'

export default function App(){    
  
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([
    'Estudar react com typescript',
    'Comprar o cips',
    'Estudar Ingles'
  ])
  const [editTask, setEditTask] = useState({
    editing: false,
    task: ''
  })

  function listar() {
    if(!input) {
      alert("Preencha o campo com a sua tarefa!")
      return;
    }

    if(editTask.editing) {
      salvarEdicao();

      setEditTask({
        editing: false,
        task: ''
      })

      setInput('');

      return;
    }

    setTasks(tarefas => [...tarefas, input]);
    setInput("");
  }

  function salvarEdicao() {
    const encontrarPosicao = tasks.findIndex(task => task === editTask.task)
    const todasTasks = [...tasks];
    todasTasks[encontrarPosicao] = input;
    setTasks(todasTasks);
  }

  function limparTarefa(item: string) {
    const removeTask = tasks.filter(task => task !== item)
    setTasks(removeTask)
  }

  function editarTarefa(item: string) {
    setInput(item)
    setEditTask({
      editing: true,
      task: item
    })
  }

  return (
    <div className="container">
      <header>
        <h1>Lista de Tarefas</h1>
        <input
          className="inputTask"
          placeholder="Digite sua tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonTask" onClick={listar}>{editTask.editing ? "Atualizar Tarefa" : "Listar tarefa"}</button>
      </header>

      <hr/>

    <div className="body">
      {tasks.map( (item, index) => (
        <section className="lista" key={item}>
          <span>{item}</span>
          <button className="buttonTask" onClick={() => editarTarefa(item)}>Editar</button>
          <button className="buttonTask" onClick={() => limparTarefa(item)}>Excluir</button>
        </section>
      ))}
    </div>
      
    </div>
  )
}