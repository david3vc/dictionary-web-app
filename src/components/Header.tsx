import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import iconoBook from "../assets/images/logo.svg";
import iconoMoon from "../assets/images/icon-moon.svg";
import iconArrowDown from "../assets/images/icon-arrow-down.svg";
import Checkbox from "./Checkbox";
import "../styles/header.css";
import {
    BOX_SHADOW_DARK_THEME,
    BOX_SHADOW_LIGHT_THEME,
    LIGHT_THEME,
    MONO,
    SAN_SERIF,
    SERIF,
} from "../constants";

const Main = styled("div")`
    font-family: sans-serif;
    height: 100vh;
`;

const DropDownContainer = styled("div")`
    width: 5.5em;
    margin: 0 auto;
`;

const DropDownHeader = styled("div")`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    cursor: pointer;
    width: 8.5em;
    padding: 1em;
    margin-top: 10px;
    box-sizing: border-box;
    &:first-child {
        padding-top: 0.8em;
    }
    border-radius: 15px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    position: absolute;
    /* left: 110px; */
    right: 150px;
    z-index: 3;
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 3px;
`;

const options = [
    { typography: "San Serif", codigo: SAN_SERIF },
    { typography: "Serif", codigo: SERIF },
    { typography: "Mono", codigo: MONO },
];

interface baseProps {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
    setTypography: React.Dispatch<React.SetStateAction<string>>;
    typography: string;
}

const Header = ({ setTheme, theme, setTypography, typography }: baseProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [themeBoxShadow, setThemeBoxShadow] = useState(BOX_SHADOW_DARK_THEME);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (typography: string, codigo: string) => () => {
        setSelectedOption(typography);
        setIsOpen(false);
        console.log(typography, selectedOption);
        setTypography(codigo);
    };

    useEffect(() => {
        if (theme === LIGHT_THEME) setThemeBoxShadow(BOX_SHADOW_DARK_THEME);
        else setThemeBoxShadow(BOX_SHADOW_LIGHT_THEME);
    }, [theme]);

    return (
        <div className="container-header">
            <div className="container-header__logo">
                <img src={iconoBook} alt="" />
            </div>
            <div className="container-header__options">
                <div className="options__typography">
                    <DropDownContainer className={theme}>
                        <DropDownHeader onClick={toggling} className={theme}>
                            <span>{selectedOption || "San Serif"}</span>
                            <img src={iconArrowDown} alt="" />
                        </DropDownHeader>
                        {isOpen && (
                            <DropDownListContainer className={theme}>
                                <DropDownList
                                    className={`${theme} ${themeBoxShadow}`}
                                >
                                    {options.map((option) => (
                                        <ListItem
                                            onClick={onOptionClicked(
                                                option.typography,
                                                option.codigo
                                            )}
                                            key={Math.random()}
                                        >
                                            {option.typography}
                                        </ListItem>
                                    ))}
                                </DropDownList>
                            </DropDownListContainer>
                        )}
                    </DropDownContainer>
                </div>
                <div className="options__icon-pipe">
                    <FontAwesomeIcon icon={faGripLinesVertical} />
                </div>
                <div className="options__swtich">
                    <Checkbox setTheme={setTheme} theme={theme} />
                </div>
                <div className="options__icono-moon">
                    <img src={iconoMoon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
