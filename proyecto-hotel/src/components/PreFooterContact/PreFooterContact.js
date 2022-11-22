import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataLandig } from '../../store/reducer';
import { List } from '../List/List';

import '../../theme/PreFooterContact.css';

export const PreFooterContact = ({stateDatosNavBar}) => {
    
    const cambioIdioma = stateDatosNavBar.english ? 
                stateDatosNavBar.datos.en :
                stateDatosNavBar.datos.es
    return (
        <>
            {
                stateDatosNavBar.isLoading ? <div>....loading</div>
                : <div className='prefooterContact'>
                    <div className="flex">
                        <div className="flex-none w-32">
                            
                        </div>
                        <div className="flex-1 w-45 ...">
                            <div className='contactInfo'>
                                <p> { cambioIdioma.prefooter.contactCenter.title } </p>
                                <p> { cambioIdioma.prefooter.contactCenter.email } </p>
                            </div>
                        </div>
                        <div className="flex-1 w-32 ..." style={{ display: 'flex', color: 'white', marginLeft: '50%'}}>
                            <p>{ cambioIdioma.prefooter.social.facebookUrl}</p>
                            <p style={{marginLeft: '10px'}}>{cambioIdioma.prefooter.social.instagramUrl}</p>
                            <p style={{marginLeft: '10px'}}>{cambioIdioma.prefooter.social.twitterUrl}</p>
                        </div>
                    </div>
                    <div className="flex" style={{ marginTop: '30px'}}>
                        <div className="flex-none w-32">
                            
                        </div>
                        <div className="flex-1 w-60 ...">
                            <div className='contactInfoTel' key={'1'}>
                                {
                                    cambioIdioma.prefooter.numbers.map((value, index) => (
                                        (value.main && value.number )? <div key={index} style={{ marginRight: '30px'}}>
                                            <p > { value.name } </p>
                                            <p > <a href={value.href} >{ value.number }</a> </p>
                                        </div> 
                                        : 
                                        <></>
                                    ))
                                }
                                <List data={ cambioIdioma.prefooter.numbers } english={ stateDatosNavBar.english } />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}
