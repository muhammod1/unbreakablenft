import React from 'react'

import { programbg } from '../../assets';

const PartnershipModal = ({ setShowModal }) => {
  return (
    <div>
        <div className="justify-center gradient items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[80%] md:w-[60%] lg:w-[70%] my-6 mx-auto max-w-3xl">
            <div className="w-[100%] md:w-[100%] mx-auto border-0 rounded-lg relative bg-[#171717] outline-none focus:outline-none">
                <div
                    className="py-2 pr-4 text-end text-yellow background-transparent text-[14px] outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                >
                    close <span className='pl-1'>X</span>
                </div> 
                <div className='w-full px-3 pb-3 mx-auto h-fit flex flex-row-reverse'>
                    <div className='hidden mobile:block partner__bg w-1/2 mx-auto'/>
                    <div className='w-1/2 px-2'>
                        <h1 className="text-[22px] font-audio">
                            <span className="block text-yellow">Partner with us</span>{" "}
                        </h1>
                        <p className='text-white mt-1 font-sans text-[14px]'>
                            We would like to make a difference with you by our side. Join us
                        </p>
                        <div>
                            <div className='flex  my-2 item-center'>
                                <div className='text-yellow text-[18px] md:text-[20px] mx-2 my-auto'>20.0002</div>
                                <div className='text-white text-[12px] md:text-[14px] card-font font-sans my-auto'>$30,008.35</div>
                            </div>
                            <button className="w-full md:w-fit flex justify-center text-[12px] md:text-[14px] bg-yellow px-1.5 md:px-2 py-1.5 text-center rounded-md">
                                View on Opensea
                            </button>
                        </div>
                    </div>
                </div>                  
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

export default PartnershipModal;