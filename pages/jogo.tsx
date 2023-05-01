import { useState } from "react"
import styles from '../styles/Jogo.module.css'
import { atualizarPortas, criarPortas } from "../functions/portas"
import Porta from "../components/Porta"
import Link from 'next/link'

export default function Jogo(){

    const [portas, setPortas] = useState(criarPortas(5, 3))
 

  function renderizarPortas(){
    return portas.map(porta=>{
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => { console.log(novaPorta)
        setPortas(atualizarPortas(portas, novaPorta))}}/>
    })
  }


    return(
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>

            <div className={styles.botoes}>
                <Link href="/">
                    <button>Menu principal</button>
                </Link>
            </div>
        
       </div>
    )
}