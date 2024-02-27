import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import HeaderTop from './HeaderTop'

const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const navStyle = 'text-[1.05rem] tracking-wide w-[90vw] xl:w-fit text-start xl:border-0 xl:hover:border-b-2 pb-4 pt-1 xl:p-[3px_9px] xl:m-[0px_11px] border-grey hover:border-[#ffcf4a]  hover:text-[#ffcf4a] duration-200 cursor-pointer  border-b-[1px]'

    // useEffect(() => {
    //     hamActive()
    // }, [])

    return (
        <div className='fixed top-0 left-0 z-[100]'>
            <HeaderTop />
            <header className='flex w-[100vw] justify-between  md:pl-14 md:pr-6 lg:pl-16 lg:pr-8 xl:p-5 bg-darkBg text-white items-center  z-[100] py-[16px] px-6 shadow-[-1px_1px_7px_#000]  bg-black'>
                <div className=' w-[2rem] h-[2rem] flex items-center justify-center xl:hidden cursor-pointer text-[#ffcf4a]' onClick={hamActive}>
                    {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                        : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
                </div>
                <div className='md:mr-6 lg:mr-10'>LOGO</div>
                <nav className={`bg-black text-white xl:border-0 shadow-[0px_160px_1000px_#12073ac5] xl:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 md:p-0 w-[100vw] xl:max-w-[80vw]  items-center justify-between gap-3 xl:gap-0 flex-col absolute 
            ${barActive ? "top-[6.5rem] left-[-80rem] duration-[0.5s]" : "top-[6.5rem] left-0 duration-[0.5s]"}
             xl:flex-row xl:static `}>
                    <div className="flex flex-col gap-3 xl:flex-row xl:gap-0 ">
                        <Link to={'/'} className={navStyle}>
                            Home
                        </Link>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>Company <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/company/mission'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Our Mission</Link>
                                    <Link to={'/company/vision'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Our Vision</Link>
                                    <Link to={'/company/team'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Our Team</Link>
                                    <Link to={'/company/approach'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Our Approach</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>Website <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Web Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Website Development</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Ecommerce Website</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Best Website Designing Company in Varanasi</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Website Designing Packages</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Web Design</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Website Design Development</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>App <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Android App Development</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Mobile Applications</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Android App Development</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Android App Development Company in Varanasi</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Android App Development</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>Security <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100  w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Network Security</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Cloud Security</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Endpoint Security</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Mobile Security</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>IoT Security</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Application Security</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Zero Trust</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>Graphics <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Graphic Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Graphic Designing Company In Varanasi</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Profile Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Logo Design</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>Digital Marketing <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Social Media Optimization</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>SEO In Varanasi</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Search Engine (SEO)</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Digital Marketing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Digital Marketing 2</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>SMO In Varanasi</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Facebook Marketing & Advertising</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Graphic Designing Packages</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Digital Marketing Packages</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Facebook Marketing & Advertising</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>Portfolio <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Product Mockup Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Mascot Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>3D Designing & Modeling</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Political Post Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Facebook Post Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Instagram Post Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Visiting/Business Card Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>E Brochure Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Website Designing & Development</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className={`${navStyle} flex items-start gap-2`}>Blog <FontAwesomeIcon icon={faSortDown} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full xl:w-[17rem]">
                                <li onClick={hamActive}>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Logo Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Graphic Logo Designing</Link>
                                    <Link to={'/'} className={`${navStyle} xl:w-[15rem] xl:p-2 xl:border-b rounded-none`}>Graphic Designers & Designing Company In Varanasi</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to={'/contact'} onClick={hamActive} className={navStyle}>
                            Contact
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header