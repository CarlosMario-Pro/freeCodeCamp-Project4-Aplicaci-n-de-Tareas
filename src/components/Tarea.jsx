import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../estilos/Tarea.css'


export default function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {//completada es una props, asigno una clase codicional, si completada es true, asigno las clases tarea-contenedor y completada, si es false, solo tarea-contenedor. Adicional recibe un id y dos funciones, una para marcar una tarea como completada y otra para eliminar tareas
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className='tarea-texto'       
                onClick={() => completarTarea(id)}>     {/*Si se da click, se llama a esa función, la función debe recibir un valor, por qué cómo va a saber qué tarea deberá marcar como completasa, por eso ponemos*/}
                {/*Para saber que se debe marcar una tarea como completada, debo de recibir un id de la tarea en el array del estado*/}
                {texto}{/*Queremos marcar una tarea como completada sobre el div que contine el texto*/}
            </div>
            <div 
                className='tarea-contenedor-iconos'
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono'/>
            </div>
        </div>
    )
}