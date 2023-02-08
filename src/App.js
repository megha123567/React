import Errorboundary from './components/ErrorBoundary'
import Useref from './components/UseRef'
import Usecallback from './components/UseCallback'
import Usememo from './components/UseMemo'
import Navbar from './components/Navbar'
import GetApi from './components/GetApi'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Features from './components/Features'
import UserCreate from './components/user/UserCreate'


function App() {

  return(
    <>
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
    <div>

      <Routes>
        <Route path='/api' element={<GetApi/>}/>
        <Route path='/feature' element={<Features/>}/>
        <Route path='/error' element={<Errorboundary/>}/>
        <Route path='/callback' element={<Usecallback/>}/>
        <Route path='/memo' element={<Usememo/>}/>
        <Route path='/ref' element={<Useref/>}/>
        <Route path='/user' element={<UserCreate/>}/>
         
      </Routes>
    </div>
   
    </BrowserRouter>
    
   {/* <Useref/> */}
   {/* <Errorboundary/> */}
   {/* <Usecallback/> */}
   {/* <Usememo/> */}
    </>
  )
}

export default App

