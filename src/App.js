// logo.png is located in public/img/, reference it via absolute path so bundlers pick it from public
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <img src="/img/logo.png" className="App-logo" alt="logo" />
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