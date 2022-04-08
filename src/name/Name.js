import "./Name.css"
import React, { useState, useEffect } from "react";

const Name = (props) => {

  return(
    <div className="nameBody" style={{display: props.display}}>
      <div className="nameBox">
        <form id="nameForm">
          <div className="nameTitle" style={{fontFamily : 'Ubuntu'}}>REGRISTRA TU NOMBRE<br/><span style={{fontFamily: 'clock', letterSpacing: 3}}>{props.time}</span></div>
          <input id="nameInput" autoComplete="off" />
          <button className="nameBtn" type="button" onClick={props.submit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Name