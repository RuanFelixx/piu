import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contador from './componentes/Contador.jsx'
import Listacarros from './componentes/Listacarros.jsx'
import './App.css'

function App() {

  return (
    <>
     <Contador />
     <Listacarros />
    </>
  )
}

export default App
