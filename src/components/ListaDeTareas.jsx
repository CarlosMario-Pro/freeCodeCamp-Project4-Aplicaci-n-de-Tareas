import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../estilos/ListaDeTareas.css'

export default function ListaDeTareas (){

    const [tareas, setTareas] = useState ([]);

    const agregarTarea = tarea => {             //Función para agregar las tareas, cada tarea se va a representar como un objeto dentro del array
        if(tarea.texto){                         //Verificamos que la tarea no esté en blanco, por eso el if, el .trim() elimina espacios al principio y al final de lo escrito en el input
            const tareasActualizadas = [tarea, ...tareas];  //Necesitamos mostrar en pantalla todas las tareas, pendientes y completadas,para eso creamos un array que las contenga a todas, ponemos primero 'tarea' para que muestre en pantalla las nuevas que van entrando y '...tareas' para que se muestre todas las tareas que ya entraron y que se encuentran almacenadas en el estado, el operador spread (...tareas) toma el array del estado con todas las tareas y lo convierte en elementos individuales, para podersen mostrar individualmente en pantalla.
            setTareas(tareasActualizadas);       //Actualizamos el estado
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>       //El estado tareas se va a mapear, y por cada elemento del [], retornará un componente Tarea con las props de texto y completada
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}       //True o false si fue completada o no
                        />
                    )
                }
            </div>
        </>
    )
}