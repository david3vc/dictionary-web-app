import { DARK_THEME } from "../constants";
import iconoNewWindow from "../assets/images/icon-new-window.svg";
import "../styles/footer.css";

interface baseProps {
    typography: string;
    word: string;
    theme: string;
}

const Footer = ({ typography, word, theme }: baseProps) => {
    const enlace = `https://en.wiktionary.org/wiki/${word}`;
    return (
        <div className={`footer ${typography}`}>
            <div className="footer__line" />
            <span className="footer__source">Source</span>
            <div className="footer__link">
                <a
                    className={
                        theme === DARK_THEME ? "footer-dark" : "footer-white"
                    }
                    href={enlace}
                    target="_blank"
                >
                    {enlace}
                </a>
                <img
                    src={iconoNewWindow}
                    alt=""
                    className="footer__link__icono"
                />
            </div>
        </div>
    );
};

export default Footer;
