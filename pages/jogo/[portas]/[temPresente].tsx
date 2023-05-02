import { useEffect, useState } from "react"
import styles from '../../../styles/Jogo.module.css'
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Porta from "../../../components/Porta"
import Link from 'next/link'
import { useRouter } from "next/router"
export default function Jogo(){
    
  const router = useRouter()
  const [portas, setPortas] = useState([])
  
  const [valido, setValido] = useState(false)

  useEffect(()=>{
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValida = portas >= 3&& portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas
    setValido(qtdePortasValida && temPresenteValido)
  }, [portas])

  useEffect(()=>{
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])
  // router.query.portas
  // router.query.temPresente

   

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

                { valido ? 
                renderizarPortas():
                <h1>Valores invalidos</h1>
              }
            </div>

            <div className={styles.botoes}>
                <Link href="/">
                    <button>Menu principal</button>
                </Link>
            </div>
        
       </div>
    )
}