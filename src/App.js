import logo from './logo.svg';
import './App.css';
import './components/NavBar.js'
import { NavBar } from './components/NavBar.js';

function App() {
  return (
  
    <div className="App">
        <NavBar/>
        
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tienda Cesar Lancheros
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
