import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useLanguageData from '../../../Hooks/useLanguageData';


const LanguageSection = () => {
    const settings = {
        infinite: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings} className='flex items-center justify-center'>

            {
                useLanguageData.map((data, ind) => {
                    return (
                        <div key={ind + 1} className='flex flex-col border bg-[#0d0d0d6a] items-center justify-center p-4 rounded-md backdrop-blur-lg h-[10rem] min-w-[4rem]'>
                            <img src={data.img} alt="" className='w-[3rem] m-[0_auto]' />
                            <p className='font-semibold text-center text-white'>{data.name}</p>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default LanguageSection
