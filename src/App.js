import "./App.css";
import Start from './start/Start';
import Canvas from './Canvas';
import Name from "./name/Name"
import React, { useState, useEffect } from "react";
import Clock from "./clock/Clock";
import { saveTime, onGetTimes} from "./firebase";

const App = () => {
  const [name, setName] = useState('none')

  const [start, setStart] = useState('flex')

  const [clock, setClock] = useState(false)

  const [time, setTime] = useState('00:00')

  const go = () => {
    setClock(true)
    setStart('none')
    document.getElementById('canvas').style.filter = "blur(0)"
  }

  const win = () => {
    setTime(document.querySelector('.boxClock').innerText)
    setClock(false)
    setName('flex')
  }

  const submit = () => {
    console.log(time, document.getElementById('nameInput').value)
    const nombre = document.getElementById('nameInput').value
    saveTime(nombre, time)
    setName('none')
  }

  return (
    <>
      <Canvas win={win}/>
      {clock && <Clock/>}
      <Start click={go} display={start}/>
      <Name display={name} time={time} submit={submit}/>
    </>
  )
}

export default App