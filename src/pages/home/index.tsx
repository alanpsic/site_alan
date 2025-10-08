import { Header } from "../../Components/header"
import { QuemSouEu } from "../../Components/sobre-mim"
import { Artigos } from "../../Components/artigos"
import { Footer } from "../../Components/footer"
import style from "./style.module.css"

import imgTerapia from "../../images/ImgTerapia.png"

export function Home()
{
    return(
        <div className={style.container}>
            <Header/>
            <QuemSouEu/>

            <div className={style.sobreTerapia}>
                <div>
                    
                    <img src={imgTerapia} alt=""  />
                </div>
                <div className={style.disertacao}>
                    <h1>Terapia Junguiana? O que é?</h1>
                    <hr />
                    <p>
                        A terapia junguiana é um processo de compreensão sobre o propósito e sentido da vida.
                        Uma abordagem criada pelo psciquiatra Carl Gustav Jung, discípulo de Freud, mas ele conseguiu
                        a sua própria linha. A terapia tem como foco o processo de individuação, que é o desenvolvimento
                        do ser humano em ruma a integração e o equilibrio entre o consciente e o inconsciente.
                        A terapia não trata somente sintomas mas busca compreender o propósito e sentido da vida.
                    </p>
                    <hr />
                </div>
                
            </div>

            <Artigos/>
            <Footer/>
        </div>
    )
}