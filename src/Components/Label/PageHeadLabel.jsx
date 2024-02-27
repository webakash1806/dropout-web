import React from 'react'
import pageLabel from '../../assets/Img/pageLabel.png'

const PageHeadLabel = ({ cont }) => {
    return (
        <div className='relative'>
            <img src={pageLabel} alt="" className='h-[21vh] xl:h-[25vh] w-full object-cover ' />
            <div className='absolute top-0 flex items-center justify-center w-full h-full bg-[#00000080]'>
                <h1 className='font-bold tracking-wide text-white text-[2.2rem] backdrop-blur-[1px]'>{cont}</h1>
            </div>
        </div>
    )
}

export default PageHeadLabel
