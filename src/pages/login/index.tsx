
import style from "./style.module.css"

export function Login()
{
    return(
        <div className={style.container}>
            <form action="">
                <label className={style.label} htmlFor="">Email:</label>
                <input className={style.input} type="email" placeholder="Digite seu email..."/>

                <label className={style.label} htmlFor="">Senha:</label>
                <input className={style.input} type="password" placeholder="Digite sua senha"/>

                <button className={style.button}>Entrar</button>
            </form>
        </div>
    )
}