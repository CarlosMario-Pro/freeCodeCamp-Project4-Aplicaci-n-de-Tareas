import freeCodeCapmLogo from '../src/imagenes/FreeCodeCamp_logo2.png'
import ListaDeTareas from './components/ListaDeTareas';
import './App.css';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCapmLogo} className='freecodecamp-logo' />
      </div>
      
      <div className='tareas-lista-principal'>
        <h1>Mis tareas:</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
