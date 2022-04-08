import "./click.css"
import React, { useState, useEffect } from "react";

const Click = (props) => {

  useEffect(() => {
    document.querySelectorAll('.selectorClick').forEach( btn => {
      btn.addEventListener('click', (e) => {
        props.selectorClick(e)
      })
    })
  }, [])

  return (
    <div className="boxClick BoxClick" style={{left: props.positionX, top: props.positionY}}>
      <div className="selectorClick BoxClick" data-id="1">
        <img
          className="clickImg BoxClick"
          data-id="1"
          src="https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/jakes.png?alt=media&token=1ce33c38-40ba-416e-99f0-3870d8962699"
        /><span className="clickName BoxClick" data-id="1" style={{color: props.color1}}>Jake</span>
      </div>
      <div className="selectorClick BoxClick" data-id="2">
        <img
          className="clickImg BoxClick"
          data-id="2"
          src="https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/leg.png?alt=media&token=11e2e403-dc36-48ed-8ec5-f5e20b9bdee2"
        /><span className="clickName BoxClick" data-id="2" style={{color: props.color2}}>Leg</span>
      </div>
      <div className="selectorClick BoxClick" data-id="3">
        <img
          className="clickImg BoxClick"
          data-id="3"
          src="https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/aliens.png?alt=media&token=e58d5f3f-367e-4ee6-aa82-76781b7cc47f"
        /><span className="clickName BoxClick" data-id="3" style={{color: props.color3}}>Alien</span>
      </div>
    </div>
  )
}

export default Click