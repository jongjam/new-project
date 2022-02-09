import koichi from './nightmare.png';
import okuyasu from './okuyasu.gif';
import NameInput from './components/NameInput.js'
import './App.css';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <NameInput>
      </NameInput> 
        <img src={koichi} className="Koichi-logo" alt="koichi" />
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
        
      </header>
      {/* /**TODO : ADD VIDEO AND QUOTE. SEARCH FUNCTIONALITY NEXT**/}
      <div className="okuyasu-section">
        <img src={okuyasu} className="Okuyasu-logo" alt="okuyasu" />
      </div>
     
    </div>
  );
}

export default App;
