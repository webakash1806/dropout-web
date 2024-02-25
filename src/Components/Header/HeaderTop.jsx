import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTop = () => {
    return (
        <div className='bg-[#fdca3e] text-black p-2 text flex justify-evenly items-center'>
            <div className='flex items-center gap-1'>
                <FontAwesomeIcon icon={faMobileScreenButton} />
                <p className='font-semibold'>+91 7398263499</p>
            </div>
            <div className='flex gap-[5px]'>
                <Link to={'/'}>
                    <FaSquareFacebook className='text-[1.5rem] text-[#0A80EC]' />
                </Link>
                <Link to={'/'}>
                    <FaSquareInstagram className='text-[1.5rem] text-[#FE05BA]' />
                </Link>
                <Link to={'/'}>
                    <FaSquareYoutube className='text-[1.5rem] text-[#FF0000]' />
                </Link>
                <Link to={'/'}>
                    <FaLinkedin className='text-[1.5rem] text-[#1769b6]' />
                </Link>

            </div>
        </div>
    )
}

export default HeaderTop
