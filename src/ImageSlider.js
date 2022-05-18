import React, {useState} from 'react'
const ImageSlider=({images})=>{
  const  [slideIndex, setSlideIndex] =useState(1)
  return(
    <div>
      {images.map(image=>
        (
          <div className={image.id  === slideIndex ?  'slide active' : 'slide'}key={image.id}>
          {image.id === slideIndex && (<img src={image.src} />)}
          </div>
        )
        )}
    </div>
  )
}
export default Image