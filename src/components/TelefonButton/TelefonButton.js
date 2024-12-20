import React from "react";
import { useEffect, useState } from "react";


function TelefonButton () {
    const [BackToTop, setBackToTop] = useState(false);
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Clean up listener
    }, []);

    const scrollToSection = () => {
        const section = document.getElementById("umów się na wizytę");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="App">
            {BackToTop && (
                <button
                    style={{
                        position: "fixed",
                        bottom: "450px",
                        right: "0px",
                        height: "40px",
                        width: "110px",
                        backgroundColor: "black",
                        color: "white",
                        cursor: "pointer",
                        border: "none",
                    }}
                    onClick={scrollToSection}
                >
                    Kontakt
                </button>
            )}
        </div>
    );
}

export default TelefonButton;