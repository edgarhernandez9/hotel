import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getDataLandig } from '../../store/reducer';

import '../../theme/Outlet.css';

export const Outlet = ({stateDatosNavBar}) => {

    const cambioIdioma = stateDatosNavBar.english ? 
                    stateDatosNavBar.datos.en : 
                    stateDatosNavBar.datos.es

    return (
        <div className='outlet'>
            {
                stateDatosNavBar.isLoading ? <div>....loading</div>
                : <>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-start-1 col-end-7 ..." >
                            <h1 className="font-normal leading-normal mt-0 mb-2 headerH1">
                                {cambioIdioma.header.h1}
                            </h1>
                        </div>
                        <div className="col-span-2">
                        </div>
                        <div className="...">
                            <h1 className="font-normal leading-normal mt-0 mb-2 discount">
                                {cambioIdioma.header.discount}
                            </h1>
                        </div>
                        <div className="col-span-2 ... ">
                            <h1 className="font-normal leading-normal mt-0 mb-2 paragraphs">
                                {cambioIdioma.header.paragraphs}
                            </h1>
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}
