import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import "./App.css";
import { DARK_THEME, SAN_SERIF } from "./constants";
import Search from "./components/Search";
import Word from "./components/Word";
import Content from "./components/Content";
import { ResponseModel } from "./types";
import Footer from "./components/Footer";

function App() {
    const [theme, setTheme] = useState(DARK_THEME);
    const [data, setData] = useState<ResponseModel[]>([]);
    const [typography, setTypography] = useState(SAN_SERIF);

    return (
        <div className="container">
            <Header setTheme={setTheme} theme={theme} setTypography={setTypography} typography={typography} />
            <Search theme={theme} setData={setData} typography={typography} />
            <Word data={data} typography={typography} />
            <Content data={data} typography={typography} theme={theme} />
            <Footer typography={typography} word={data[0]?.word ?? ''} theme={theme} />
        </div>
    );
}

export default App;
