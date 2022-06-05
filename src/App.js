import React,{useState} from "react";
import "./style.css";

import Header from './Header'
import Main from './Main'
export default function App() {
  const [count, setCount ]=useState (0)
  const [isZero, setIsZero] =useState(true)

  return (
    <div>   
      <Header count={count} setCount={setCount } isZero={is} set/>
      <Main count={count}  setCount={setCount } isZero={isZero} setIsZero={setIsZero } />
    
    </div>
  );
}
