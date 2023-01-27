import {React, useState, useCallback} from 'react';
import List from './List';

function App(){
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
      <input type="number" value={number} onChange={e =>{setNumber(parseInt(e.target.value))}}/>
      <button onClick={()=> setDark(prevDark => !prevDark)}>Click Me</button>
      <div style={theme}><List getItems={getItems}/></div>
    </div>
  )
}

export default App;