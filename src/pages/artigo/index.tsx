
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

import primeiroArtigoImg from "../../images/Artigos/SaudeMentalDetail.png";

interface ArtigoData
{
    tema: string;
    texto: string[];
    texto_simplificado: string;
    imagem: string
}

export const  primeiroArtigo = {
    tema: "Saúde Mental",
    texto: ["A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios,"],
    texto_simplificado: "A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios,",
    imagem: primeiroArtigoImg
};

export const segundoArtigo = {
    tema: "Caminha e Cêrebro",
    texto: ["Em meio à correria do dia a dia, a caminhada parece simples demais para ser poderosa. Mas é justamente nessa simplicidade que mora sua força. Cada passo ativa não apenas músculos, mas também circuitos cerebrais que influenciam nosso humor, memória e capacidade de concentração.", "o caminhar, o cérebro recebe uma dose natural de endorfinas, reduzindo o estresse e promovendo bem-estar. A circulação sanguínea aumenta, levando mais oxigênio às células cerebrais, o que favorece a clareza mental e a criatividade. Não é por acaso que grandes pensadores, como Nietzsche e Darwin, faziam longas caminhadas para estimular ideias.", "Mais do que exercício físico, caminhar é um ritual de reconexão. É quando o barulho externo se silencia e o cérebro encontra espaço para reorganizar pensamentos, processar emoções e até resolver problemas que pareciam insolúveis.", "Caminhar é gratuito, acessível e profundamente transformador. É o tipo de terapia que não exige divã — apenas disposição para sair e deixar o corpo guiar a mente."],
    texto_simplificado: "Em meio à correria do dia a dia, a caminhada parece simples demais para ser poderosa. Mas é justamente nessa simplicidade que mora sua força. Cada passo ativa não apenas músculos, mas também circuitos cerebrais que influenciam nosso humor, memória e capacidade de concentração.",
    imagem: primeiroArtigoImg
};

export const terceiroArtigo = {
    tema: "Saude Mental",
    texto: ["A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios."],
    texto_simplificado: "A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios.",
    imagem: primeiroArtigoImg
}

export function Artigo()
{

    const { tema } = useParams();

    const [artigo, setArtigo] = useState<ArtigoData>();

    let current_texto = "";

    const novoTema = tema != undefined ? tema : "";

    const voltarText = "<<< Voltar";

    useEffect(()=>{
        handleCheckTema(novoTema);
    },[])

    function handleCheckTema(tema: string)
    {
        
        if(tema == "tema_1"){
            setArtigo(primeiroArtigo);
        }
        else if(tema == "tema_2"){
            setArtigo(segundoArtigo);
        }
        else if(tema == "tema_3"){
            setArtigo(terceiroArtigo);
        }
        console.log(current_texto);
    }

    return (
        <div>
            <div className={style.head}><Link className={style.artigoLink} to="/">Home</Link></div>
            <div className={style.artigo}>
               
                <div className={style.artigoImgMovel}>
                    <img src={artigo?.imagem} alt="" />
                </div>

               <div className={style.artigoTxt}>
                    <h1>{ artigo ? artigo.tema : ""}</h1>
                    { artigo && artigo.texto.map((item, index)=>(
                        <p key={index}>{item}</p>
                    ))} 
                    <div className={style.linkVoltar}><Link to="/">{voltarText}</Link></div>
               </div>
               
                <div className={style.artigoImg}>
                    <img src={artigo?.imagem} alt="" />
                </div>
                

                
            </div>
            
        </div>
    )
}