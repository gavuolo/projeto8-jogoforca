import React, { useState } from "react";
import alfabeto from "./alfabeto";
import palavras from './palavras'

let arrayAleatorio = []


export default function App() {

    //começar o jogo
    const [isStart, setStart] = useState(false)
    function comecar() {
        setStart(!isStart)
    }

    //aleatorizar palavras + array
    const aleatorio = (palavras[Math.floor(Math.random() * palavras.length)])
    arrayAleatorio = aleatorio
    


    //estado de clicado da Letra
    const [clicado, setClicado] = useState([])
    function clicou(letraClicada) {
        setClicado([...clicado, letraClicada])
    }


    return (
        <div>
            <h1>Jogo da forca</h1>
            <div className='topbar'>
                <div className="forca">
                    <img src="./image/forca0.png" alt="" />
                </div>
                <div className="palavra">
                    {!isStart ? <button className='escolher' onClick={comecar}>Escolher palavra</button> : <button className='escolher'>Escolher palavra</button>}
                    {isStart ? <p>{arrayAleatorio}</p> : <p></p>}
                </div>
            </div>

            <div className="bottom">
                {alfabeto.map((l) => <div key={l} className={clicado.includes(l) ? "selecionado" : "botao"} onClick={() => clicou(l)}>{l.toUpperCase()}</div>)}
            </div>
            <div className="input">
                {isStart ? <input type="text" placeholder="Chute a palavra certa" /> : <input type="text" placeholder="Comece o jogo" desable /> }
                <div className="enviar"><ion-icon name="send"></ion-icon></div>
            </div>
        </div>
    )
}

