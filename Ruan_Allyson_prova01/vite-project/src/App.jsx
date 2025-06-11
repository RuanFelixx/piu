import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componentes/Contador.jsx'
import Listacarros from './componentes/Listacarros.jsx'

function App() {

  return (
    <> 
    <Contador />
    <Listacarros />
    </>
  )
}

export default App
