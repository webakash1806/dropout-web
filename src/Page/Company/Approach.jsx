import React from 'react'
import PageHeadLabel from '../../Components/Label/PageHeadLabel'
import approach from '../../assets/Img/approach.png'

const Approach = () => {
    return (
        <div className='mt-[6.5rem] xl:mt-[7rem] mb-10'>
            <PageHeadLabel cont={"Our Approach"} />
            <div className='flex flex-col items-center justify-around gap-4 lg:justify-center md:flex-row md:gap-0'>
                <img src={approach} alt="" className='w-[25rem] pt-10 drop-shadow-[5px_3px_5px_#000]' />
                <div className='flex flex-col items-center gap-4 md:px-4 lg:w-[40vw]'>
                    <h1 className='text-[1.5rem] font-semibold md:w-full text-[#2bffca] text-center md:text-start border-b-2 px-2 border-[#ffdb29]'>
                        Our Approach
                    </h1>
                    <p className='text-center text-white md:text-start sm:px-4 font-[350]'>
                        We adopt a professional approach to web design, emphasizing what can be aptly termed 'website architecture.' Website architecture, in our view, encompasses the meticulous blend of art and science in crafting exceptional websites. This involves:
                        <ul className='text-[0.9rem] list-disc text-start sm:p-8 sm:px-16'>
                            <li>Crafting valuable and meticulously organized content.</li>
                            <li>Implementing robust technical design for efficiency and stability.</li>
                            <li>Incorporating compelling visual design for aesthetic appeal and user delight.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Approach
