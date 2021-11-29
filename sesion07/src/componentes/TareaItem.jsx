import React from "react";

export function TareaItem({ Tarea, cambiaTarea }) {
    const {id, name, completed} = Tarea;

    const handleCambiaTarea = () => {
        cambiaTarea(id);
    }
    
    return (
        <li>
            <input type='checkbox' checked={completed} value={id} onChange={handleCambiaTarea} />{name}
        </li>
    );
}