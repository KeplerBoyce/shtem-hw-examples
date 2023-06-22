import { useEffect, useState } from "react";
import ToggleButton from "./components/ToggleButton";

export default function App() {
    const [darkModeOn, setDarkModeOn] = useState(false);

    useEffect(() => {
        setDarkModeOn(localStorage.getItem("darkModeOn") === "true");
    }, []);

    const toggleMode = () => {
        setDarkModeOn(!darkModeOn);
        localStorage.setItem("darkModeOn", !darkModeOn);
    }

    return (
        <div className={"h-screen w-screen transition duration-200 " + (darkModeOn ? "bg-black text-white" : "bg-white text-black")}>
            <div className="container mx-auto flex flex-col items-center gap-4 pt-12">
                <h1 className="text-5xl font-bold pb-6">
                    This is a heading
                </h1>
                <p className="text-xl">
                    This is a paragraph of text
                </p>
                <p className="text-xl">
                    Press the button below to switch between light and dark mode!
                </p>
                <ToggleButton on={darkModeOn} callback={() => toggleMode()}>
                    Toggle dark mode
                </ToggleButton>
            </div>
        </div>
    )
}

