import React, { useState } from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className='plansScreen'>
      <div className='plansScreen__plan'>
        <div className='plansScreen__info'>
          <h4>Premium </h4>
          <h5>4K HDR</h5>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='plansScreen__plan'>
        <div className='plansScreen__info'>
          <h4>Basic </h4>
          <h5>1080p</h5>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='plansScreen__plan'>
        <div className='plansScreen__info'>
          <h4>Standard </h4>
          <h5>720p</h5>
        </div>
        <button onClick={() => {}}>Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
