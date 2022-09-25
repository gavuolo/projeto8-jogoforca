import React, { useState } from "react";

import alfabeto from "./alfabeto";
import palavras from './palavras'

//estados da forca 
import forca0 from "./image/forca0.png";
import forca1 from "./image/forca1.png";
import forca2 from "./image/forca2.png";
import forca3 from "./image/forca3.png";
import forca4 from "./image/forca4.png";
import forca5 from "./image/forca5.png";
import forca6 from "./image/forca6.png";


let aleatorio = []
let escondido
let arrayLetra

export default function App() {

    const [clicado, setClicado] = useState([])
    const [isStart, setStart] = useState(false)
    const [palavra, setPalavra] = useState([])
    const [chute, setChute] = useState([])
    const [erros, setErros] = useState(0)
    const [imagem, setImagem] = useState(forca0)
    const [letraCerta, setLetraCerta] = useState([])


    function comecar() {
        setStart(!isStart)
        //randomizar palavras
        aleatorio = (palavras[Math.floor(Math.random() * palavras.length)])
        setPalavra(aleatorio)
        //esconder palavra
        arrayLetra = aleatorio.split('')
        escondido = arrayLetra.map(() => " _ ")
    }


    //estado de clicado da Letra
    //entrar numa lista de letras ja selecionadas

    function clicou(letraClicada) {

        let arrayClicado = clicado.includes(letraClicada) ? clicado : [...clicado, letraClicada];
        setClicado(arrayClicado)
        console.log(arrayClicado)
        console.log(palavra)
        let ponto = arrayLetra.includes(letraClicada) ? setLetraCerta([...letraCerta, letraClicada]) : setErros(erros + 1)

        //comparaLetra(letraClicada)

    }
    //function comparaLetra(letraClicada){
    //    if(letraClicada === arrayLetra){
    //       return "acertou"
    // }
    //}

    //input
    function chutarPalavra() {
        if (palavra === chute) {
            console.log("acertou")
        } else {
            setErros(6)
        }
    }


    function Botao() {

        if (!isStart) {
            return (
                <div className="bottom">
                    {alfabeto.map((l) =>
                        <button key={l} className="botao botao-desabilitado">
                            {l.toUpperCase()}
                        </button>)}
                </div>
            )
        } else {
            return (
                <div className="bottom">
                 {alfabeto.map((l) => 
                 <button key={l} className={clicado.includes(l) ? "selecionado" : "botao"} onClick={() => clicou(l)}>
                    {l.toUpperCase()}
                </button>)}
                </div>
            )
        }


    }

    function Forca() {
        if (erros === 0) {
            setImagem(forca0)
        } else if (erros === 1) {
            setImagem(forca1)
        } else if (erros === 2) {
            setImagem(forca2)
        } else if (erros === 3) {
            setImagem(forca3)
        } else if (erros === 4) {
            setImagem(forca4)
        } else if (erros === 5) {
            setImagem(forca5)
        } else if (erros === 6) {
            setImagem(forca6)
        }

        return (<div className="forca">
            <img src={imagem} alt="" />
        </div>)
    }

    return (
        <div>
            <h1>Jogo da forca</h1>
            <div className='topbar'>
                <Forca />
                <div className="palavra">
                    {!isStart ? <button className='escolher' onClick={comecar}>Escolher palavra</button> : <button className='escolher' disabled>Escolher palavra</button>}
                    {isStart ? <p>{escondido}</p> : <p></p>}
                    {clicado}
                </div>
            </div>

            <Botao />

            <div className="input">
                {isStart ? <input type="text" placeholder="Chute a palavra certa" value={chute} onChange={(e) => setChute(e.target.value)} /> : <input type="text" placeholder="Comece o jogo" disabled />}
                {isStart ? <div className="enviar" onClick={chutarPalavra}><ion-icon name="send"></ion-icon></div> : <div className="enviar-desabilitado"><ion-icon name="send"></ion-icon></div>}
            </div>
        </div>
    )
}


