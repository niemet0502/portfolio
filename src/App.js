import { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import Loader from "./component/Loader/Loader"
import styled from "styled-components"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
    
  }, [])
  return (
    <>
        <div className="App">
          <div className="TextCard">
            Marius
          </div>
        </div>
    </>
  );
}

export default App;
