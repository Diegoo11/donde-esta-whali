import './Canvas.css';
import Click from './click/click';
import React, { useState, useEffect } from "react";
import { saveTime, getTimes} from "./firebase";
function Canvas(props) {

  useEffect(()=>{
    document.getElementById("canvas").addEventListener('click', (e) => {
      if(e.srcElement.classList[1] === 'BoxClick'){
        return
      }
      viewBoxClick(e)
    })
  }, [])

  const [boxClick, setBoxClick] = useState({view: false, positionX: null , positionY: null})

  const [color, setColor ] = useState({color1: 'red', color2: 'red', color3: 'red'})


  const viewBoxClick = (e) => {
    console.log(e.target.clientWidth, e.target.clientHeight)
    setBoxClick({
      view: true,
      positionX: e.layerX,
      positionY: e.layerY,
      width: e.target.clientWidth,
      height: e.target.clientHeight
    })
  }

  const selectBoxClick = (e) => {
    setBoxClick({
      view: false,
      positionX: null,
      positionY: null
    })
    juez(e.target.dataset.id)
  }

  const juez = (e) => {
    const x = boxClick.positionX / boxClick.width * 100;
    const y = boxClick.positionY / boxClick.height * 100;
    
    console.log(x, y)

    if((Number(e) === 1) && ((68.36 < x && x < 70) && (88 < y && y < 89))){
      changeColor(e)
      console.log('congratulecion jeke')
    }
    if((Number(e) === 2) && ((23.41 < x && x < 25.96) && (41.56 < y && y < 42.86))){
      changeColor(e)
      console.log('congratulecion leg')
    }
    if((Number(e) === 3) && ((2.6 < x && x < 6.4) && (79.4 < y && y < 80.5))){
      changeColor(e)
      console.log('congratulecion alien')
    }
  }

  const changeColor = (id) => {
    if(id == 1){
      setColor({
        color1: 'green',
        color2: color.color2,
        color3: color.color3
      })
    }
    if(id == 2){
      setColor({
        color1: color.color1,
        color2: 'green',
        color3: color.color3
      })
    }
    if(id == 3){
      setColor({
        color1: color.color1,
        color2: color.color2,
        color3: 'green'
      })
    }
  }

  useEffect(() => {
    if(color.color1 === 'green' && color.color2 === 'green' && color.color3 === 'green'){
      props.win()
    }
  }, [color])

  const [html ,setHtml] = useState([])

  useEffect(() => {
    getTimes(setHtml)
    
  },[html])
  

  return (
    <div id='width'>
      <div id="canvas">
        <img id='background' src='https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/where2.jpg?alt=media&token=320f963e-6a9d-4f30-9ea6-d5756a4afb98'
        />
        {boxClick.view && <Click
        positionX={boxClick.positionX}
        positionY={boxClick.positionY}
        selectorClick= {(e) => selectBoxClick(e)}
        color1 = {color.color1}
        color2 = {color.color2}
        color3 = {color.color3}
        />}
      </div>
      <div className='boxList'>
        <div className='subBoxList'>
          <h1 className='titleList'>Mejores Tiempos</h1>
          <div className='list'>
            {html.map((x) => {
              return <div key={x.id}><div className='people'><span>{x.name}</span><span>{x.time}</span></div><hr/></div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
