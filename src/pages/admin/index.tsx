import { useState } from "react";
import { type FormEvent} from "react";


import { TextEditor } from "../../Components/textEditor/TextEditor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ArtigoContent } from "../artigoContent";
import style from "./style.module.css"

export function Admin()
{
    const [content, setContent] = useState('');
    const [tema, setTema] = useState("");

    /*function handleSetTema(tema: string)
    {
        setTema(tema);
    }*/

    function handleSubmmit(e: FormEvent)
    {
        e.preventDefault();
    }

    return(
        <div className={style.container}>
            <h1 className={style.h1}>Criar Artigo</h1>

            <form className={style.form} action="" onSubmit={handleSubmmit}>
                <div className={style.inputTemaContainer}>
                    <label htmlFor="">Tema:</label>
                    <div><input className={style.inputTema} type="text" value={tema} onChange={(e)=>setTema( e.target.value)} placeholder="Digite o tema..."/></div>
                </div>
                <br />
                <div>
                    <TextEditor value={content} onChange={setContent}/>
                </div>
                <br />
                <div>
                    <input className={style.inputSubmmit} type="submit" value="Salvar"/>
                </div>
                
            </form>
            <br /><br />
            <div className={style.preview}>
                <h1 className={style.h2}>Preview</h1>
                <hr />
            </div>
            <ArtigoContent tema={tema} texto={<div dangerouslySetInnerHTML={{ __html: content }} />} imagem="asd" />
        </div>
    )
}