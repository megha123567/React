import {React, useState, useEffect, useRef} from 'react';


function App (){
    
  const [name, setName] = useState()
  const prevName = useRef()

  useEffect(()=>{
    prevName.current = name
  }, [name])

  return (
    <>
    <input value={name} onChange = {e => setName(e.target.value)}/>
    <div>My Name is {name}</div>
    <div>Previous Name is {prevName.current}</div>
    </>
  )
}

export default App