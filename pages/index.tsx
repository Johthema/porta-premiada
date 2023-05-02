import { useState } from 'react'
import Porta from "../components/Porta"
import { atualizarPortas, criarPortas } from '../functions/portas'
import PortaModel from "../model/porta";
import Link from 'next/link';
import Cartao from '../components/Cartao';
import styles from '../styles/Formulario.module.css'
import EntradaNumerica from '../components/EntradaNumerica';


export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
  <div className={styles.formulario} >
  <div>
  <Cartao bgcolor="#c0392c">
    <h1>Porta premiada</h1>
  </Cartao>
  
  <Cartao>
    <EntradaNumerica text="Qtde Portas?"
     value={qtdePortas}
    onChange={novaQtde => setQtdePortas(novaQtde)}></EntradaNumerica>
  </Cartao>
  </div>

  <div>
  <Cartao>
  <EntradaNumerica text="Porta com presente?"
     value={comPresente}
    onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNumerica>

  </Cartao>
  <Cartao bgcolor="#28a085">
    <Link href={`/jogo/${qtdePortas}/${comPresente}`} className={styles.link}>
      <h2>Iniciar</h2>
    </Link>
  </Cartao>
  </div>
 
  </div>
  )
}
