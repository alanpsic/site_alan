

import style from "./style.module.css"
import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface ArtigoData
{
    tema: string;
    texto: ReactNode;
    imagem: string
}

export function ArtigoContent({tema, texto, imagem}: ArtigoData)
{

    const voltarText = "<<< Voltar";
    //testPush

    return(
        <div className={style.artigo}>
               
                <div className={style.artigoImgMovel}>
                    <img src={imagem} alt="" />
                </div>

               <div className={style.artigoTxt}>
                    <h1>{ tema }</h1>
                    <div className={style.text}>{texto}</div>
                    <div className={style.linkVoltar}><Link to="/">{voltarText}</Link></div>
               </div>
               
                <div className={style.artigoImg}>
                    <img src={imagem} alt="" />
                </div>
                
            </div>
    )
}