import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateNote from './pages/dashboard/createnote/CreateNote'
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/dashboard/home/Home'
import Seting from './pages/dashboard/setting/Seting'
import SplashScreen from './pages/splash/SplashScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/login" element={<h1>login</h1>}/>
        <Route path="/register" element={<h1>register</h1>}/>

        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='*' element={<Home/>}/>
          <Route path='createnote' element={<CreateNote/>}/>
          <Route path='setting' element={<Seting/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    )
}

export default App