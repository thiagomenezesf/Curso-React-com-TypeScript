import { useState, useEffect, useRef, useMemo } from "react"
import './App.css'

export default function App(){    

  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true)
  
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

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact")
    if(tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas))
    } 
  }, [])

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;

      return;
    }

        localStorage.setItem("@cursoreact", JSON.stringify(tasks))
  }, [tasks])

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
    //localStorage.setItem("@cursoreact", JSON.stringify([...tasks, input]))
  }

  function salvarEdicao() {
    const encontrarPosicao = tasks.findIndex(task => task === editTask.task)
    const todasTasks = [...tasks];
    todasTasks[encontrarPosicao] = input;
    setTasks(todasTasks);

    //localStorage.setItem("@cursoreact", JSON.stringify(todasTasks))
  }

  function limparTarefa(item: string) {
    const removeTask = tasks.filter(task => task !== item)
    setTasks(removeTask)
    //localStorage.setItem("@cursoreact", JSON.stringify(removeTask))
  }

  function editarTarefa(item: string) {

    inputRef.current?.focus();

    setInput(item)
    setEditTask({
      editing: true,
      task: item
    })
  }

  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])

  return (
    <div className="container">
      <header>
        <h1>Lista de Tarefas</h1>
        <input
          className="inputTask"
          placeholder="Digite sua tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <button className="buttonTask" onClick={listar}>{editTask.editing ? "Atualizar Tarefa" : "Listar tarefa"}</button>
      </header>

      <hr/>

    <div className="body">

      <strong className="numeroTarefas">Você tem {totalTarefas} tarefas!</strong>

      {tasks.map( (item, index) => (
        <section className="lista" key={item}>
          <input className="check" type="checkbox"/>
          <span>{item}</span>
          <button className="buttonTask" onClick={() => editarTarefa(item)}>Editar</button>
          <button className="buttonTask" onClick={() => limparTarefa(item)}>Excluir</button>
        </section>
      ))}
    </div>
      
    </div>
  )
}