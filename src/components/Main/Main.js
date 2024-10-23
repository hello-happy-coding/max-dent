import React from "react";
import './Main.css';
import images from '../../assets/images/main.jpg';

function Main() {
    return(
        <body>
            <img src={images} alt='img' className='img' />
        </body>
        
    )
}

export default Main;