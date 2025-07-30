import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tema from './componentes/Tema.jsx'
import Cordoinput from './componentes/Cordoinput.jsx'
import Login from './componentes/Login.jsx'
import Tarefa04 from './componentes/Tarefa04.jsx'
import Tarefa05 from './componentes/Tarefa05.jsx'

function App() {
 

  return (
    <>
      < Tema/>
      < Cordoinput/>
      < Login/>
      < Tarefa04 />
      < Tarefa05 />
    </>
  )
}

export default App
