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
    const [isWin, setWin] = useState(false)


    function comecar() {
        setStart(!isStart)
        //randomizar palavras
        aleatorio = (palavras[Math.floor(Math.random() * palavras.length)])
        setPalavra(aleatorio)
        //esconder palavra
        arrayLetra = aleatorio.split('')


        escondido = arrayLetra.map(() => " _ ")

        //console.log(arrayLetra)

        //console.log(escondido)
        //console.log(arrayLetra)
    }


    //estado de clicado da Letra
    //entrar numa lista de letras ja selecionadas

    function clicou(letraClicada) {

        //array de letras já clicadas
        let arrayClicado = clicado.includes(letraClicada) ? clicado : [...clicado, letraClicada];
        setClicado(arrayClicado)
        console.log(isWin)
        console.log(palavra)
        



        comparaLetra(letraClicada)

    }

    function comparaLetra(letraClicada) {

        //arrayLetra.forEach((indice) =>{

        
            if (arrayLetra.includes(letraClicada)) {
                setLetraCerta([...letraCerta, letraClicada])
                //let nova = letraClicada.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
                return(
                    console.log("acertou")
                )
                    
            } else {
                setErros(erros + 1)
                return (
                    console.log("errou")
                )
                } 
            //})
        }
    
    
                  


    //input
    function chutarPalavra() {
        console.log(isWin)
        if (palavra === chute) {
            setWin(true)
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
                        <button data-identifier="letter" key={l} className={clicado.includes(l) ? "selecionado" : "botao"} onClick={() => clicou(l)}>
                            {l.toUpperCase()}
                        </button>)}
                </div>
            )
        }


    }

    function Forca() {

        switch (erros){
            case 0:
                setImagem(forca0)
                break
            case 1:
                setImagem(forca1)
                break
            case 2:
                setImagem(forca2)
                break
            case 3:
                setImagem(forca3)
                break
            case 4:
                setImagem(forca4)
                break
            case 5:
                setImagem(forca5)
                break
            case 6:
                setImagem(forca6)
                setStart(false)
                break
        }
       

        return (<div className="forca">
            <img data-identifier="game-image" src={imagem} alt="" />
        </div>)
    }
    function Palavra(){

        if(isStart){
            return(<>
            <p data-identifier="word">{escondido}</p>
            </>)
        }else if(isWin){
            console.log("entrou")
            return(<>
            <p className="acertou" data-identifier="word">{palavra}</p>
            </>)
        }else if(erros === 6 ){
            return(<>
            <p className="perdeu" data-identifier="word">{palavra}</p>
            </>)
        } else{
            return(<>
            <p></p>
            </>)
        }
    }
    return (
        <div>
            <h1>Jogo da forca</h1>
            <div className='topbar'>
                <Forca />
                <div className="palavra">
                    {!isStart ? <button className='escolher' onClick={comecar} data-identifier="choose-word">Escolher palavra</button> : <button className='escolher' disabled>Escolher palavra</button>}
                    <Palavra></Palavra>
                </div>
            </div>

            <Botao />

            <div className="input">
                {isStart ? <input data-identifier="type-guess" type="text" placeholder="Chute a palavra certa" value={chute} onChange={(e) => setChute(e.target.value)} /> : <input type="text" placeholder="Comece o jogo" disabled />}
                {isStart ? <div className="enviar" onClick={chutarPalavra} data-identifier="guess-button"><ion-icon name="send"></ion-icon></div> : <button className="enviar-desabilitado" disabled><ion-icon name="send"></ion-icon></button>}
            </div>
        </div>
    )
}


