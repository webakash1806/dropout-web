import React from 'react'
import ReviewCard from '../ReviewCard'
import Label from '../../Label/Label'
import cardBgImg from '../../../assets/Img/Card/TestiImg.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReviewData from '../../../Hooks/useReviewData';

const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <div className='relative flex flex-col items-center justify-between pb-[5rem] bg-black' >
            <img src={cardBgImg} alt="" className='absolute top-0 left-0 w-full h-full' />
            <Label content={"Testimonials"} />
            <Slider {...settings} className=' mt-[5rem] xl:mt-[7rem] flex h-fit z-[60] w-full'>
                {
                    useReviewData.map((data, ind) => <ReviewCard key={ind + 1} data={data} />)
                }
            </Slider>
        </div >
    )
}

export default Testimonial
