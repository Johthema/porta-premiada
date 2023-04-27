import style from '../styles/Porta.module.css'
import PortaModel from '../model/porta'

interface PortaProps {
    // porta: PortaModel
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta? style.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e =>{
        e.stopPropagation()
        props.onChange(porta.abrir())
    } 

    function renderizarPorta(){
        return(

        <div className={style.porta}>
            <div className={style.numero}>{porta.numero}</div>
            <div className={style.macaneta} onClick={abrir}></div>
        </div>
            
        )

    }

    return(
        
        <div className={style.area} onClick={alternarSelecao}>
            
            <div className={`${style.estrutura} ${selecionada}`}>
                {porta.aberta ? false : renderizarPorta() }
           </div>
            <div className={style.chao}></div>
        </div>
        
    )
}