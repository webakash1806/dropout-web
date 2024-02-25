import React from 'react'
import ServiceCard from '../Components/Cards/ServiceCard'
import HeroCarousel from '../Components/Carousel/HeroCarousel'
import HomeCards from '../Components/Cards/CardsSection/HomeCards'
import ScrollImg from '../Components/ScrollImg/ScrollImg'
import { LiaAwardSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa6";
import { RiEmotionHappyLine } from "react-icons/ri";
import { ImStarHalf } from "react-icons/im";
import CountUp, { useCountUp } from 'react-countup'
import Testimonial from '../Components/Cards/CardsSection/Testimonial'
import ContactForms from '../Components/Forms/ContactForms'


const Home = () => {
    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,
    });

    return (
        <div className='font-poppins'>
            <HeroCarousel />
            <HomeCards />
            <ScrollImg />
            <div className='flex items-center justify-center'>
                <div className='w-full bg-[#000000a4] py-16 text-white grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <FaUsers className='text-[4rem]' />
                        <div className='text-[2rem] flex items-center'>
                            <CountUp end={20} enableScrollSpy /><span className='font-[450] text-[2.7rem]'>+</span>
                        </div>
                        <p className='text-[1.4rem]'>Experts</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <RiEmotionHappyLine className='text-[4rem]' />
                        <div className='text-[2rem] flex items-center'>
                            <CountUp end={15000} enableScrollSpy /><span className='font-[450] text-[2.7rem]'>+</span>
                        </div>
                        <p className='text-[1.4rem]'>Happy Customers</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <ImStarHalf className='text-[4rem]' />
                        <div className='text-[2rem] flex items-center'>
                            <CountUp end={7} enableScrollSpy /><span className='font-[450] text-[2.7rem]'>+</span>
                        </div>
                        <p className='text-[1.4rem]'>year of experience</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <LiaAwardSolid className='text-[4rem]' />
                        <div className='text-[2rem] flex items-center'>
                            <CountUp end={1000} enableScrollSpy /><span className='font-[450] text-[2.7rem]'>+</span>
                        </div>
                        <p className='text-[1.4rem]'>Awards Won</p>
                    </div>
                </div>
            </div>
            <Testimonial />
            <ContactForms />
        </div>
    )
}

export default Home
