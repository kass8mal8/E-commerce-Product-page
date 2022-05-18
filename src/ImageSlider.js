import React, {useState} from 'react'
const ImageSlider=()=>{
  const  [slideIndex, setSlideIndex] =useState(1)
const images=[
  {src:"https://lvcas-ca.github.io/E-commerce-product-page/images/image-product-1.jpg",id:1}, 
  {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-2.jpg",id:2},
  {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-3.jpg",id:3},
  {src:"https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/images/image-product-4.jpg",id:4}

] 
  return(
    <div>
      {images.map(image=>
        (
          <div className={slideIndex === index ?  'slide active' : 'slide'}key={index}>
          {slideIndex === index && (<img src={index+1} />)}
                    </div>
        )
        )}
    </div>
  )
}
export default Image