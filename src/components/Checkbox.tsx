import { useEffect } from "react";
import "../styles/checkbox.css";
import { DARK_THEME, LIGHT_THEME } from "../constants";

interface baseProps {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
}

const Checkbox = ({ setTheme, theme }: baseProps) => {
    const toggleTheme = () => {
        if (theme === LIGHT_THEME) setTheme(DARK_THEME);
        else setTheme(LIGHT_THEME);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={toggleTheme}></span>
        </label>
    );
};

export default Checkbox;
