import React from 'react'
import parallaxImg from '../../assets/Img/parallaxImg.jpg'

const ScrollImg = () => {
    return (
        <div className='fixed left-0 block top-20 z-[-1]'>
            <img src={parallaxImg} alt="" className='h-[90vh] object-cover w-[100vw]' />
        </div>
    )
}

export default ScrollImg
