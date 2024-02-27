import React from 'react'
import PageHeadLabel from '../../Components/Label/PageHeadLabel'
import visionImg from '../../assets/Img/visionImg.png'

const Vision = () => {
    return (
        <div className='mt-[6.5rem] xl:mt-[7rem] mb-10'>
            <PageHeadLabel cont={"Our Vision"} />
            <div className='flex flex-col items-center justify-around gap-4 lg:justify-center md:flex-row md:gap-0'>
                <img src={visionImg} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        Our Vision
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4'>
                        We aspire to establish IT Solution as a premier website designing and app development company not only in India but globally. Our objectives encompass becoming the preferred option for both clients and team members, aiming to be the forefront choice in the industry.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vision
