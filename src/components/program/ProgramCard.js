import React, { useState, useEffect } from 'react'

import { plus } from "../../assets";
import ProgramImage from './ProgramImage';


const ProgramCard = ({ schoolDetails }) => {
  const [showImage, setShowImage] = useState(false);
  
  return (
    <div className='bg-[#0C0B09] pt-[30px]'>
      <div className='px-[5%] w-screen'>
        {schoolDetails.map(data => (
          <div key={data.id} className='pb-[60px]  flex flex-col justify-center w-full'>
            <div className='my-auto'>
              <img src={data.number} alt="number" />
              <p className='text-[#737373] my-2'>{data.institute}</p>
            </div>
            <div className=' my-5  flex flex-col justify-between'>
              <div className='w-full h-[260px] rounded-lg relative overflow-hidden' >
                <img className='w-full h-full ' src={data.bgImage} alt="number" />
                <div className='absolute  h-[85%] w-fit flex flex-col justify-between top-[7.5%] left-[10%]'>
                  <img className='w-fit' src={data.logo} alt="number" />
                  <div>
                    <p className='text-white font-bold text-[24px]'>{data.imgTitle}</p>
                    <p className='text-white text-[12px]'>{data.location}</p>
                  </div>
                </div>
              </div>
              <div className='my-4'>
                <p className='text-yellow text-[14px] '>{data.title}</p>
                <div className='text-white text-[12px] mt-2'>{data.desc}</div>
                <div className='text-[#E5E5E5] mt-2 text-[11px] flex justify-between'>
                  <span className='bg-[#171717] p-2 rounded-full' >{data.prefrence.title1}</span>
                  <span className='bg-[#171717] p-2 rounded-full'>{data.prefrence.title2}</span>
                  <span className='bg-[#171717] p-2 rounded-full'>{data.prefrence.title3}</span>
                </div>
              </div>
            </div>
            <div className=''>
              <button 
                // onClick={() => setShowImage(false)} 
                className='w-full flex gap-2 justify-center'>
                <img className=' w-[20px]' src={plus} alt="number" />
                <span className='md:hidden text-white font-pop text-[14px]'>see more</span>
              </button>
            </div>

            {/* image Gallery */}

            <ProgramImage />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramCard