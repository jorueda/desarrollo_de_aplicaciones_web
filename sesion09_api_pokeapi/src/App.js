import React from 'react';

import PaginationHelper from './componentes/PaginationHelper';
import PokemonList from './componentes/PokemonList';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <PaginationHelper listProvider={PokemonList} />
      </div>
    </div>
  );
}
