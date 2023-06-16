import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Facts</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <body>
        <div className='main'>
        <h1>Fun facts about React</h1>
        
        <ol>
          <li>Was first created in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has over 100K stars on Facebook</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>

        </div>
        
        </body>
      
    </div>
  );
}

export default App;
