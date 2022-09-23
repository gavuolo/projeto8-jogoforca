import React, { useState } from "react";
import alfabeto from "./alfabeto";
import palavras from './palavras'

//imagens


export default function App() {
    return (
    <div>
        <h1>Jogo da forca</h1>
        <div className='topbar'>

            <div className="forca">
                <img src="./image/forca0.png" alt="" />
            </div>

            <div className="palavra">
                <button className='escolher'>Escolher palavra</button>
                <p>{palavras[1]}</p>
            </div>
        </div>
        
        <div className="bottom">
            {alfabeto.map((l) => <div key={l} className="botao" onClick={()=>console.log("OI")}>{l}</div>)}
        </div>
        <div className="input">
        <input type="text" placeholder="Chute a palavra certa" />
        <div className="enviar"><ion-icon name="send"></ion-icon></div>
        </div>
    </div>
    )
}

