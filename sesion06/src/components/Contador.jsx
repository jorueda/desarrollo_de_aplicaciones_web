import React, { useEffect, useState } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Contador() {
    const [cuenta, setCuenta] = useState(0);

    // Luego de 2 segundos regresa la variable en 20.
    useEffect(() => {
        const esperar = setTimeout(() => {
            setCuenta(20);
        }, 2000);

        return () => clearTimeout(esperar);
    });

    return (
        <div className='mb-2 p-2'>
            <p>{cuenta}</p>
            <button onClick={()=> setCuenta(cuenta+1)}>+</button>
            <button onClick={()=> setCuenta(cuenta-1)}>-</button>
        </div>
    )
}