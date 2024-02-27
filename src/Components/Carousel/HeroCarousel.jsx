import React from 'react'
import hero1 from '../../assets/Img/hero1.png'
import Btn from '../Button/BtnDark'
import Typewriter from 'typewriter-effect'
import hero2 from '../../assets/Img/hero2.png'
import appHero from '../../assets/Img/appHero.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeImage from '../../assets/Img/homeImage.jpg'

const HeroCarousel = () => {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        pauseOnHover: false
    };
    return (

        <Slider {...settings} className='bg-[#000000] mt-[5rem] xl:mt-[1rem] flex h-fit relative'>
            <div className="pt-6 relative w-full    md:h-[100vh]">
                <div className='absolute top-0 left-0 '>
                    <img src={homeImage} alt="" className='w-[100vw] h-[100vh] object-cover' />
                </div>
                <div className='flex relative z-20 h-full flex-col-reverse items-center backdrop-blur-md bg-[#3131342c] justify-around w-full overflow-hidden md:flex-row'>
                    <div className='p-8'>
                        <h1 className='font-semibold tracking-wide text-[2rem] justify-center text-white'>
                            <span className='text-[2.6rem] leading-[3rem]  font-mar tracking-widest'>
                                <Typewriter
                                    options={{
                                        strings: ['Dynamic', 'Static'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span> Website Development</h1>
                        <p className="font-normal max-w-[28rem] min-h-fit  lg:w-[50vw] text-[#efefef]">We design and build responsive, visually stunning websites tailored to your unique needs. Harness the power of cutting-edge technology for a compelling and user-friendly digital experience.</p>
                        <Btn cont={"Our Service"} />
                    </div>
                    <img src={hero1} className="w-[28rem] pt-10 xl:w-[40vw]  drop-shadow-[5px_3px_5px_#000]" />
                </div>
            </div>
            <div id="slide2" className="bg-[#000000] pt-6 relative w-full md:h-[100vh]">
                <div className='absolute top-0 left-0 '>
                    <img src={homeImage} alt="" className='w-[100vw] h-[100vh] object-cover' />
                </div>
                <div className='relative z-20 flex flex-col-reverse items-center justify-around w-full h-full overflow-hidden backdrop-blur-md md:flex-row'>
                    <div className='p-8'>
                        <h1 className='font-semibold tracking-wide text-[2rem] justify-center text-white'>
                            <span className='text-[2.6rem] leading-[3rem]  font-mar tracking-widest'>
                                <Typewriter
                                    options={{
                                        strings: ['Network', 'Cloud', 'Mobile'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span> Security Solution</h1>
                        <p className="font-normal max-w-[28rem] min-h-fit   lg:w-[50vw] text-[#efefef]">"Comprehensive security solutions: Robust protection, advanced threat detection, and expert guidance for a resilient and secure business environment."</p>
                        <Btn cont={"Our Service"} />
                    </div>
                    <img src={hero2} className=" w-[28rem] object-cover xl:w-[35rem]  drop-shadow-[5px_3px_5px_#000]" />
                </div>
            </div>
            <div id="slide3" className="pt-6 relative w-full  bg-[#000000] md:h-[100vh] h-full">
                <div className='absolute top-0 left-0 '>
                    <img src={homeImage} alt="" className='w-[100vw] h-[100vh] object-cover' />
                </div>
                <div className='relative z-20 flex flex-col-reverse items-center justify-around w-full h-full overflow-hidden backdrop-blur-md md:flex-row'>
                    <div className='p-8'>
                        <h1 className='font-semibold tracking-wide text-[2rem] justify-center text-white'>
                            <span className='text-[2.6rem] leading-[3rem]  font-mar tracking-widest'>
                                <Typewriter
                                    options={{
                                        strings: ['IOS', 'Android'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span> App Development</h1>
                        <p className="font-normal max-w-[28rem] min-h-fit  lg:w-[50vw] text-[#efefef]">Expert app development service crafting innovative solutions, ensuring seamless user experiences, and delivering top-notch functionality for your business success.</p>
                        <Btn cont={"Our Service"} />
                    </div>
                    <img src={appHero} className=" w-[26rem] object-cover xl:w-[32rem]  drop-shadow-[5px_3px_5px_#000]" />
                </div>
            </div>
        </Slider>

    )
}

export default HeroCarousel
