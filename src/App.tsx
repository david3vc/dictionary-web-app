import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import "./App.css";
import { DARK_THEME } from "./constants";
import Search from "./components/Search";

function App() {
    const [theme, setTheme] = useState(DARK_THEME);

    return (
        <div>
            <Header setTheme={setTheme} theme={theme} />
            <Search theme={theme} />
        </div>
    );
}

export default App;
