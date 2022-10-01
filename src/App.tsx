import React, {useState} from 'react';

import {Home} from "./pages/Home";
import {ThemeSwitcher} from "./components/themeSwitcher/ThemeSwitcher";

function App() {
    const [theme, setTheme] = useState('')

    return (
        <div className={`${theme} min-h-screen transition bg-neutral-50 dark:bg-neutral-900`}>
            <Home/>
            <ThemeSwitcher theme={theme} setTheme={setTheme}/>
        </div>
    );
}

export default App;
