import React from "react";
import './Main.css';
import images from '../../assets/images/main.jpg';
import foto1 from '../../assets/images/foto1.jpg';

function Main() {
    return(
        <body>
            <img src={images} alt='img' className='img' />
            <div>
                <p className='welcome'> <b>WITAJ W MAX DENT PRAKTYCE STOMATOLOGICZNEJ</b></p>
                <p className='text-welcom'> Witaj w miejscu, gdzie zdrowy uśmiech spotyka się z nowoczesną opieką medyczną! Zadbamy o Twoje zęby w przyjaznej i bezstresowej atmosferze. Postaw na zdrowie i komfort!</p>
            </div>
            <img src={foto1} alt='img' className='foto1' />
            <h1 className='First-visit'><b>PIERWSZA WIZYTA</b></h1>
            <div className='visit-text'>
                <div>Pierwsza wizyta to ważny krok w kierunku zdrowego uśmiechu, dlatego staramy się, aby każde pierwsze wrażenie było pozytywne i komfortowe</div>
                <div>Indywidualne podejście do pacjenta jest dla nas priorytetem - każda osoba odwiedzająca nasz gabinet może liczyć na pełne zrozumienie swoich potrzeb oraz dokładne omówienie proponowanego planu leczenia. Stawiamy na otwartą komunikację i współpracę, aby wspólnie zadbać o zdrowie i estetykę Twojego uśmiechu. </div>
                <div>Naszym celem jest nie tylko leczenie, ale również edukacja pacjentów o znaczeniu profilaktyki i zdrowych nawyków. Zależy nam na tym, abyś opuszczał nasz gabinet z poczuciem pewności, że jesteś w dobrych rękach. Zapraszamy do umówienia się na wizytę i dołączenia do grona naszych zdrowych pacjentów.</div>
            </div>
        </body>
        
    )
}

export default Main;