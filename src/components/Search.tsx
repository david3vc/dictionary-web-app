import { useEffect, useState } from "react";
import iconoSearch from "../assets/images/icon-search.svg";
import "../styles/search.css";
import { INPUT_DARK_THEME, INPUT_LIGHT_THEME, LIGHT_THEME } from "../constants";

interface baseProps {
    theme: string;
}

const Search = ({ theme }: baseProps) => {
    const [themeInput, setThemeInput] = useState(INPUT_DARK_THEME);

    useEffect(() => {
        if (theme === LIGHT_THEME) setThemeInput(INPUT_DARK_THEME);
        else setThemeInput(INPUT_LIGHT_THEME);
    }, [theme]);

    return (
        <div className={`container-search ${themeInput}`}>
            <div className="container-search__input">
                <input type="text" className={`${themeInput}`} />
            </div>
            <div className="container-search__icon">
                <img src={iconoSearch} alt="" />
            </div>
        </div>
    );
};

export default Search;
