import React from 'react'
import ServiceCard from '../ServiceCard'
import cardBgImg from '../../../assets/Img/Card/HomeCard.jpg'
import Label from '../../Label/Label'
import BtnDark from '../../Button/BtnDark'

import useServiceData from "../../../Hooks/useServiceData"

const HomeCards = () => {

    // const images = [webImg]

    // console.log(useServiceData)
    return (
        <div className='relative flex flex-col items-center justify-between pb-[3rem]' >
            <img src={cardBgImg} alt="" className='absolute w-full h-full bg-gradient-to-t from-black to-white' />
            <Label content={"Our Services"} />
            <div className='grid justify-center grid-cols-1 gap-5 py-10 gap-x-5 lg:grid-cols-3 md:grid-cols-2 place-items-center '>
                {useServiceData.map((data, ind) => <ServiceCard data={data} key={ind + 1} />)}
            </div>
            <div className='relative z-50'>
                <BtnDark cont={"All Services"} />
            </div>
        </div >
    )
}

export default HomeCards
