
import style from "./style.module.css"
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsappSquare } from "react-icons/fa";

export function Footer()
{
    return(
        <div>
            <footer className={style.footer}>
                <div className={style.contato}>
                    <BiLogoGmail size={32}/>
                    <span>alan.duarte.psic@gmail.com</span>
                </div>
                <div className={style.contato}>
                    <FaWhatsappSquare size={32}/>
                    <span>(84) 98835-6846</span>
                </div>
                <div className={style.direitos}>
                    <p>Todos os direitos reservados - 2025</p>
                </div>
            </footer>
        </div>
    )
}