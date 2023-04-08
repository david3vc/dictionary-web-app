import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import "./App.css";
import { DARK_THEME } from "./constants";
import Search from "./components/Search";
import Word from "./components/Word";
import Content from "./components/Content";
import { ResponseModel } from "./types";

function App() {
    const [theme, setTheme] = useState(DARK_THEME);
    const [data, setData] = useState<ResponseModel[]>([]);

    return (
        <div className="container">
            <Header setTheme={setTheme} theme={theme} />
            <Search theme={theme} setData={setData} />
            <Word data={data} />
            <Content data={data} />
        </div>
    );
}

export default App;
