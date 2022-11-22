import React from 'react';

import '../../theme/Prefooter.css';
export const PreFooter = () => {
    return (
        <div className='prefooter'>
            <div className='grid grid-cols-6 gap-4' >
                <div className='col-start-1 col-end-6 ...' >
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter'>
                        10 % de descuento en tarifas vigentes de Hotel Xcaret Arte. 
                    </h1>
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter2'>
                        Los descuentos de compra anticipada pueden variar dependiendo de la fecha de reserva y la fecha de estadía. 
                    </h1>
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter2'>
                        Periodo para reservar: Del 02 al 16 de mayo de 2022. Periodo para viajar: del 12 de julio al 16 de agosto del 2022. 
                    </h1>
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter2'>
                        Sujeto a disponibilidad. 
                    </h1>
                </div>

                <div className='col-start-1 col-end-6 ...' >
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter'>
                        Políticas de cancelación:
                    </h1>
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter2'>
                        Cambios y cancelaciones de acuerdo a políticas establecidas antes de las 15:00 hrs hora local del día de llegada.  
                    </h1>
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter2'>
                        Penalidad: 100% de la estancia
                    </h1>
                </div>
                <div className='col-start-1 col-end-6 ...' >
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter'>
                        Restricciones:
                    </h1>
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter2'>
                        No aplica con otras promociones.  
                    </h1>
                    <h1 className='font-normal leading-normal mt-0 descripcionPrefooter2'>
                        Tarifa sujeta a cambios sin previo aviso. 
                    </h1>
                </div>
            </div>
        </div>
    )
}
