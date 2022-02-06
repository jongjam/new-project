import logo from './nightmare.png';
import NameInput from './components/NameInput.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NameInput>
      </NameInput> 
      <header className="App-header">
        <img src={logo} className="Koichi-logo" alt="logo" />
        <a
          className="App-link"
          href="https://youtu.be/1BY9OMU8tXA?t=151"
          target="_blank"
          rel="noopener noreferrer"
        >
          Run for your life
        </a>
        <p className="App-text">
          "Koichi, you are a reliable guy." - Kujo Jotaro
        </p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      
    </div>
  );
}

export default App;
