import React from 'react'
import "./Card1.css";
import Dental from "../../img/dental.png";

const Card1 = () => {
  return (

   
   <div className='top'>
  <h1> We Have The Best Specialist</h1>
  <p>We have a wide exprience in exprience design and strategy, <br/> <br/>
    with locally-rooted knowledge</p>
<div className='box'>
        <div className='card'>
        <img src={Dental} alt="Mountains" style={{ width: "100%" }} />
        <div className='text'>
            <h2> Amit Kumar</h2>
            <p> Teacher</p>
        </div>
        </div>
        <div className='card'>
        <img src={Dental} alt="Mountains" style={{ width: "100%" }} />
        <div className='text'>
            <h2> Amit Kumar</h2>
            <p> Teacher</p>
        </div>
        </div>
        <div className='card'>
        <img src={Dental} alt="Mountains" style={{ width: "100%" }} />
        <div className='text'>
            <h2> Amit Kumar</h2>
            <p> Teacher</p>

        </div>
        </div>
        <div className='card'>
        <img src={Dental} alt="Mountains" style={{ width: "100%" }} />
        <div className='text'>
           <h2> Amit Kumar</h2>
            <p> Teacher</p>
        </div>
        </div>
    </div>
   </div>
  )
}

export default Card1