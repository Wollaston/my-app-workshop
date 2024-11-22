import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <Test />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <h1 className="green-500 text-3xl font-bold">Hello World!</h1>
        <h1 className='slate-500'>Test</h1>
      </header>
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  );
}

export default App;
