import iconoSound from "../assets/images/icon-play.svg";
import "../styles/word.css";

const Word = () => {
  return (
    <div className="container-word">
        <div className="container-word__term">
            <span className="container-word__term__child">
                Keyboard
            </span>
            <span className="container-word__term__pronunciation">
                /ˈkiː.bɔːd/
            </span>
        </div>
        <div className="container-word__sound">
            <img src={iconoSound} alt="" />
        </div>
    </div>
  )
}

export default Word