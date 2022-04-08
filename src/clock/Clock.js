import "./Clock.css"
import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState({min: 0, seg: 0})

  useEffect(() => {

    let interval
    if(isActive === false){
      interval = setInterval(() => {
        setTime(() => {
          return {
            min: time.min,
            seg: time.seg + 1
          }
        })
      }, 1000)
    }
    if(time.seg >= 60){
      setTime(()=> {
        return{
          min: time.min + 1,
          seg: 0
        }
      })
    }
    

    return () => {
      clearInterval(interval);
    };
  }, [time])
  
  

  return(
    <div className="boxClock">
      <span>{time.min.toString().length === 1 && '0' + time.min || time.min}.{time.seg.toString().length === 1 && '0' + time.seg || time.seg}</span>
    </div>
  )
}

export default Clock