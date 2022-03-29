import React, {useEffect}from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from '../../components/bottomNav/BottomNav'
import { checkNote } from './createnote/handleCreateNote'


const Dashboard = () => {
  useEffect(()=>{

    checkNote()

}, [])

  return (
    <main className='w-screen flex flex-col p-8 bg-sky-100'>

        <Outlet/>

        <BottomNav/>

    </main>
  )
}

export default Dashboard