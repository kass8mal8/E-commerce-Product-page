import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faAngleLeft, faAngleRight, faCartShopping, faPrevious} from '@fortawesome/free-solid-svg-icons' 
import {useState} from 'react'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

const Main=()=>{
  const image="https://lvcas-ca.github.io/E-commerce-product-page/images/image-product-1.jpg"

  const [count,setCount]=useState(0)
  return (
    <div className="m-div">
      <div className="m-div--image">
         <FontAwesomeIcon icon={faAngleLeft} /><img src={image} />
         <FontAwesomeIcon icon={faAngleRight} />
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
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
               </li>
               <li>
            {count} 
               </li>
               <li>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
               </li>
             </ul>
          </div>
          <button><FontAwesomeIcon icon={faCartShopping} className="m-div-i"></FontAwesomeIcon>add to cart</button>
      </div>
    </div>
  )
}
export default Main