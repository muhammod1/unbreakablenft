import React from 'react'

import ETH from '../../assets/ETH.PNG'
import share from '../../assets/share.svg'
import { nftrobot } from '../../assets'

const NftPopup = ({setShowModal}) => {
  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0  rounded-lg relative flex flex-col w-full bg-[#171717] outline-none focus:outline-none">
                <button
                className="absolute right-0 text-yellow background-transparent font-bold uppercase px-6 py-2 text-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
                >
                X
                </button> 
                <div className='w-full mx-auto h-fit flex '>
                    <div className='w-[45%]'>
                        <img className='h-full' src={nftrobot} alt="robot" />
                    </div>
                    <div className='w-[55%] px-5 my-3 pb-3'>
                        <h1 className="mt-3 md:text-[28px] font-audio ">
                            <span className="block text-white">Unbroken #5692</span>{" "}
                        </h1>
                        <p className='text-white font-light text-[14px]'>
                            Unbroken NFTs is a collection that tells the fictional story of fifteen (15) unique characters from
                            diverse cultural backgrounds. They were victims of bullying who transitioned to become
                            successful by overcoming the pains they went through. This fictional story was created from the
                            results of our survey, which was conducted in February 2022.
                        </p>
                        <p className='text-white mt-5 font-light text-[14px]'>
                            Unbroken NFTs is a collection that tells the fictional story of fifteen (15) unique characters from
                            diverse cultural backgrounds. They were victims of bullying who transitioned to become
                            successful by overcoming the pains they went through. This fictional story was created from the
                            results of our survey, which was conducted in February 2022.
                        </p>
                        <div>
                            <div className='flex  my-2 item-center'>
                                <img className='w-[4%] h-[3%] my-auto' src={ETH} alt='eth' />
                                <div className='text-yellow  text-[24px] mx-2 my-auto'>20.0002</div>
                                <div className='text-white font-normal my-auto'>$30,008.35</div>
                            </div>
                            <button className="flex max-w-xs bg-yellow px-4 py-2 text-center  rounded-md shadow">
                                View on Opensea {" "}
                                <img className='ml-auto pl-5' src={share} alt="share" />
                            </button>
                        </div>
                    </div>
                </div>                  
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </> 
  )
}

export default NftPopup