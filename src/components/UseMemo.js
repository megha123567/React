import {React, useState, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';

function App (){
  const navigate = useNavigate();

  function Feature() {
    navigate('/feature')
  }

  const [number, setNumber] = useState()
  const [dark, setDark] = useState(false)
  
  const doubleNumber = useMemo(() =>{
    return slowFunction(number)
  }, [number])

  const theme = {
    backgroundColor: dark? 'blue': 'white',
    color: dark? 'white' : 'blue'
  }

 

  return (
    <>
    <br/>
    <input type="number" value={number} onChange={e =>{setNumber(parseInt(e.target.value))}}/>
    <button onClick={() => setDark(prevDark => !prevDark)}>Click Me</button>
    <div style={theme}>{doubleNumber}</div>
    <br/>
    <button onClick={Feature}>Features</button>
    </>
  )
}

function slowFunction(num) {
  for (let i = 0; i <= 100000; i++) {}
  return num * 2
}

export default App