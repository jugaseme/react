import logo from './logo.svg';
import './App.css';
import  Component  from './componer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          holaa
        </p>
        <Component />
      </header>
    </div>
  );
}

export default App;
