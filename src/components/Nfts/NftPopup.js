import React from 'react'
import {IoMdClose} from 'react-icons/io'
import ETH from '../../assets/ETH.PNG'
import share from '../../assets/share.svg'
import { nftrobot } from '../../assets'

const NftPopup = ({setShowModal}) => {
  return (
    <>
    <div className="justify-center gradient items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[100%] mobile:w-[90%] my-6 mx-auto max-w-[1000px]">
            <div className="w-[85%] md:w-[85%] mx-auto border-0 rounded-lg relative bg-[#171717] outline-none focus:outline-none">
                <button
                className="absolute right-[4px] -top-10 md:right-0 text-yellow background-transparent font-bold uppercase text-2xl outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
                >
                <IoMdClose size={24} />
                </button> 
                <div className='w-full p-3   mx-auto h-fit flex flex-col md:flex-row'>
                    <div className='w-[100%] h-[250px] mobile:h-[340px] md:h-full mx-auto'>
                        <img className='h-full w-full' src={nftrobot} alt="robot" />
                    </div>
                    <div className='w-[100%] px-3'>
                        <h1 className="md:text-[26px] font-audio ">
                            <span className="block text-white">Unbroken #5692</span>{" "}
                        </h1>
                        <p className='card-font text-white mt-3 font-sans text-[12px]  md:text-[16px]'>
                       <span className=' hidden sm:block mb-4'> Unbroken NFTs is a collection that tells the fictional story of fifteen (15) unique characters from
diverse cultural backgrounds. They were victims of bullying who transitioned to become
successful by overcoming the pains they went through. This fictional story was created from the
results of our survey, which was conducted in February 2022.</span>

Unbroken NFTs is a collection that tells the fictional story of fifteen (15) unique characters from
diverse cultural backgrounds. They were victims of bullying who transitioned to become
successful by overcoming the pains they went through. This fictional story was created from the
results of our survey, which was conducted in February 2022.
                        </p>
                        <div>
                            <div className='flex  my-5 item-center'>
                                <img className='w-[6%] h-[6%] my-auto' src={ETH} alt='eth' />
                                <div className='text-yellow text-[18px] md:text-[20px] mx-2 my-auto'>20.0002</div>
                                <div className='text-white text-[12px] md:text-[14px] card-font font-sans my-auto'>$30,008.35</div>
                            </div>
                            <button className="w-full md:w-fit flex justify-center text-[12px] md:text-[14px] bg-yellow px-1.5 md:px-2 py-3 text-center rounded-[5px]">
                                View on Opensea
                                <img className='md:ml-3 ml-2' src={share} alt="share" />
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