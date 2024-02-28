import React from 'react'
import ScrollImg from '../../Components/ScrollImg/ScrollImg'
import PageHeadLabel from '../../Components/Label/PageHeadLabel'
import webDesign from '../../assets/Img/webDesign.png'
import designLast from '../../assets/Img/designLast.png'

const WebDesign = () => {
    return (
        <div className='mt-[6.5rem] xl:mt-[7rem]'>
            <PageHeadLabel cont={"Website Design"} />
            <div className='flex flex-col items-center justify-around gap-4 py-8 bg-[#191919] lg:justify-center md:flex-row md:gap-0'>
                <img src={webDesign} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        Website Designing Services
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>
                        At Dropout IT Solution, web design entails creating original content with copyright considerations, incorporating eye-catching interface designs, utilizing well-illustrated graphical elements, developing self-supporting pages, implementing organized menus and subtitles, employing browser-safe colors, crafting custom server error pages, and optimizing Meta tags for keywords. Our flash website designs prioritize visual appeal, featuring aesthetically pleasing typefaces, seamless navigation, complete accessibility, optimal legibility, high-quality graphics, full cross-platform compatibility, and a clean, user-friendly, and powerful web interface design.
                    </p>
                </div>
            </div>
            <div className='bg-black flex flex-col items-center justify-center gap-10 lg:px-[10rem] py-16 xl:px-[15rem]'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>Creative Website Designing company</h1>
                    <p className='text-center text-white sm:px-4 font-[350]'>The homepage of a website should be visually appealing and captivating, grabbing visitors' attention right from the start. The selection of color combinations is a crucial aspect of the web design process, and our team excels in creating eye-catching designs for your site. We specialize in delivering top-notch offshore web design services, having successfully served numerous individuals and corporations across various industries in website design and development.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>Inner page Web Designing</h1>
                    <p className='text-center text-white sm:px-4 font-[350]'>The primary purpose of inner pages is to center around a particular product for which they are designed. The foundational task in web design is crafting the home page, and subsequently, all other inner pages are developed in alignment with the home page. Inner pages consistently adhere to the theme, design, and color palette established by the home page.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>Competitive Research</h1>
                    <p className='text-center text-white sm:px-4 font-[350]'>Our dedicated team of web designers and developers is well-versed in the latest trends and techniques in web solutions. Utilizing cutting-edge tools, we strive to deliver top-notch solutions to our valued customers, ensuring their utmost satisfaction and fostering strong, long-term relationships with them. With each Google algorithm update, new challenges arise for webmasters and SEO professionals to tackle.</p>
                </div>
            </div>
            <ScrollImg />
            <div className='flex flex-col items-center justify-center lg:px-[10rem] py-12 xl:px-[15rem] bg-[#000000ba] p-4'>
                <h1 className='text-[1.5rem] font-semibold text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                    The Best Web Design Solutions
                </h1>
                <h3 className='text-[1.2rem] text-white'>Professional Web Designing
                </h3>
                <p className='text-[#e9e7e7] mt-4 text-center'>
                    Navigating through fluctuations in SERPs, position changes, Page Rank adjustments, or shifts in inbound links can be a daunting task. The constant worry that our website might plummet into obscurity is emotionally taxing. Instead of frantically scrambling to address issues with each update, there are proactive measures we can take. These actions can help ensure that our organic search optimization efforts remain effective and aren't rendered futile every few months. </p>
            </div>
            <div className='flex flex-col items-center justify-around gap-4 py-10 bg-[#191919] lg:justify-center md:flex-row md:gap-0'>
                <img src={designLast} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        BEST WEBSITE DESIGNING | MOST TRUSTED ECOMMERCE & BUSINESS WEBSITE DESIGNING
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>
                        <span className='relative font-semibold md:right-2'>Website Designing Services</span> <br />
                        At Dropout IT Solution, web designing encompasses the creation of original content with copyright considerations, coupled with visually appealing interface design. Our focus lies in incorporating well-illustrated graphical elements, self-sustaining pages, meticulously organized menus and subtitles, browser-safe color schemes, custom server error pages, and optimized Meta tags for keywords. These key elements collectively form the foundation of our web design development process. Our flash website designs are not only visually attractive but also feature optimal typefaces, seamless navigation, complete accessibility, superior legibility, high-quality graphics, full cross-platform compatibility, and a clean, user-friendly interface design that is both easy to use and powerful.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WebDesign
