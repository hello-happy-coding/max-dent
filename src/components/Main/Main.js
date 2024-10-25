import React from "react";
import './Main.css';
import images from '../../assets/images/main.jpg';
import star from '../../assets/images/star.svg';

function Main() {
    return(
        <body>
            <div>
                <img src={images} alt='img' className='img' />
                <p className='welcome'> <b>WITAJ W MAX DENT PRAKTYCE STOMATOLOGICZNEJ</b></p>
                <p className='text-welcom'> Witaj w miejscu, gdzie zdrowy uśmiech spotyka się z nowoczesną opieką medyczną! Zadbamy o Twoje zęby w przyjaznej i bezstresowej atmosferze. Postaw na zdrowie i komfort!</p>
                <img src={star} alt='star' className='star' />          
            </div>
            <div>
                <div className='aboutas'>Nasz gabinet stomatologiczny to miejsce, w którym pasja do zdrowego uśmiechu spotyka się z najnowocześniejszą technologią i troskliwą opieką nad pacjentem. Oferujemy szeroki zakres usług stomatologicznych, od profilaktyki i higieny jamy ustnej, przez leczenie zachowawcze, aż po zaawansowane zabiegi protetyczne, implantologiczne i ortodontyczne. Kładziemy duży nacisk na komfort pacjenta, dlatego każda wizyta odbywa się w przyjaznej bezstresowej atmosferze. Zdajemy sobie sprawę, że dla wielu osób wizyta u dentysty może być stresująca, dlatego dokładamy wszelkich starań, aby każdy czuł się u nas bezpiecznie i komfortowo. Nasze gabinety wyposażone są w nowoczesny sprzęt diagnostyczny i zabiegowy, co pozwala nam na precyzyjne planowane leczenia i jego skuteczne przeprowadzenia.
            </div>
            <img src={star} alt='star'className='star2' />
            </div>
        </body>
        
    )
}

export default Main;