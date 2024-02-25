import React from 'react'
import ContactForms from '../Components/Forms/ContactForms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import bannerImage from '../assets/Img/Card/HomeCard.jpg'

const Contact = () => {
    return (
        <div className='mt-16'>
            <div className=' w-full shadow-[0px_0px_40px_#1d037b80] bg-[#12073ac5] h-fit pb-8 flex flex-col items-center justify-center bg-no-repeat bg-cover'
                style={{ backgroundImage: `linear-gradient(#230e785a, #00000087),url(${bannerImage})`, backgroundPosition: 'center' }}>
                <p className='pt-[3.5rem] pb-[2rem] text-[2.3rem] text-white md:text-[3rem] lg:text-[3.3rem] font-mono font-bold text-center'>Let's have a talk</p>
                <div className='text-black flex flex-col lg:flex-row lg:gap-4 gap-3 text-[17px] w-fit'>
                    <a href={`tel:+916207234759`} className='w-[16rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold  gap-2 bg-white '>
                        <FontAwesomeIcon icon={faPhone} className='text-[#1d7f20] text-[20px]' />
                        <p>+91 6207234759</p>
                    </a>
                    <a href={`mailto:itsakash18.06@gmail.com`} className='w-[16rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold gap-2 bg-white '>
                        <FontAwesomeIcon icon={faEnvelope} className='text-[#EA4335] text-[20px]' />
                        <p>itsakash18.06@gmail.com</p>
                    </a>
                    <a target={`_blank`} href="https://github.com/webakash1806" className='w-[16rem] lg:w-[12rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold gap-2 bg-white '>
                        <FontAwesomeIcon icon={faGithub} className='text-[#161a16] text-[20px]' />
                        <p>webakash1806</p>
                    </a>
                    <a target={`_blank`} href="https://www.linkedin.com/in/itsakash18/" className='w-[16rem] lg:w-[13rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold gap-2 bg-white '>
                        <FontAwesomeIcon icon={faLinkedinIn} className='text-[#3766ff] text-[20px]' />
                        <p>itsakash18</p>
                    </a>
                </div>
            </div>
            <ContactForms />
        </div>
    )
}

export default Contact