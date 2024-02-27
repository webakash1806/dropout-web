import React from 'react'

const BtnDark = ({ cont }) => {
    return (
        <div className='relative overflow-hidden rounded-md group w-fit shadow-[0px_0px_10px_#7E57C2] mt-2'>
            <div className='transition-all duration-700 absolute top-[-10px] left-[-10px] w-4 h-0 bg-[#f8b704] rounded-sm group-hover:w-[20rem] group-hover:rounded-full group-hover:h-20'>
            </div>
            <button
                className='group  relative border overflow-hidden z-2 p-[0.4rem_2.1rem] text-white border-white rounded-md font-semibold group-hover:text-white transition-all duration-700'>
                {cont}
            </button>
        </div>
    )
}

export default BtnDark
