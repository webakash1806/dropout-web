import React from 'react'
import labelBgImg from '../../assets/Img/label.png'

const Label = ({ content }) => {
    return (
        <div className='relative z-30 h-[5rem] shadow-[0px_10px_15px#000] overflow-hidden flex items-center justify-center w-full'>
            <div className='w-[100%] top-0 blur-md h-[5.5rem] overflow-hidden absolute z-30 bg-[#f5f54700] border border-white'>
                <img src={labelBgImg} alt="" className=' duration-400 animate-pulse' />
            </div>
            <h1 className='text-center text-white text-[2.2rem] font-[450] relative z-40 tracking-wide '>{content}</h1>
        </div>
    )
}

export default Label
