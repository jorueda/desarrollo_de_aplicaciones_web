import React, { useState } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Contador() {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div className='mb-2 p-2'>
            <p>{cuenta}</p>
            <button onClick={()=> setCuenta(cuenta+1)}>+</button>
            <button onClick={()=> setCuenta(cuenta-1)}>-</button>
        </div>
    )
}