import React, { createRef, useRef, useState } from 'react'

import '../../theme/Corousekl.css'
export const Carroucel = (props) => {
    const { dataCarroucel } = props;

    const [currentImage, setCurrentImage] = useState(0);
    const slider = useRef();

    const refs = dataCarroucel.desktop.reduce((acc, val, i) => {
        acc[i] = createRef();
        return acc;
    }, {});

    const scrollToImage = i => {
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
    };
    const totalImages = dataCarroucel.desktop.length;
    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
          scrollToImage(0);
        } else {
          scrollToImage(currentImage + 1);
        }
    };
    const previousImage = () => {
        if (currentImage === 0) {
          scrollToImage(totalImages - 1);
        } else {
          scrollToImage(currentImage - 1);
        }
    };

    return (
        <div className='' style={{ width: '100%', height: '70%', marginLeft: '0px'}}>
            <div className='flex items-center ' style={{ width: '100%', height: '70%' }}>
                <div ref={slider} className= /*'snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start'*/ 'carousel'>
                    {dataCarroucel.desktop.map((value, i) => (
                        <div key={i} className='flex flex-shrink-0' style={{ marginLeft: '20px', height: '0%' }} ref={refs[i]}>
                            <img 
                                src={value.src} 
                                alt={value.alt} 
                                className=''
                                style={{ width: '100%', height: '60% !important' }}
                            />
                        </div>
                    ))}
                </div>
                <div style={{ position: 'relative', right: '30px' }}>
                    <button className=' mx-2' onClick={() => nextImage()}>
                        <svg 
                            className='w-10 h-10 text-white sm:w-6 sm:h-6 dark:text-gray-800' 
                            fillRule='none' stroke='currentColor' 
                            viewBox='0 0 24 24' 
                            xmlns='http://www.w3.org/2000/svg'>
                                <path  d='M9 5l7 7-7 7'></path>
                        </svg>
                    </button>
                    <button className=' mx-2' onClick={() => previousImage()}>
                        <svg 
                            className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' 
                            fillRule='none' stroke='currentColor' 
                            viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M15 19l-7-7 7-7'></path>
                        </svg>
                    </button>
                </div>
                
            </div>

        </div>
    )
}
