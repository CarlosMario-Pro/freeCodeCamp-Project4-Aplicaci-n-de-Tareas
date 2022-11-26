import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid'
import '../estilos/TareaFormulario.css'

export default function TareaFormulario (props) {

    const [input, setInput] = useState(''); //Estado

    const manejarCambio = e => {            //Función para actualizar el estado
        setInput(e.target.value);           //Tomo lo digitado en el input
        console.log(e.target.value);
    };

    const manejarEnvio = e => {             //Esta funcion se ejecutará cuando se haga click sobre el botón para enviar el formulario, su argumento 'e' será el evento
        e.preventDefault();                 //El envío del formulario por defecto, hace que se cargue toda la página, el preventDefault() previene que los efectos por defecto de algo, se bloqueen
        //console.log('Enviando formulario')
        const tareaNueva = {
            id:  uuidv4(),
            texto: input,                   //El input aquí hace referencia al estado
            completada: false               //Se setea inicialmente en false, pero cuando se complete, cambiará en estado este valor
        }
        //console.log(tareaNueva);
        props.onSubmit(tareaNueva);         //Esta props.onSubmit nos la pasa el componente ListaDeTareas, esto permitirá actualizar el estado 'tareas' de ese componente. El poner onSubmit es un estandar para indicar a los demás programadores que se va a enviar un formulario
    };  

    return (
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}>         {/*El evento en el form se llama onSubmit */}
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}    /*El evento en el input se llama onSubmit */
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}