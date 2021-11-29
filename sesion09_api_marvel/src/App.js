// Datos para acceder a la API.
// endpoint (ruta) :: https://gateway.marvel.com:443/v1/public/characters
// Public Key  :: 4c7d320f4ca9a157a67c2aa34816370e
// Private Key :: 4fdbbc44632416047a80fb9b074b3e651606f60d
// ts          :: 21
// key         :: 214fdbbc44632416047a80fb9b074b3e651606f60d4c7d320f4ca9a157a67c2aa34816370e
// Hash        :: 385edc50f47e39570a52a8757e391025

import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() =>
    axios
      .get("https://gateway.marvel.com:443/v1/public/characters?ts=21&apikey=4c7d320f4ca9a157a67c2aa34816370e&hash=385edc50f47e39570a52a8757e391025")
      .then((res) => {
        setPersonajes(res.data.data.results);
        console.log(personajes);
      })
      .catch((error) => console.log(error)), [personajes]);

  return (
    <div className="App">
      <h1>PERSONAJES DEL MUNDO MARVEL</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {personajes.map((per) => (
          <div className='col mt-5' key={per.id}>
            <div  className='card align-items-center' 
                  style={{ width:'18rem', height:'18rem' }}>
                    <img  src = {`${per.thumbnail.path}.${per.thumbnail.extension}`}
                          className='card-img-top'
                          alt = ''
                          style = {{ width:'90%', height:'90%' }}
                    />
                    <div className='card-body'>
                      <h5><a href={per.resourceURI} target='_blank' rel='noreferrer'>{per.name}</a></h5>
                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
