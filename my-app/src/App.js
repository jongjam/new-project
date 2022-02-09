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
      <div className="Okuyasu-section">
      
        <img src={okuyasu} className="Okuyasu-logo" alt="okuyasu" />
        <a className="Okuyasu-link"
         href="https://www.youtube.com/watch?v=8C0-PPFpvfQ">
          Oi Koichi
        </a>
        <p className="Okuyasu-text">
          "I'm not that smart, okay? I just do what my heart tells me to do." - Okuyasu Nijimura
        </p>
      </div>
    </div>
  );
}

export default App;
