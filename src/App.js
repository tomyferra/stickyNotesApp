import logoapp from './imagenes/Tatuaje.png'
import './App.css';

import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img
          src={logoapp}
          alt='Logo Tatuaje'
          className='logo-app'>
        </img>
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
