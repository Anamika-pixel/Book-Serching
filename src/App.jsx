import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing'
import Home from './Components/Home'


function App() {

  return (
    <>

   
   <Routes>
      <Route element={  <Landing /> }  path='/'></Route>
      <Route element={ <Home />} path='/home'></Route>
   </Routes>
    
    </>
  )
}

export default App
