import { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import Loader from "./component/Loader/Loader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
    
  }, [])
  return (
    <>
    {loading === false ? (
        <div className="App">
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
          </header>
        </div>
         ) : (
          <Loader />
        )}
    </>
  );
}

export default App;
