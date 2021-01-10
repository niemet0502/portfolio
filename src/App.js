import { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import Loader from "./component/Loader/Loader"
import styled from "styled-components"
import {DarkToggle} from "./component/ButtonToggle/DarkToggle"
import "react-toggle/style.css";
import $ from 'jquery';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
        
    var mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;

    var circle = {
      el:$('#circle'),
      x:window.innerWidth/2, y:window.innerHeight/2, w:100, h:100,
      update:function(){
        var l = this.x-this.w/2;
        var t = this.y-this.h/2;
        this.el.css({
          'transform':'translate3d('+l+'px, '+t+'px, 0)'
        });
      }
    }
    
    $(window).mousemove (function(e){
      mouseX = e.clientX;
      mouseY = e.clientY;
    })
    
    setInterval (move,1000/60)
    
    function move(){
      //circle.x += (mouseX - circle.x) * 0.1; // old style
      //circle.y += (mouseY - circle.y) * 0.1; // old style
      
      circle.x = lerp (circle.x, mouseX, 0.1);
      circle.y = lerp (circle.y, mouseY, 0.1);
      circle.update() 
    }
    
    function lerp (start, end, amt){
      return (1-amt)*start+amt*end
    }
  }, [])
  return (
    <>
      <div className="App TextCard">
        <DarkToggle />
        <h4>move the mouse</h4>
        <div id="circle"></div>
        <div style={{height: "1000px", width: "100%"}}>
          Marius

          <button style={{background: "red"}} onClick={() => console.log('marius')}>Click Me</button>
        </div>
      </div>
    </>
  );
}

export default App;
