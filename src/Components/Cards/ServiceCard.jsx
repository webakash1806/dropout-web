import React from 'react'
import { Link } from 'react-router-dom'


const ServiceCard = ({ data }) => {

    const { icon, heading, des, col } = data

    console.log(icon)

    return (
        <Link to={'/'} className='text-black overflow-hidden group relative bg-white max-w-[20rem] min-w-[19rem] rounded-md p-6 py-10 flex flex-col items-center border-2 border-white shadow-[0px_0px_5px_#ff5e00c7_inset]'>
            <div className={`relative z-[20] mb-4 transition-all duration-300 group-hover:bg-white  p-4 rounded-full w-[4.5rem] flex items-center justify-center h-[4.5rem] border-2 border-[white] shadow-[0px_0px_5px_#808080]`} style={{ backgroundColor: col }}>
                <img src={icon} alt="" />
            </div>
            <div className={`absolute rounded-full top-[4rem] z-[1] w-[1rem] h-[1rem] transition-all duration-300 group-hover:w-[40rem] group-hover:h-[40rem] group-hover:top-[-5rem]`} style={{ backgroundColor: col }}>
            </div>
            <h2 className='font-bold tracking-wide text-[1.16rem] z-50'>{heading
            }</h2>
            <p className=' text-center text-[0.9rem] text-[#5c5c5c] z-50 line-clamp-3'>{des}</p>
        </Link>
    )
}

export default ServiceCard
