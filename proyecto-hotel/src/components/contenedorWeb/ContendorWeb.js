import React from 'react';
import '../../theme/ContenedorWeb.css';
import { Navbar } from '../Nabvar/Navbar';

export const ContendorWeb = () => {
  return (
    <div className='container mx-auto px-4 grid-cols-6 gap-4'>
        
        <div className="col-start-4 col-span-2 ...">
            <Navbar />
        </div>
    </div>
  )
}
