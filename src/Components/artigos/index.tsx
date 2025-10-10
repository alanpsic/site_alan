

import style from "./style.module.css"
//import saudeImg from "../../images/Artigos/SaudImg.jpg"
import { Link } from "react-router-dom"
import { primeiroArtigo} from "../../pages/artigo"

export function Artigos()
{
    return(
        <div className={style.container}>
            <h1>Artigos em Destaque</h1>

            <div className={style.cardsContainer}>
                <div className={style.card}>
                
                    <img src={primeiroArtigo.imagem} alt="" />

                    <div className={style.cardContent}>
                        <h3>{ primeiroArtigo.tema }</h3>

                        <p>{ primeiroArtigo.texto_simplificado } </p>
                        <Link className={style.link} to="/artigo/tema_1"> Leia mais... </Link>
                    </div>
                </div>

                {/*<div className={style.card}>
                    
                    <img src={segundoArtigo.imagem} alt="" />

                    <div className={style.cardContent}>
                        <h3>{ segundoArtigo.tema }</h3>

                        <p>{ segundoArtigo.texto_simplificado }</p>
                        <Link className={style.link} to="/artigo/tema_2"> Leia mais... </Link>
                    </div>
                </div>*/}

                {/*<div className={style.card}>
                    
                    <img src={saudeImg} alt="" />

                    <div className={style.cardContent}>
                        <h3>{ terceiroArtigo.tema }</h3>

                        <p>{ terceiroArtigo.texto_simplificado }</p>
                        <Link className={style.link} to="/artigo/tema_3"> Leia mais... </Link>
                    </div>
                </div>*/}
            </div>
            

        </div>
    )
}