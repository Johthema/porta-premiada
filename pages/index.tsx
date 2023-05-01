import { useState } from 'react'
import Porta from "../components/Porta"
import { atualizarPortas, criarPortas } from '../functions/portas'
import PortaModel from "../model/porta";
import Link from 'next/link'
export default function Home() {


  return (
  <div >
  <h1>Porta premiada - Página em construção</h1>
  <br></br>
  <Link href="/jogo">
  <h1 >Iniciar jogo</h1>
  </Link>
  
  </div>
  )
}
