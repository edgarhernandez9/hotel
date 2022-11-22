import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { isBrowser, isMobile } from 'react-device-detect';
import { ThackYou } from '../ThakYou/ThackYou';
import { ContendorWeb } from './ContendorWeb';

export const Rutas = () => {

    let tipoDispositivo = 'mobile';

    if (isBrowser) {
        tipoDispositivo = 'escritorio';
    }

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={ <ContendorWeb  dispositivo={ tipoDispositivo } />} />
                    <Route path='/thankYou' element={ <ThackYou dispositivo={ tipoDispositivo }  />} />
                </Routes>
            </Router>
        </div>
    )
}
