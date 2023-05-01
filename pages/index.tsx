import { useState } from 'react'
import Porta from "../components/Porta"
import { atualizarPortas, criarPortas } from '../functions/portas'
import PortaModel from "../model/porta";

export default function Home() {
 
  const [portas, setPortas] = useState(criarPortas(6, 4))
 

  function renderizarPortas(){
    return portas.map(porta=>{
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => { console.log(novaPorta)
        setPortas(atualizarPortas(portas, novaPorta))}}/>
    })
  }

  return (
  <div style={{display: "flex"}}>
   {renderizarPortas()}
  </div>
  )
}
