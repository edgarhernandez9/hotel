import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from '../Nabvar/Navbar';
import { getDataLandig } from '../../store/reducer';

import '../../theme/ContenedorWeb.css';
import { Outlet } from '../Outlet/Outlet';
import { BodyHotel } from '../BodyHotel/BodyHotel';
import { PreFooter } from '../PreFooter/PreFooter';
import { PreFooterContact } from '../PreFooterContact/PreFooterContact';
import { Footer } from '../Footer/Footer';

export const ContendorWeb = (props) => {

  const { dispositivo } = props;
  const stateDatosNavBar = useSelector(state => state.datos);
  const dispatch = useDispatch();

  console.log(dispositivo);

  useEffect(() => {
      dispatch(getDataLandig())
  }, []);

  return (
    <div className={ dispositivo === 'escritorio' ? 'container mx-auto px-4 grid-cols-6 gap-4' : 'grid-cols-2'} >
        
        {
          stateDatosNavBar.isLoading ? <div>....loading</div>
          : <>
            <div className="sticky -top-0 col-start-4 col-span-2 ...">
              <Navbar stateDatosNavBar={stateDatosNavBar} dispositivo={dispositivo} />
            </div>
            <div className="col-start-4 col-span-2 ...">
                <Outlet stateDatosNavBar={stateDatosNavBar} />
                <BodyHotel stateDatosNavBar={stateDatosNavBar} />
                <PreFooter stateDatosNavBar={stateDatosNavBar} />
                <PreFooterContact stateDatosNavBar={stateDatosNavBar} />
                <Footer stateDatosNavBar={stateDatosNavBar} />
            </div>
          </>
        }
        
        
        
        
    </div>
    
  )
}
