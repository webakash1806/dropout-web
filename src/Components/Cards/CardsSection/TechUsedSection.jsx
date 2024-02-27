import React from 'react'
import Label from '../../Label/Label'
import TechCardSec from './TechCardSec'
import LanguageSection from './LanguageSection'
import techVideo from '../../../assets/Img/techBg.jpg'

const TechUsedSection = () => {
    return (
        <div className='relative'>
            <img src={techVideo} alt="" className='absolute top-0 left-0 object-cover w-full h-full' />

            <Label content={"Tech We Use"} />
            <div className='relative z-[20]  gap-2 flex flex-col'>
                <TechCardSec />
                <LanguageSection />
            </div>
        </div>
    )
}

export default TechUsedSection
