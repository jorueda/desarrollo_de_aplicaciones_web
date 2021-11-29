import React from 'react';
import { TareaItem } from './TareaItem';

const ListaTareas = ({Tareas, cambiaTarea }) => {
    return (
        <ul>
            {Tareas.map((tarea) => (
                <TareaItem key={tarea.id} Tarea={tarea} cambiaTarea={cambiaTarea} />
            ))}
        </ul>
    );
};

export default ListaTareas;