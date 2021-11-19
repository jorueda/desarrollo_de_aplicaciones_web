import React, {useState} from 'react';

const Prueba = () => {
    const [name, setName] = useState('NATC');
    return <p>Hola {name}</p>
};

export default Prueba;