import {React, useState, useEffect} from "react"
// import "./GetApi.css"

function App() {
  const [post, setPost] = useState()
  useEffect(()=>{
    fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(data => {
      
      setPost(data.data)
    })
  },[])
  
  const listItems = post?.map((posts) => 
    
    <tr key={posts.id}>
      <td>{posts.id}</td>
      <td>{posts.first_name}</td>
      <td>{posts.last_name}</td>
      <td>{posts.email}</td>
    </tr>
  
  )
  return(
    <>
    <div className="container">
        <div>
            <h1>Fetch data from an API</h1>
        </div>
        <br/>
    <table className='table'>
        <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
          {listItems}
    
        </tbody>
        
      </table>
    </div>
    </>
  )
}

export default App