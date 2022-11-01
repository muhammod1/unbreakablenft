import React, {useState} from 'react'

import ProgramModal from './PartnershipModal'


const PartnershipSales = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <div className='w-full mx-auto p-5 bg-yellow rounded-md'>
            <div className='flex flex-col gap-4 mobile:flex-row item-center justify-between'>
                <h1 className="w-full md:w-[40%] mobile:w-[35%] text-[24px] font-audio ">
                    <span className="block">Partner with us</span>{" "}
                </h1>
                <p className="h-fit my-auto text-[13px]">
                    The initial sale has sold out. To get your Unbroken NFT, check out the collection on OpenSea.
                </p>
                <button 
                    onClick={() => setShowModal(true)}
                    className='h-fit md:w-[34%] mobile:w-[35%] my-auto bg-[#262626] py-2 px-2 text-yellow text-[13px] rounded'
                >
                    Send proposal
                </button>
            </div>
        </div>

        {showModal ? (
            <ProgramModal setShowModal={setShowModal} />
        ) : null}
    </div>
  )
}

export default PartnershipSales