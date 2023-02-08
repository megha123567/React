import {React, useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';


function App (){

  const navigate = useNavigate();

  function Feature() {
    navigate('/feature')
  }

  const [name, setName] = useState()
  const prevName = useRef()

  useEffect(()=>{
    prevName.current = name
    console.log(name)
  }, [name])

  return (
    <>
    <br/>
    <input value={name} onChange = {e => setName(e.target.value)}/>
    <div>My Name is {name}</div>
    <div>Previous Name is {prevName.current}</div>
    <br/>
    <button onClick={Feature}>Features</button>
    </>
  )
}

export default App