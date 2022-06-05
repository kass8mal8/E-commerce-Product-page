import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"

const Header =({count, setCount, isZero, setIsZero })=>{
  const avatar="https://aakashhelloworld.github.io/css2/images/avatar-shanai.png"

  const handleToggle=()=>{
    document.getElementById("toggle").classList.toggle("active")

  }
  const handleCartView=()=>{
     document.getElementById('view-cart').classList.toggle('visible')
     
  }
 const image="https://lvcas-ca.github.io/E-commerce-product-page/images/image-product-1.jpg"
  
 const price=count*125.00

  return(
    <div>
        
        <div className="h-div">
        <div className="h-div--cartview" id="view-cart">
          <div style={{borderBottom:"2px solid gray",margin:'auto -10px'}}>
          <h4>Cart</h4>
          </div>
          {count == 0 ? <div>
            <p>Your cart is empty </p>
          </div>:
          <div>
           <div >
            <img src={image} width="200" style={{position:'absolute',left:'10px',top:'32%',width:'100px',height:'100px'} } />
            <p style={{float:'right'}}>fall limited edition... <br/>{count} X 125.00 = {price} </p>
          </div>
          <button>check out </button>
          </div>} 
        </div>
        <FontAwesomeIcon icon={faBars} className="h-div--bars" onClick={handleToggle}></FontAwesomeIcon><h3>sneakers</h3>
        <div className="top-nav" id="toggle">
          <FontAwesomeIcon icon={faClose} className="top-nav--close" onClick={handleToggle}></FontAwesomeIcon>
        <ul className="top-nav--wrapper">
          <li>collections</li>
          <li>men</li>
          <li>women</li>
          <li>about</li>
          <li>contacts</li>

        </ul>
        </div>
        <FontAwesomeIcon icon={faCartShopping} className="h-div--cart" onClick={handleCartView}></FontAwesomeIcon>
        <img src={avatar} width="50px" alt="avatar"/>
        </div>
    </div>
  )
  

}
export default Header