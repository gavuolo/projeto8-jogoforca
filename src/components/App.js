import React, { useState } from "react";
import alfabeto from "./alfabeto";
import palavras from './palavras'

let arrayAleatorio = []

export default function App() {

   

    return (
        <div>
            <h1>Jogo da forca</h1>
            <div className='topbar'>
                <Forca />
                <Palavra />
            </div>
            
            <Letra />
            <Chute />
        </div>
    )
}

function Palavra() {
    const [isStart, setStart] = useState(false)
    function comecar() {
        setStart(!isStart)
        
    }
    const aleatorio = (palavras[Math.floor(Math.random() * palavras.length)])
    arrayAleatorio = aleatorio
    //let escondido = [aleatorio].fill(" _ ")
   
    
    return (
        <div className="palavra">
            {!isStart ? <button className='escolher' onClick={comecar}>Escolher palavra</button> : <button className='escolher'>Escolher palavra</button>}
            {isStart ? <p>{arrayAleatorio}</p> : <p></p>}
        </div>
    )
}
function Forca() {
    return (
        <div className="forca">
            <img src="./image/forca0.png" alt="" />
        </div>
    )
}

function Letra() {
    const [clicado, setClicado] = useState([])
    function clicou(letraClicada) {
        setClicado([...clicado, letraClicada])
    }
    return (
        <div className="bottom">
            {alfabeto.map((l) => <div key={l} className={clicado.includes(l) ? "selecionado" : "botao"} onClick={() => clicou(l)}>{l.toUpperCase()}</div>)}
        </div>
    )
}

function Chute() {
    return (
        <div className="input">
            <input type="text" placeholder="Chute a palavra certa" />
            <div className="enviar"><ion-icon name="send"></ion-icon></div>
        </div>
    )
}