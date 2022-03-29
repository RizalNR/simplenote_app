import React, {useEffect, useState} from 'react'
import {ImCheckmark} from 'react-icons/im'
import { handleCreateNote } from './handleCreateNote'

const CreateNote = () => {
  return (
    <main className='w-full min-h-screen flex flex-col gap-4'>

        <form className='w-full flex flex-col gap-4' onSubmit={handleCreateNote}>

            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="title">Judul note</label>
                <input type="text" id='title' name='title' className='h-12 px-4 bg-white outline-none'/>
            </div>

            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="content">Note</label>
                <textarea type="text" id='content' name='content' className='h-[200px] p-4 bg-white outline-none'></textarea>
            </div>

            <button type='submit' className='w-full h-12 bg-green-400 uppercase text-lg font-mono flex justify-center items-center gap-2 text-white rounded-lg'>
               <ImCheckmark/> submit
            </button>

        </form>

    </main>
  )
}

export default CreateNote