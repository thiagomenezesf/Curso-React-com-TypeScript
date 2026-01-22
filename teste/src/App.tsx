import {Header} from './components/header.tsx';
import {Aluno} from './components/aluno.tsx';

export default function App(){
  return (
    <div>
      <Header title='Curso React + TypeScript'/>
      <Aluno nome= "Thiago Menezes" idade={20}/>
    </div>
  )
}