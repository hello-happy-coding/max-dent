import React from "react";
import { useEffect, useState } from "react";


function BackToTop () {
    const [BackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',

        })
    }

    return <div className="App">
        {BackToTop && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontsize: "50px",
                borderRadius: "30px",
            }}
           onClick={scrollUp}
            >^</button>
        )}
    </div>
}
export default BackToTop;




