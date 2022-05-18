import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons' 


const ImageSlider=()=>{
  const  [slideIndex, setSlideIndex] =useState(1)
const images=[
  {src:"https://lvcas-ca.github.io/E-commerce-product-page/images/image-product-1.jpg",id:1}, 
  {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-2.jpg",id:2},
  {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-3.jpg",id:3},
  {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-4.jpg",id:4}

] 

const handleRight=()=>{
  
}
  return(
    <div className ="m-div--image">
        <div className="m-div--image-icons">
        <ul>
         <li>
           <FontAwesomeIcon icon={faAngleLeft} />
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleRight} onClick={handleRight}/>
       </li>
      </ul>    
    </div>


      {images.map((image) =>
        (
          <div className={slideIndex === image.id ?  'slide active' : 'slide'} key={image.id}>
          {slideIndex === image.id && (<img src={image.src} />)  }
                    </div>
        )
        )}
    </div>
  )
}
export default ImageSlider