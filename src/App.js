import React,{useState} from "react";
import "./style.css";

import Header from './Header'
import Main from './Main'
export default function App() {
  const [count, setCount ]=useState (0)
  return (
    <div>   
      <Header count={count} setCount={setCount }/>
    
    </div>
  );
}
