import React from 'react'
import "./CardList.css";
import Dental from "../../img/dental.png";

const CardList = () => {
  return (
    <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">Create & inspire. It's Lama</h1>
      <p className="pl-desc">
        Lama is a creative portfolio that your work has been waiting for.
        Beautiful homes, stunning portfolio styles & a whole lot more awaits
        inside.
      </p>
    </div>
    {/* Portfolio Gallery Grid */}
<div className="row">
  <div className="column">
    <div className="content">
      <img src={Dental}  alt="Mountains" style={{width: '100%'}} />
      <h3>My Work</h3>
    </div>
  </div>
  <div className="column">
    <div className="content">
      <img src={Dental}   alt="Lights" style={{width: '100%'}} />
      <h3>My Work</h3>
    </div>
  </div>
  <div className="column">
    <div className="content">
      <img src={Dental}   alt="Nature" style={{width: '100%'}} />
      <h3>My Work</h3>
    </div>
  </div>
  <div className="column">
    <div className="content">
      <img src={Dental}   alt="Mountains" style={{width: '100%'}} />
      <h3>My Work</h3>
    </div>
  </div>
  {/* END GRID */}
</div>
{/* END MAIN */}


  </div>
  )
}

export default CardList