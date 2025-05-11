import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 px-3 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
        >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
};

export default ThemeToggle;
