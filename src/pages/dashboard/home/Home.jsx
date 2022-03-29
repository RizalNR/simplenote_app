import React, {useEffect, useState} from 'react'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            try {
                const noteData = await localStorage.getItem("_notes")
                let parseNoteData = await JSON.parse(noteData)
                return parseNoteData
            } catch (error) {
                console.error(error)
            }
        }

        getData().then(res =>{
            setData(res)
        }).catch(err =>{
            console.error(err)
        })
    }, [])

  return (
    <main className='flex flex-col w-full gap-4 bg-sky-100 pb-20 min-h-screen'>

        {data && data.map((e)=>{
            return(
                <div className='w-full  flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md' key={e.id}>
                    <h1 className='font-light text-xl font-mono'>{e.title}</h1>
                    <p className='text-md font-light font-mono'>{e.content}</p>
                    <small className='text-sm italic text-blue-500'>{e.createdAt}</small>
                </div>
            )
        })}

    </main>
  )
}

export default Home