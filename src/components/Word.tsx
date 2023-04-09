import { Howl } from "howler";
import iconoSound from "../assets/images/icon-play.svg";
import "../styles/word.css";
import { ResponseModel } from "../types";

interface baseProps {
    data: ResponseModel[];
    typography: string;
}

const Word = ({ data, typography }: baseProps) => {
    const [res] = data;

    const audios = data.flatMap((item) => item.phonetics);

    const audio = audios.find((item) => item?.audio !== "");

    const play = () => {
        const sound = new Howl({
            src: audio?.audio ?? "",
        });

        sound.play();
    };

    return (
        <div className={`container-word ${typography}`}>
            <div className="container-word__term">
                <span className="container-word__term__child">{res?.word}</span>
                <span className="container-word__term__pronunciation">
                    {res?.phonetics?.[1]?.text}
                </span>
            </div>
            <div className="container-word__sound">
                <img src={iconoSound} alt="" onClick={() => play()}></img>
            </div>
        </div>
    );
};

export default Word;
