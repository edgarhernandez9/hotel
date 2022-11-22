import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDataLandig } from '../../store/reducer';

import '../../theme/BodyHotel.css';
import { Carroucel } from '../Corroucel/Carroucel';
import Modal from '../Modal/Modal';

export const BodyHotel = ({stateDatosNavBar}) => {

    const cambioIdioma = stateDatosNavBar.english ? 
                    stateDatosNavBar.datos.en : 
                    stateDatosNavBar.datos.es

    
    const [showModal, setShowModal] = React.useState(false);
    const [codigoReservacion, setCodigoReservacion] = useState();

    const btnModal = () => {
        setShowModal(true);
        let random = Math.random(3);
        random = random * 100 + 1;
        random = Math.trunc(random)
        setCodigoReservacion( 'HCA' +  random);
    }
    return (
        <div className='container-body'>
            {
                stateDatosNavBar.isLoading ? <div>....loading</div> 
                : <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-1 col-span-3 ..." style={{ }}>
                        
                        <div className='w-full'>
                            <Carroucel dataCarroucel={ cambioIdioma.carousel } />
                        </div>
                    </div>
                    <div className="col-start-4 col-end-8 ..." style={{ paddingBottom: '30px'}}>
                        <img src={ cambioIdioma.promotions[0].logoPromo} alt='' className='imgPromo' />
                        <div className='tituloBody'>
                            <h1 className="font-normal leading-normal mt-0 mb-2 discount tituloBody-hotel">
                                {cambioIdioma.promotions[0].title}
                            </h1>

                            <h1 className="font-normal leading-normal mt-0 mb-2 paragraphs tituoloBody-subtitle">
                                {cambioIdioma.promotions[0].Subtitle}
                            </h1>

                            <h1 className="font-normal leading-normal mt-0 mb-2 paragraphs tituoloBody-paragraps">
                                { cambioIdioma.promotions[0].paragraphs[0]}
                            </h1>
                        </div>
                        <div className='btnPromotions'>
                            <button 
                                className='btnPromotions-reserva'
                                onClick={() => btnModal()}
                            >
                                    { cambioIdioma.promotions[0].button.text}
                            </button>
                        </div>
                    </div>
                    {
                        <Modal showModal={ showModal } setShowModal={ setShowModal } codigoReservacion={codigoReservacion} />
                    }
                </div>
            }
        </div>
    )
}
