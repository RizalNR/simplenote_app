import React, {useRef, useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import Lottie from 'lottie-web'
import { handleRegister } from './handleRegister'
import { Modal } from 'antd'

const SplashScreen = () => {

    const [ showPass, setShowPass ] = useState(false)

    const container1 = useRef(null)
    const container2 = useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container : container1.current,
            renderer : "svg",
            loop : true,
            autoplay : true,
            animationData : require("../../assets/dogWalking.json")
        })

        Lottie.loadAnimation({
            container : container2.current,
            renderer : "svg",
            loop : true,
            autoplay : true,
            animationData : require("../../assets/bank.json")
        })
    }, [])

    const submitRegister = (e)=>{
        handleRegister(e)
        .then(res => {
            if(res){
                Modal.success({
                    content : "Registrasi Berhasil",
                    onOk : ()=>{
                        window.location.href = "/dashboard/home"
                    }
                })
            }
        })
        .catch(err =>{
            console.error(err)
        })
    }

  return (

        <Swiper slidesPerView={1} spaceBetween={0} className="w-screen h-screen">

            <SwiperSlide className='w-full h-full flex flex-col justify-start items-start bg-red-400 text-white p-10'>
                <h1 className='text-white font-bold text-5xl'>Aplikasi Note App Karya Anak Bangsa</h1>
                <div ref={container1} className='mt-4'></div>

                <div className='w-full flex justify-center gap-4 items-center h-12 mt-auto'>
                    <span className='bg-white w-2 h-2 rounded-full'></span>
                    <span className='bg-white/50 w-2 h-2 rounded-full'></span>
                    <span className='bg-white/50 w-2 h-2 rounded-full'></span>
                </div>
            </SwiperSlide>

            <SwiperSlide className='w-full h-full flex flex-col justify-start items-start bg-yellow-500 text-white p-10'>
            <h1 className='text-white font-bold text-5xl'>Gratis Digunakan Untuk Semua..</h1>

                <div ref={container2} className='mt-4'></div>

                <div className='w-full flex justify-center gap-4 items-center h-12 mt-auto'>
                    <span className='bg-white/50 w-2 h-2 rounded-full'></span>
                    <span className='bg-white w-2 h-2 rounded-full'></span>
                    <span className='bg-white/50 w-2 h-2 rounded-full'></span>
                </div>
            </SwiperSlide>

            <SwiperSlide className='w-full h-full flex flex-col justify-start items-start bg-green-500 text-white p-10'>
            <h1 className='text-white font-bold text-5xl'>Register Sekarang Juga !!</h1>

            <form className='w-full flex flex-col gap-4 mt-6' onSubmit={submitRegister}>

                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="email" className='text-white font-bold uppercase'>Email</label>
                    <input type="email" id='email' name='email' className='text-black px-2 h-12 border-none outline-none bg-white'/>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="password" className='text-white font-bold uppercase'>Password</label>

                    <div className='relative flex'>
                        <span className='absolute right-4 self-center' onClick={()=>{setShowPass(!showPass)}}>
                            {showPass ? <>😱</>   :  <>  😁</>}
                        </span>

                    <input type={showPass ? "text" : "password"} id='password' name='password' className='w-full text-black px-2 h-12 border-none outline-none bg-white'/>
                    </div>
                </div>

                <button className='w-full h-12 bg-blue-400 text-white' type='submit'>Register</button>

            </form>

                <div className='w-full flex justify-center gap-4 items-center h-12 mt-auto'>
                    <span className='bg-white/50 w-2 h-2 rounded-full'></span>
                    <span className='bg-white/50 w-2 h-2 rounded-full'></span>
                    <span className='bg-white w-2 h-2 rounded-full'></span>
                </div>
            </SwiperSlide>

        </Swiper>

  )
}

export default SplashScreen