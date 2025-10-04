

import style from "./style.module.css"
import saudeImg from "../../images/Artigos/SaudImg.jpg"
import { Link } from "react-router-dom"

export function Artigos()
{
    return(
        <div className={style.container}>
            <h1>Artigos em Destaque</h1>

            <div className={style.cardsContainer}>
                <div className={style.card}>
                
                    <img src={saudeImg} alt="" />

                    <div className={style.cardContent}>
                        <h3>Saude Mental</h3>

                        <p>A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios, </p>
                        <Link className={style.link} to=""> Leia mais... </Link>
                    </div>
                </div>

                <div className={style.card}>
                    
                    <img src={saudeImg} alt="" />

                    <div className={style.cardContent}>
                        <h3>Saude Mental</h3>

                        <p>A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios, cultivar relações saudáveis e encontrar sentido na vida. Em um mundo acelerado, cuidar da mente é tão essencial quanto cuidar do corpo.</p>
                        <Link className={style.link} to=""> Leia mais... </Link>
                    </div>
                </div>

                <div className={style.card}>
                    
                    <img src={saudeImg} alt="" />

                    <div className={style.cardContent}>
                        <h3>Saude Mental</h3>

                        <p>A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios.</p>
                        <Link className={style.link} to=""> Leia mais... </Link>
                    </div>
                </div>'
            </div>
            

        </div>
    )
}