import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import "./App.css";
import { DARK_THEME } from "./constants";

function App() {
    const [theme, setTheme] = useState(DARK_THEME);

    return (
        <div>
            <Header setTheme={setTheme} theme={theme} />
        </div>
    );
}

export default App;
