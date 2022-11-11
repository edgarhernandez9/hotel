
import { isBrowser, isMobile } from 'react-device-detect';
import './App.css'
import { ContendorWeb } from './components/contenedorWeb/ContendorWeb';

function App() {

  return (
    <div className="App">
      {
        isBrowser ? 
          <div>
            <ContendorWeb />
          </div> 
        : <div>hola movil</div>
      }
    </div>
  );
}

export default App;
