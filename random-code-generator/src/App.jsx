import { useState } from "react";
import './App.css';

export default function app(){
  const [quote , setQuote] = useState("Click the Button for Wisdom!");
  const [bgcolor , setBgColor] = useState("pink");
  const [borderColor , setBorderColor] = useState("black");
  const quotes = [
    "Code is poetry.",
    "Keep it simple, stupid.",
    "React > Angular.",
    "Vite is lightning fast! ⚡",
    "The best way to predict the future is to invent it.",
    "Simplicity is the ultimate sophistication."
  ]

  const generateQuote = () =>{
    const randomIndex = Math.floor(Math.random()*quotes.length);
     setQuote(quotes[randomIndex]);
 
    const hue = Math.floor(Math.random() * 360);
     setBgColor(`hsl(${hue} , 80% , 90%)`);

     const bordColor = Math.floor(Math.random() * 360);
     setBorderColor(`hsl(${bordColor}, 80%, 30%)`); 
 };

 return (
  <div className="app-container" style={{background:bgcolor}}>
     <h1 className="main-heading" style={{fontFamily:"cursive"}}>Random Quote Generator</h1>
     <div className="quote-card" style={{ border: `2px solid ${borderColor}` }}>
     
      <h1 className="quote-text">"{quote}"</h1>
      <button className="inspire-btn" onClick={generateQuote}>
        Inspire me ✨
      </button>
     </div>
     <p className="footer">
      Click the button for more wisdom!
     </p>
  </div>
 );
}



