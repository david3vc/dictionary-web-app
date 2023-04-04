import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import iconoBook from "../assets/images/logo.svg";
import iconoMoon from "../assets/images/icon-moon.svg";
import iconArrowDown from "../assets/images/icon-arrow-down.svg";
import Checkbox from "./Checkbox";
import "../styles/header.css";

const Main = styled("div")`
    font-family: sans-serif;
    background: #f0f0f0;
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
    position: relative;
    right: 50px;
    cursor: pointer;
    width: 8.5em;
    padding: 1em;
    margin-top: 10px;
    box-sizing: border-box;
    &:first-child {
        padding-top: 0.8em;
    }
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 3px;
    &:hover {
        color: #a445ed;
    }
`;

const options = ["San Serif", "Serif", "Mono"];

interface baseProps {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
}

const Header = ({ setTheme, theme }: baseProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: string) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };
    return (
        <div className="container-header">
            <div className="container-header__logo">
                <img src={iconoBook} alt="" />
            </div>
            <div className="container-header__options">
                <div className="options__typography">
                    <DropDownContainer>
                        <DropDownHeader onClick={toggling} className={theme} >
                            <span>
                                {selectedOption || "San Serif"}
                            </span>
                            <img src={iconArrowDown} alt="" />
                        </DropDownHeader>
                        {isOpen && (
                            <DropDownListContainer>
                                <DropDownList>
                                    {options.map((option) => (
                                        <ListItem
                                            onClick={onOptionClicked(option)}
                                            key={Math.random()}
                                        >
                                            {option}
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
