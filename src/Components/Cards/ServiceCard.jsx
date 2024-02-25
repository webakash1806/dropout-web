import React from 'react'
import webImg from '../../assets/Img/Card/webImg.png'
import { Link } from 'react-router-dom'


const ServiceCard = () => {
    return (
        <Link to={'/'} className='text-black overflow-hidden group relative bg-white max-w-[20rem] min-w-[19rem] rounded-md p-6 py-10 flex flex-col items-center border-2 border-white shadow-[0px_0px_5px_#ff5e00c7_inset]'>
            <div className='relative z-[20] mb-4 bg-[#B8F9D3] transition-all duration-300 group-hover:bg-white  p-4 rounded-full w-[4.5rem] flex items-center justify-center h-[4.5rem] border-2 border-[white] shadow-[0px_0px_5px_#808080]'>
                <img src={webImg} alt="" />
            </div>
            <div className='absolute rounded-full top-[4rem] z-[1] w-[1rem] h-[1rem] bg-[#B8F9D3] transition-all duration-300 group-hover:w-[40rem] group-hover:h-[40rem] group-hover:top-[-5rem]'>
            </div>
            <h2 className='font-bold tracking-wide text-[1.16rem] z-50'>WEBSITE DEVELOPMENT</h2>
            <p className=' text-center text-[0.9rem] text-[#5c5c5c] z-50 line-clamp-3'>Shivam IT Solution brings simple, direct and cost-effective approach to design your website up to the standard of your online business, here we deliver top quality Web Designing along with web development and digital marketing.</p>
        </Link>
    )
}

export default ServiceCard
