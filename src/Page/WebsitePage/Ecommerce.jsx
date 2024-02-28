import React from 'react'
import ScrollImg from '../../Components/ScrollImg/ScrollImg'
import PageHeadLabel from '../../Components/Label/PageHeadLabel'
import designLast from '../../assets/Img/designLast.png'

const Ecommerce = () => {
    return (
        <div className='mt-[6.5rem] xl:mt-[7rem]'>
            <PageHeadLabel cont={"E-commerce Website"} />
            <div className='flex flex-col items-center justify-around gap-4 py-8 bg-[#191919] lg:justify-center md:flex-row md:gap-0'>
                <img src={designLast} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        Importance of Ecommerce Services, Ecommerce Websites and Ecommerce Apps
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>
                        Dropout IT Solution Varanasi is a prominent provider of Website Designing, Web Development, Android Application Development, and Search Engine Optimization Services. With a robust background in the Designing and Development of E-Commerce Websites and Apps, we specialize in incorporating the latest features for both B2B and B2C models.
                    </p>
                </div>
            </div>
            <div className='bg-black flex flex-col items-center justify-center gap-10 lg:px-[10rem] py-16 xl:px-[15rem]'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>Importance of Ecommerce Services, Ecommerce Websites and Ecommerce Apps</h1>
                    <p className='text-center text-white sm:px-4 font-[350]'>
                        Harnessing the potential of e-commerce, you can seamlessly market and sell your products or services on the vast landscape of the internet – the largest marketplace globally. Successfully implementing an e-commerce strategy can propel your business into exponential growth, significantly amplifying your sales and revenues.</p>
                </div>

                <p className='text-center text-white sm:px-4 font-[350]'>At Dropout It Solutions Varanasi, we firmly believe in the transformative power of e-commerce for conducting business efficiently. As a premier and proficient e-commerce service provider, Dropout It Solutions Varanasi possesses a profound understanding of the e-commerce domain coupled with expert service delivery, aimed at elevating your online business presence. We offer comprehensive and integrated e-commerce solutions on leading enterprise e-commerce platforms, enabling you to achieve your business objectives.</p>
                <div className='flex flex-col items-center gap-4 '>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center border-b-2 px-2 border-[#ffdb29] md:text-center'>
                        Advantages of having E-Commerce Portal for your business:
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>

                        -
                        Maintaining a continuous online presence for your business via an ecommerce portal ensures accessibility 24/7. <br />
                        - Overcoming geographical limitations, your ecommerce website transforms the entire world into a potential market, allowing you to reach customers globally.<br />
                        - Notably, having an online store significantly reduces operational costs.
                        <br />

                        - Additionally, from the customer's perspective, online shopping offers unparalleled speed and convenience, making it a highly favorable way to purchase products or services.
                    </p>
                </div>
            </div>
            <ScrollImg />
            <div className='flex flex-col items-center justify-center lg:px-[10rem] py-12 xl:px-[15rem] bg-[#000000ba] p-4'>
                <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                    What we do to develop Ecommerce Solution for your Business ?
                </h1>

                <p className='text-[#e9e7e7] mt-4 text-center'>
                    Our team of seasoned e-commerce experts is dedicated to crafting inventive solutions tailored to address the current challenges in the online marketing sector. We go beyond merely boosting business growth; we elevate user experiences through seamless navigation and user-friendly solutions. By blending your business objectives with our creative vision, we strive to deliver a comprehensive and impactful final output. </p>
            </div>

        </div>
    )
}

export default Ecommerce
