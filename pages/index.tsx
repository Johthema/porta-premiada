import { useState } from 'react'
import Porta from "../components/Porta"
import { criarPortas } from '../functions/portas'
//import PortaModel from "../model/porta";

export default function Home() {
  // const p1 = new PortaModel(1)
  // const p2 = new PortaModel(2)
  // const p3 = new PortaModel(3, false, true)
  //ou melhor..

  // const [p1, setP1] = useState(new PortaModel(1))
  const [portas, setPortas] = useState(criarPortas(3, 2))
 

  function renderizarPortas(){
    return portas.map(porta=>{
      return <Porta key={porta.numero} value={porta} onChange={console.log}/>
    })
  }

  return (
  <div style={{display: "flex"}}>
   {renderizarPortas()}
  </div>
  )
}
