import React, { useState }from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../hojas-de-estilo/ListaDeTareas.css'

function ListaDeTareas () {

  const [ tareas, setTareas ] = useState([]);

  const agregarTarea = tarea =>{
    if (tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas]; /* Permite agreagar la tarea al ppio de la lista. */
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id===id) {
        tarea.completada= !tarea.completada;
      }
      return tarea;   
      });
    setTareas(tareasActualizadas);
  };

  return(
    <> 
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map( (tarea) => 
            <Tarea 
            texto={tarea.texto} 
            completada={tarea.completada} 
            key={tarea.id}
            id={tarea.id}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            />
          )
        }

      </div>
    </>
  );
}

export default ListaDeTareas;