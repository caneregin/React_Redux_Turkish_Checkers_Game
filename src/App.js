import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { updateRock1, updateRock2, changeRock, updateimgColor } from "./redux/damaApp/damaSlice"
import React, { useEffect, useState } from 'react'

function App() {
  const data = useSelector((state) => state.dama.items)
  const dispatch = useDispatch()
  const [firstClick, setFirstClick] = useState(null)
  const [firstClickimgColor, setFirstClickimgColor] = useState(null)
  const [secondClick, setSecondClick] = useState(null)
  const [counter, setCounter] = useState(0)

  const handleClick = (e) => {
    if (firstClick === null) {
      setFirstClick(e.target)
      setFirstClickimgColor(e.target.alt)
    } else {
      setSecondClick(e.target)
    }
  }
  useEffect(() => {
    dispatch(updateRock1(firstClick))
  }, [firstClick])
  useEffect(() => {
    dispatch(updateimgColor(firstClickimgColor))
  }, [firstClickimgColor])

  useEffect(() => {
    dispatch(updateRock2(secondClick))
    if (secondClick) {
      dispatch(changeRock())
      setCounter(counter + 1)
    }
  }, [secondClick])
  useEffect(() => {
    setFirstClick(null)
  }, [counter])
  console.log(data)
  return (
    <div className="App">
      <div className='box-grid'>
        {data.map((box, i) => (
          <button key={i} className="button-rock" style={{ backgroundColor: box.backgroundColor }}><img alt={box.rockColor} onClick={handleClick} id={box.id} src={box.rockColor} /></button>
        ))}
      </div>
    </div>
  );
}

export default App;
