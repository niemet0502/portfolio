import { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import Loader from "./component/Loader/Loader"
import styled from "styled-components"
import {DarkToggle} from "./component/ButtonToggle/DarkToggle"
import "react-toggle/style.css";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
        
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = window.innerWidth/2;
    var y = window.innerHeight/2;
    var ballX = x;
    var ballY = y;
    resize();

    function drawBall() {
      ctx.beginPath();
      // instead of updating the ball position to the mouse position we will lerp 10% of the distance between the balls current position and the mouse position.
      ballX += (x - ballX)*0.1;
      ballY += (y - ballY)*0.1;
      ctx.arc(ballX, ballY, 40, 0, 2*Math.PI);
      ctx.fillStyle = '#9e356a';
      ctx.fill();
    }

    function loop() {
      ctx.clearRect(0, 0, width, height);
      drawBall();
      requestAnimationFrame(loop);
    }

    loop();

    function touch(e) {
      x = e.originalEvent.touches[0].pageX;
      y = e.originalEvent.touches[0].pageY;
    }

    function mousemove(e) {
      x = e.pageX;
      y = e.pageY;
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('touchstart', touch);
    window.addEventListener('touchmove', touch);
    window.addEventListener('mousemove', mousemove);
  }, [])
  return (
    <>
      <div className="App">
      
        <canvas id="canvas"></canvas>
        <DarkToggle />
        <div className="TextCard">
          Marius
        </div>
        <h1>Follow the mouse - with lerp</h1>
      </div>
    </>
  );
}

export default App;
