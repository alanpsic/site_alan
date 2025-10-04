
import ImageLogo from "../../images/logo.jpg"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./style.css"

export function Header()
{
    return(
        <div className="container">
            <div className="contatos">
                <div></div>
                <div>
                    <a href="https://www.instagram.com/alanduarte.souza/" target="_blank"><FaInstagramSquare className="icone-social" size={32}/></a>
                    <a href="https://www.facebook.com/alan.duarte.844885" target="_blank"><FaFacebookSquare className="icone-social"size={32}/></a>
                </div>
                
            </div>
            <div className="image-logo">
                <img  src={ImageLogo}alt="" width="350" height="350"/>
            </div>
            
        </div>
    )
}