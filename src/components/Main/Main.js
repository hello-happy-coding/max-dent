import React from "react";
import './Main.css';
import images from '../../assets/images/main.jpg';
import foto1 from '../../assets/images/kids.jpg';
import Offer from '../Offer/Offer';

const OffersArray=[{name:'Inplanty'},{name:'Endodoncja'},{name:'Protetyka'}];

function Main() {
    return(
        <div className='main-box'>
             
            <div className='first-column'>
            <div>
                <p className='welcome'> <b>WITAJ W MAX DENT PRAKTYCE STOMATOLOGICZNEJ</b></p>
                <p className='text-welcom'> Witaj w miejscu, gdzie zdrowy uśmiech spotyka się z nowoczesną opieką medyczną! Zadbamy o Twoje zęby w przyjaznej i bezstresowej atmosferze. Postaw na zdrowie i komfort!</p>
            </div>
            <img src={foto1} alt='img' className='foto1' />
            <div className='service'><b>NASZE USŁUGI</b></div>
            <div className='appointment'>UMÓW SIĘ NA WIZYTĘ</div>
            </div>
            

            <div className='second-column'>
                <div className='image-container'>
            <img src={images} alt='img' className='foto2' /> 
            </div>
            <div className='mega-container'>
            <div className='first-visit'><b>PIERWSZA WIZYTA W NASZYM GABINECIE</b></div>
            <div className='container'>
                <div className='first-paragraf'>Pierwsza wizyta w gabinecie stomatologicznym może wydawać się stresująca, ale to doskonała okazja, by poznać jak dbać o zęby i zdrowie jamy ustnej. Najczęściej ma ona charakter zapoznawczy - to czas, by oswoić się z gabinetem, sprzętem oraz samym dętystą, szczególnie jeśli pacjentem jest dziecko.</div>
                <div className='second-paragraf'>Lekarz przeprowadzi krótką rozmowę, pytając o ogólny stan zdrowia i ewentualne dolegliwości. Następnie sprawdzi stan zębów, dziąseł oraz jamy ustnej, często za pomocą lusterka i specjalistycznych narzędzi. Jeśli będzie to konieczne może wykonać także zdjęcie rętgenowskie, by zobaczyć więcej niż to, co jest widoczne. </div>
                <div className='third-paragraf'>Po wstępnym badaniu dentysta najpierw udzieli wskazówek dotyczących codziennej higieny - doradzi, jak prawidłowo szczotkować zęby, jaką szczoteczkę i pastę wybrać, a także jak często wykonywać kontrole. To dobry moment, by zadać wszelkie pytania, które mogą się nasówać, dotyczące np. wpływu diety na stan uzębienia. Regularne wizyty to najlepszy sposób na zdrowe i mocne zęby przez całe życie.</div>
            </div>
            </div>
            <div id='container'>
                <div className='box' id='template'>
                    IMPLANTY
                </div>
            </div>
            {OffersArray.map((offer)=><Offer title={offer.name}/>)}
            </div>

        </div>
        
    )
}

export default Main;