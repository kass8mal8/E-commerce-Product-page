import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCartShopping} from '@fortawesome/free-solid-svg-icons' 
import {useState} from 'react'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import ImageSlider from './ImageSlider'

const Main=({count,setCount })=>{

  
  const handleMinus=()=>{
      if(count==0){
        return false
      }
      else{
        setCount(count-1)
      } 
  } 
  const handleSlider=(e)=>{
    document.getElementById("slideImage").src=e
  }
  



  return(
    <div className="m-div">
      <small>{count} </small>
      <div className="m-div--image">
        <ImageSlider count={count} />
        <div className="slider">
          <div id="slider-wrapper">
    
        </div>
      </div>
      </div>
      <div className="m-div--cont">
          <h2>sneakers company</h2>
          <h3>
            Fall Limited Edition Sneakers
          </h3>
          <p>
            These low-profile sneakers are your perfect casual wear companion featuring a durable rubber outer sole, they'll withstand everything the weather can offer. 
          </p>
          <div className="m-div--list">
          <ul>
             <li>$125.00</li>
             <li>50%</li>
             <li>$250.00</li>
          </ul>
          </div>
          <div className="m-div--mod">
            <ul>
              <li>
                <FontAwesomeIcon icon={faMinus}onClick={handleMinus}></FontAwesomeIcon>
               </li>
               <li>
            {count} 
               </li>
               <li>
                <FontAwesomeIcon icon={faPlus}onClick={() =>setCount(count+1) }></FontAwesomeIcon>
               </li>
             </ul>
          </div>
          <button><FontAwesomeIcon icon={faCartShopping} className="m-div-i"></FontAwesomeIcon >add to cart</button>
      </div>
    </div>
  )
}
export default Main