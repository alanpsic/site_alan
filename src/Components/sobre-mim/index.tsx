
import style from "./style.module.css"

import personaImg from '../../images/Foto de Alan.jpg'

export function QuemSouEu()
{
    return(
        <div className={style.container}>
            
            <hr />

            <div className={style.personaImg}>
                <img src={personaImg} alt=""/>
            </div>

            <div className={style.sobreMim}>
                <h1>Quem sou eu?</h1>
                <p>
                    Sou Alan Duarte, possuo formações sólidas em Pedagogia, Teologia, Psicanálise e Pscicoterapia Junguiana. Minha paixão é ajudar pessoas a entender melhor a si mesmas e ao mundo ao seu redor, explorando, símbolos, arquétipos e processos inconscientes que moldam nossas vidas. Acredito que cada indivíduo tem o poder de se transformar e se autorrealizar, e estou aqui para apoiá-lo nessa jornada.
                </p>
            </div>
            
            <hr />
        </div>
    )
}