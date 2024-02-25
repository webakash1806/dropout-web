import React from 'react'
import graphicImg from '../../assets/Img/Card/graphicImg.png'

const ReviewCard = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='w-[38rem] flex backdrop-blur-lg items-center justify-around rounded-md h-[10rem]  bg-[#ffffff0c] relative z-[20]'>
                <div className='p-2 bg-red-500 rounded-full h-[5rem] w-[5rem] flex items-center justify-center'>
                    <img src={graphicImg} alt="user image" />
                </div>
                <div className='w-[75%] flex flex-col items-end text-white'>
                    <p className='text-[0.95rem] font-[400]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita corrupti, consectetur voluptas enim facilis totam, aliquid similique minima fugit quos optio? Officiis fuga consequatur!</p>
                    <p className='text-[0.9rem] text-[#f6ff43] pr-6'>-Abhimanyu Singh</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
