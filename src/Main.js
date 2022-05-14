import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faAngleLeft, faAngleRight, faCartShopping, faPrevious} from '@fortawesome/free-solid-svg-icons' 
import {useState} from 'react'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

const Main=()=>{
  const image="https://lvcas-ca.github.io/E-commerce-product-page/images/image-product-1.jpg"

  const [count,setCount]=useState(0)
  const handleAdd=()=>{
       setCount(count+1)
  }
  const handleMinus=()=>{
      if(count==0){
        return false
      }
      else{
            setCount(count-1)
      }
  }
  const images=[
    {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-2.jpg",alt:"product 2"}, 
    {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-3.jpg",alt:"product 3"},
    {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-4.jpg",alt:"product 4"}
  ]
  return(
    <div className="m-div">
      {images.map(image=>(
        <img src={image.src} width="240"/>
      ))}
      <div className="m-div--image">
       
        <div className="m-div--image-icons">
        <ul>
          <li>
         <FontAwesomeIcon icon={faAngleLeft} />
         </li>
         <li>
        <FontAwesomeIcon icon={faAngleRight} />
        </li>
        </ul>
       <img src={image} />

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
                <FontAwesomeIcon icon={faPlus}onClick={handleAdd}></FontAwesomeIcon>
               </li>
             </ul>
          </div>
          <button><FontAwesomeIcon icon={faCartShopping} className="m-div-i"></FontAwesomeIcon>add to cart</button>
      </div>
    </div>
  )
}
export default Main