
import { useParams } from "react-router-dom"
import { useEffect, useState, type ReactNode } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

import primeiroArtigoImg from "../../images/Artigos/SaudeMentalDetail.png";
import segundoArtigoImg from "../../images/Artigos/CaminhadaImg.png";
import terceiroArtigoImg from "../../images/Artigos/SaudeMentalDetail.png";
import { ArtigoContent } from "../artigoContent";

interface ArtigoData
{
    tema: string;
    texto: ReactNode;
    texto_simplificado: string;
    imagem: string
}

export const  primeiroArtigo = {
    tema: "Saúde mental e psicoterapia junguiana",
    texto: 
    (
        <>
            <p>1. Conceito de Saúde Mental segundo Jung </p>

            <p>Na psicologia analítica de Carl Gustav Jung, saúde mental não é apenas a ausência de doença, mas sim um processo de individuação, ou seja, o desenvolvimento pleno da personalidade e integração dos diferentes aspectos do self.</p>
            <p><b>Individuação:</b> Processo de integração consciente e inconsciente, buscando equilíbrio entre o ego, o self e os arquétipos.</p>
            <p><b>Self:</b>Centro da psique que contém e regula todos os aspectos da personalidade.</p>
            <p><b>Sombra:</b>Parte inconsciente da psique que contém conteúdos reprimidos; sua integração é essencial para a saúde mental.</p>
            <p><b>Arquetípos:</b>Modelos universais presentes no inconsciente coletivo que influenciam comportamento, sonhos e sintomas psicológicos.</p>

            <br /><br />

            <p>2. Papel da Psicoterapia Junguiana na Saúde Mental</p>

            <p>A psicoterapia junguiana visa ajudar o indivíduo a: Integrar conteúdos inconscientes (sonhos, fantasias, emoções reprimidas).</p>
            <p>Desenvolver consciência do self e de sua autenticidade.</p>
            <p>Restaurar equilíbrio interno entre os opostos psíquicos (ex.: razão x emoção, anima x animus).</p>
            <p>Encontrar significado e propósito, promovendo bem-estar e resiliência emocional.</p>

            <br /><br />

            <p>3. Principais Técnicas e Ferramentas</p>

            <p>* 1. Análise de sonhos:</p>
            <p>Sonhos são mensagens do inconsciente.</p>
            <p>Interpretar símbolos e arquétipos revela conflitos internos e caminhos de crescimento.</p>
            <p>* 2. Atividade simbólica e imaginação ativa:</p>
            <p>Técnica para dialogar com conteúdos inconscientes.</p>
            <p>Ex.: imaginar conversas com figuras simbólicas do inconsciente para integração de aspectos reprimidos.</p>
            <p>* 3. Trabalho com mitos e arquétipos:</p>

        </>
    ),
    texto_simplificado: "A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios,",
    imagem: primeiroArtigoImg
};

export const segundoArtigo = {
    tema: "Caminha e Cêrebro",
    texto: ["Em meio à correria do dia a dia, a caminhada parece simples demais para ser poderosa. Mas é justamente nessa simplicidade que mora sua força. Cada passo ativa não apenas músculos, mas também circuitos cerebrais que influenciam nosso humor, memória e capacidade de concentração.", "o caminhar, o cérebro recebe uma dose natural de endorfinas, reduzindo o estresse e promovendo bem-estar. A circulação sanguínea aumenta, levando mais oxigênio às células cerebrais, o que favorece a clareza mental e a criatividade. Não é por acaso que grandes pensadores, como Nietzsche e Darwin, faziam longas caminhadas para estimular ideias.", "Mais do que exercício físico, caminhar é um ritual de reconexão. É quando o barulho externo se silencia e o cérebro encontra espaço para reorganizar pensamentos, processar emoções e até resolver problemas que pareciam insolúveis.", "Caminhar é gratuito, acessível e profundamente transformador. É o tipo de terapia que não exige divã — apenas disposição para sair e deixar o corpo guiar a mente."],
    texto_simplificado: "Em meio à correria do dia a dia, a caminhada parece simples demais para ser poderosa. Mas é justamente nessa simplicidade que mora sua força. Cada passo ativa não apenas músculos, mas também circuitos cerebrais que influenciam nosso humor, memória e capacidade de concentração.",
    imagem: segundoArtigoImg
};

export const terceiroArtigo = {
    tema: "Saude Mental",
    texto: ["A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios."],
    texto_simplificado: "A saúde mental é o alicerce silencioso da nossa existência. Ela não se resume à ausência de doenças, mas à capacidade de lidar com emoções, enfrentar desafios.",
    imagem: terceiroArtigoImg
}

export function Artigo()
{

    const { tema } = useParams();

    const [artigo, setArtigo] = useState<ArtigoData>();

    let current_texto = "";

    const novoTema = tema != undefined ? tema : "";

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

            <ArtigoContent tema={artigo? artigo?.tema : ""} texto={artigo? artigo.texto : ""} imagem={artigo? artigo.imagem : ""} />
            
        </div>
    )
}