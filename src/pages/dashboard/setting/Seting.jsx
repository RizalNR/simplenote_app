import React from 'react'
import { Modal } from 'antd'

const Seting = () => {

    const resetNote = ()=>{
        
        Modal.confirm({
            title : "Setelah Reset Note, Semua note akan hilang",
            content : "Yakin..?",
            onOk : ()=>{
                localStorage.setItem("_notes", "[]")
            }
        })
    }

  return (
    <main className='w-full h-screen flex flex-col gap-4 bg-sky-100 justify-center items-center'>

        <button className='w-full h-12 bg-yellow-400 rounded-md text-white' onClick={resetNote}>
            reset note
        </button>

        <button className='w-full h-12 bg-red-500 rounded-md text-white'>
            logout
        </button>

    </main>
  )
}

export default Seting