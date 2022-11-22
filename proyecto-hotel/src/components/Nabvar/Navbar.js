import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cambioIdioma, getDataLandig } from '../../store/reducer';
import { DropDown } from '../Dropdown/DropDown';

export const Navbar = ({stateDatosNavBar, dispositivo}) => {

    const stateCambioIdioma = useSelector(state => state.datos);
    const dispatch = useDispatch();

    const btn = (valor) =>{
        if (!valor) {
            dispatch(cambioIdioma());
            window.location.assign(stateDatosNavBar.datos.es.navbar.menu.lang.href)
        }else{
            window.localStorage.removeItem('persist:idioma')
            window.location.assign(stateDatosNavBar.datos.en.navbar.menu.lang.href)
        }
    }

    const cambioIdiomas = stateDatosNavBar.english ? 
                    stateCambioIdioma.datos.en : 
                    stateDatosNavBar.datos.es

    return (
        <>
        {
            stateDatosNavBar.isLoading ? <div>....loading</div>
            : <nav 
                className={"flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3"}
                style={{ backgroundColor: 'rgb(237, 237, 237)', }}
            >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <div className="flex flex-wrap ">
                        <div className=" sm:w-6/12">
                            <a 
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" 
                                href="#">
                                <img 
                                    src={cambioIdiomas.navbar.logo} alt="..." 
                                    className=" max-w-full h-auto align-middle border-none"
                                    style={{ 
                                        height: '35px'
                                    }}
                                />
                            </a>
                            
                        </div>
                    </div>
                    
                    
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                <ul className="flex flex-col lg:flex-row list-none ml-auto">
                    <li className="nav-item">
                        <a 
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                            href="#">
                            {cambioIdiomas.navbar.menu.contact}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" 
                            // href={() => btn(stateCambioIdioma.english)}
                            onClick={() => btn(stateCambioIdioma.english)}
                        >
                            {cambioIdiomas.navbar.menu.lang.title}
                        </a>
                    </li>
                    <li className="nav-item">
                        <DropDown currency={ cambioIdiomas.navbar.menu.currency } />
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        }
        </>
        
    )
}
