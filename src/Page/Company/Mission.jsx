import React from 'react'
import PageHeadLabel from '../../Components/Label/PageHeadLabel'
import missionImg from '../../assets/Img/missionImg.png'

const Mission = () => {
    return (
        <div className='mt-[6.5rem] xl:mt-[7rem] mb-10'>
            <PageHeadLabel cont={"Our Mission"} />
            <div className='flex flex-col items-center justify-around gap-4 lg:justify-center md:flex-row md:gap-0'>
                <img src={missionImg} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        Our Mission
                    </h1>
                    <p className='text-center text-white md:text-start'>
                        We are dedicated to providing web solutions that combine innovation and thoughtful design to deliver high-quality and cost-effective services. Our commitment to customer-centric principles, trust, transparency, and honesty forms the foundation of our mission, aiming to build a strong brand value through our creative ideas.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mission
