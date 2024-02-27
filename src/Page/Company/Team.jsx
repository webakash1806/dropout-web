import React from 'react'
import PageHeadLabel from '../../Components/Label/PageHeadLabel'
import team from '../../assets/Img/team.png'

const Team = () => {
    return (
        <div className='mt-[6.5rem] xl:mt-[7rem] mb-10'>
            <PageHeadLabel cont={"Our Team"} />
            <div className='flex flex-col items-center justify-around gap-4 lg:justify-center md:flex-row md:gap-0'>
                <img src={team} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        Our Team
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>
                        <p className='text-[1.3rem] font-[400] tracking-wide text-[#f5d290]'>You Dream, We Deliver !</p>
                        Within Dropout IT Solution, we boast a team of proficient and seasoned professionals dedicated to providing top-notch services in website design, app development, graphics design, content creation, digital marketing, and search engine optimization. Our diligent team is committed to delivering projects with exceptional quality, ensuring that we meet the unique requirements of our valued clients.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team
