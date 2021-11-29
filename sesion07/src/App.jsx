import React, { Fragment, useState, useRef, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import ListaTareas from "./componentes/ListaTareas";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function App() {
  // Se inicializa la lista con el hook para determinar cambio de estado
  const [Tareas, setTareas] = useState([{id:1, name:"Instalar Node", completed:false}])

  const taskRef =  useRef();

  useEffect(() => {
    localStorage.setItem("listApp.tasks", JSON.stringify(Tareas));
  },[Tareas]);

  useEffect(() => {
    const almacenadas = JSON.parse(localStorage.getItem("listApp.tasks"));
    if(almacenadas)
      setTareas(almacenadas);
  },[]);

  const cambiaTarea = (id) => {
    // Crea una copia de las tareas
    const copia = [...Tareas];
    // Ubica la tarea especificada por id
    const ubicar = copia.find((tarea)=> tarea.id === id);
    // Cambia el estado de la tarea
    ubicar.completed = !ubicar.completed;
    // Regresa la copia
    setTareas(copia);
  };

  const retirarTareas = () => {
    setTareas(Tareas.filter((tarea) => !tarea.completed));
  };

  const agregaTarea = () => {
    // Recupero el valor del control
    const tarea = taskRef.current.value;
    // Valido que contenga datos
    if (tarea=== "") return;

    setTareas((prevTareas) => {
      return[...prevTareas, {id:uuidv4(), name:tarea, completed:false}];
    });

    taskRef.current.value = null; // Blanqueo el campo
  };

  return (
    <Fragment>
      <div className="container-fluid mb-2 p-2 form-floating">
        <ListaTareas Tareas={Tareas} cambiaTarea={cambiaTarea} />
        <div className='row'>
          <div className="form-floating col-10">
            <input ref={taskRef} type='text' name='txttar' id='txttar' className='form-control' style={{width: '100%'}} />
            <label for='txttar'>Nueva tarea</label>
          </div>
          <div className='col'>
            <button onClick={agregaTarea} style={{width: '100%'}}>+</button>
          </div>
          <div className='col'>
            <button onClick={retirarTareas} style={{width: '100%'}}>-</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


