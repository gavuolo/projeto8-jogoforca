import palavras from './palavras'

//imagens
import forca from "./image/forca0.png"
import erro01 from "./image/forca1.png"

export default function App() {
    return (
    <div>
        <h1>Jogo da forca</h1>
        <div className='topbar'>

            <div className="forca">
                <img src={forca} alt="" />
            </div>

            <div className="palavra">
                <button className='escolher'>Escolher palavra</button>
                <p>{palavras[1]}</p>
            </div>
        </div>
    </div>
    )
}
