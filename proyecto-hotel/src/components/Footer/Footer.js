import React from 'react'

import '../../theme/Footer.css'
export const Footer = ({stateDatosNavBar}) => {

    const datos = stateDatosNavBar.english ?  
                stateDatosNavBar.datos.en : 
                stateDatosNavBar.datos.es
    return (
        <div className='footer'>
            <div className="flex" style={{color: 'white'}}>
                <div className="flex-none w-32">
                </div>
                <div className="flex-1 w-45 ...">
                    <p className='copy-footer'>{datos.footer.copy}</p>
                </div>
                <div className="flex-1 w-32 ..." style={{ display: 'flex', paddingLeft: '20%'}}>
                    {
                        datos.footer.links.map((value, index) => (
                            <div key={index} style={{ fontSize: '10px', marginRight: '10px'}}>
                                <p><a href={value.href}>{value.tittle}</a></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
