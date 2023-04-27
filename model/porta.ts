export default class PortaModel{
    #numero: number
    #selecionada: boolean
    #temPresente: boolean
    #aberta: boolean

    constructor(numero: number, temPresente, selecionada= false, aberta= false){
        //Inicializar os atributos
        this.#numero = numero
        this.#selecionada = selecionada
        this.#temPresente = temPresente
        this.#aberta = aberta
    }

    //Acessar os atributos atraves do get

    get numero(){
        return this.#numero
    }
    get temPresente(){
        return this.#temPresente
    }
    get selecionada(){
        return this.#selecionada
    }
    get aberta(){
        return this.#aberta
    }


    //Metodo para alternar a selecao da porta
    alternarSelecao(){
        const selecionada = !this.selecionada //Se a selecao incialmente for false, passará a ser true e vice versa
        return new PortaModel (this.numero, this.temPresente, selecionada, this.aberta) //Retorna uma nova instancia(objeto) sem alterar os valores iniciais
    }

    //Metodo para desselecionar a porta
    desselecionar(){
        const selecionada = false //Se a selecao incialmente for false, passará a ser true e vice versa
        return new PortaModel (this.numero, this.temPresente, this.selecionada, this.aberta) //Retorna uma nova instancia(objeto) sem alterar os valores iniciais 
    }

    //Metodo para abrir a porta
    abrir(){
        const aberta = true //Se a selecao incialmente for false, passará a ser true e vice versa
        return new PortaModel (this.numero, this.temPresente, this.selecionada, aberta) //Retorna uma nova instancia(objeto) sem alterar os valores iniciais 
    }
}