import React, {useState} from 'react'

import { cardData } from "../../assets/NftsData";
import NftPopup from './NftPopup';

const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='mt-[-20px] bg-[black]'>
        <div className='flex justify-center my-20 pt-8'>
          <div className='rounded-full p-1 inline-flex bg-[#171717]'>
            <button className='bg-yellow text-black font-bold py-2 px-4 rounded-full'>
              Broken
            </button>
            <button className=' text-[#737373] bg-[#171717] font-bold py-2 px-4 rounded-full'>
              Unbroken
            </button>
          </div>
        </div>

        {/* mapping through an object to display the cards   */}
        
        <div className="flex gap-8 w-[90%] mx-auto flex-wrap justify-center">
            {cardData.map(({ icon, title, desc, id }) => (
                <button
                  key={id}
                  className="text-black relative rounded"
                  onClick={() => setShowModal(true)}
                >
                  <div className='nftcard hover:scale-105 bg-nftCard w-[300px] h-[320px] bg-blue-700 rounded-2xl overflow-hidden relative'>
                      <p className="text-sm bg-yellow mt-3 absolute mr-4 top-0 right-0 px-[8px] py-[6px] rounded-2xl">{desc}</p>
                      <p className="text-white mt-2 absolute bottom-0 mb-4 ml-4">{title}</p>
                      <img className='absolute bottom-0 right-0 mr-4 mb-4 w-[6%]' src={icon} alt="icon" />
                  </div> 
                </button>      
              ))}
        </div>

        {/* Modal Card  */}
        {showModal ? (
          <NftPopup setShowModal={setShowModal}/>
        ) : null}
      </div>
    </>
  )
}

export default Cards