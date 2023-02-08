import {React, useState, useCallback} from 'react';
import List from './List';
import { useNavigate } from 'react-router-dom';

function App(){

  const navigate = useNavigate();

  function Feature() {
    navigate('/feature')
  }

  const [number, setNumber] = useState()
  const [dark, setDark] = useState(false)

  const getItems = useCallback(()=>{
    return [number]
  },[number])

  const theme = {
    backgroundColor: dark ? 'blue' : 'white',
    color: dark ? 'white' : 'blue'
  }

  return (
    <div >
      <br/>
      <input type="number" value={number} onChange={e =>{setNumber(parseInt(e.target.value))}}/>
      <button onClick={()=> setDark(prevDark => !prevDark)}>Click Me</button>
      <div style={theme}><List getItems={getItems}/></div>
      <br/>
      <button onClick={Feature}>Features</button>
    </div>
  )
}

export default App;