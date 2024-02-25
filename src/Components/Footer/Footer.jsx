import React from 'react'
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsWhatsapp
} from 'react-icons/bs'

import { MdKeyboardDoubleArrowRight, MdOutlineSmartphone } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6';


const Footer = () => {

    const listStyle = "text-[0.95rem] hover:pl-2 flex items-center gap-1 hover:text-[#fdca3e] font-semibold  text-slate-300 transition-all duration-300 ease-in-out"
    const contactStyle = "text-[0.95rem] flex items-start sm:items-center lg:items-start gap-1 hover:text-[#fdca3e] font-semibold  text-slate-300 "

    const year = new Date().getFullYear()

    return (
        <footer className=' bg-[#1B2124] text-white'>
            <div className='flex flex-col xl:flex-row p-[2.5rem_1rem] md:p-[2.5_5rem] gap-8 xl:justify-around'>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'><img className='w-[8rem]' alt="" />LOGO</div>
                    <p className='leading-6 xl:w-[23rem] w-full'>Shivam IT Solution is Rated No. 1 Website and App Development and IT Company in Varanasi, Uttarpradesh, India. We delivered 200+ projects successfully in last 5 years for clients from all over India and over 10+ cities including Varanasi, Mirzapur, Prayagraj (Allahabad), Chandauli, Lucknow, Mumbai etc. Our work portfolio includes Static Business Websites, Corporate Lead Generation Websites, MLM Website, E-Commerce Web Design & Development.</p>
                    <div className='flex gap-4 mt-3'>
                        <a href="" className='text-[20px]'><BsLinkedin /></a>
                        <a href="" className='text-[20px]'><BsFacebook /></a>
                        <a href="" className='text-[20px]'><BsWhatsapp /></a>
                        <a href="" className='text-[20px]'><BsInstagram /></a>
                        <a href="" className='text-[20px]'><BsTwitter /></a>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-8 md:gap-6 md:flex-row'>
                    <div className='flex flex-col w-[80vw] md:w-[60%] gap-8 sm:flex-row sm:justify-between md:gap-6 lg:gap-10'>
                        <div className='w-[80vw] sm:w-[50%] md:w-[14rem]'>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>ABOUT US</p>
                                <p className='w-[80vw] sm:w-[80%] md:w-[12rem] lg:w-[15rem] m-[9px_0] h-[3.4px] bg-[#fdca3e] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6 '>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Our Portfolio</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Company</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Services</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Web Design</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Blog</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Contact</Link>

                            </div>
                        </div>
                        <div className='w-ful sm:w-[50%] md:w-[14rem] '>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>OUR SERVICES</p>
                                <p className='w-[80vw] sm:w-[80%] lg:w-[15rem] md:w-[12rem] m-[9px_0] h-[3.4px] bg-[#fdca3e] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6 '>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />E Brochure</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Corporate Identity</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Business Card</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Print Media</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Logo Design</Link>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Social Media</Link>

                            </div>
                        </div>
                    </div>
                    <div className='md:w-[16rem] w-[80vw]'>
                        <div>
                            <p className='text-[1.09rem] font-[600]'>CONTACT US</p>
                            <p className='w-[80vw] md:w-[16rem] m-[9px_0] h-[3.4px] bg-[#fdca3e] rounded-md'></p>
                        </div>
                        <div className='flex flex-col gap-4 mt-6 '>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><CiClock1 />09:30 - 06:30</Link>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><MdOutlineSmartphone />+91 7398263499</Link>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><IoMdMail />info@dropoutdigital.in</Link>
                            <Link to={'/'} className={`${contactStyle} lg:items-center`}><FaLocationDot />Sigra, Varanasi, India</Link>
                            <Link to={'/'} className={`${contactStyle} md:items-start`}><FaLocationDot className='md:text-[1.7rem] text-[1rem] items-center' />D 64/52 G CHANDRIKA NAGAR COLONY, Sigra, Varanasi, Uttar Pradesh 221010</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center text-[1.05rem] font-[600] p-3 border-t'><span>&#169;</span> {year} | Copyright Dropout Digital - All Rights Reserved</div>
        </footer >

    )
}

export default Footer