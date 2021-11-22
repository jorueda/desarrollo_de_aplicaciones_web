import logo from './logo.svg';
import './App.css';
import Prueba from './components/Prueba';
import Saludo from './components/Saludar';

function App() {
  const buenas = 'Este es otro saludo';
  const props = {msg: 'Hola de nuevo!!'};

  return (
    <div className="App">
      <header className="App-header">
        <Saludo msg='Hola a todos' />
        <Saludo msg={buenas} />
        <Saludo {...props} />
        <img src={logo} className="App-logo" alt="logo" />
        <Prueba />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
