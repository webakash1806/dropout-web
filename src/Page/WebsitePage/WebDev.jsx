import React from 'react'
import PageHeadLabel from '../../Components/Label/PageHeadLabel'
import hero1 from '../../assets/Img/hero1.png'
import webDetail from '../../assets/Img/webDetail.png'
import webDesignLast from '../../assets/Img/webDesignLast.png'
import ScrollImg from '../../Components/ScrollImg/ScrollImg'

const WebDev = () => {
    return (
        <div className='mt-[6.5rem] xl:mt-[7rem]'>
            <PageHeadLabel cont={"Website Development"} />
            <div className='flex flex-col items-center justify-around gap-4 py-8 bg-[#191919] lg:justify-center md:flex-row md:gap-0'>
                <img src={hero1} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        WEB DEVELOPMENT COMPANY IN VARANASI, INDIA
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>
                        <p className='text-[1.3rem] font-[400] tracking-wide text-[#f5d290]'>Professional & Creative Approach by <span className='text-[#ff885d] font-semibold'>Web Developer</span></p>
                        We stand as Varanasi's foremost web design and development firm, situated in India. Our adept web developers execute the technical implementation and software development for projects based on specifications provided by project managers. With a focus on aligning capabilities with customer requirements, our web developers create websites and software solutions tailored to meet the unique needs of each client.
                        <br />
                        Our team of professional, creative, and technical web developers and designers operate independently, engaging directly with customers to deliver the finest service possible.
                    </p>
                </div>
            </div>
            <div className='bg-black flex flex-col items-center justify-center gap-2 lg:px-[10rem] py-16 xl:px-[15rem]'>
                <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>Best Web Development Company in Varanasi</h1>
                <p className='text-center text-white sm:px-4 font-[350]'>The skilled web developers at Dropout IT Solutions excel in executing various functions essential for website development. This specialized role is designated for computer graduates and experienced professionals capable of analyzing customer requirements outlined by the project manager. They adeptly propose and implement technical solutions to craft tailored websites or modify existing solutions.</p>
                <img src={webDetail} alt="" />
            </div>
            <ScrollImg />
            <div className='flex flex-col items-center justify-center lg:px-[10rem] py-12 xl:px-[15rem] bg-[#000000ba] p-4'>
                <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                    Professional Web Developers
                </h1>
                <h3 className='text-[1.2rem] text-white'>Innovation and Creativity with Creative Web Development</h3>
                <p className='text-[#e9e7e7] mt-4'>
                    In the website design phase, our web developer thoroughly examines the assigned project, taking into account user needs and requirements documented in a technical specification. Our team of web developers and designers carefully scrutinizes the operational stages of the website and devises a technical solution. Upon completion of the website analysis, our technical web developers implement the installation of technical sheets and create user guides. Occasionally, it may be essential to provide technical support or conduct training sessions to assist users in utilizing the application effectively.               </p>
            </div>
            <div className='flex flex-col items-center justify-around gap-4 py-10 bg-[#191919] lg:justify-center md:flex-row md:gap-0'>
                <img src={webDesignLast} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        Web Development Services
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>
                        <span className='relative font-semibold md:right-4'> Our web developers are responsible for:</span> <br />
                        - Conducting technical analysis of websites. <br />
                        - Selecting appropriate technical solutions.<br />
                        - Developing all technical features of the website.<br />
                        - Ensuring adherence to good coding practices.<br />
                        - Conducting testing and validation of developed features.<br />
                        - Client training upon the website delivery. <br />
                        - Providing ongoing technical support throughout the website's lifecycle. <br />
                        - Addressing and fixing issues reported by the client.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WebDev
