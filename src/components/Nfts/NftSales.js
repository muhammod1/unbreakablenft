import React from 'react'

const NftSales = () => {
  return (
    <div className='py-32 bg-[black]'>
        <div className='w-[90%] mx-auto p-5 md:p-5 bg-yellow rounded-md'>
            <div className='flex flex-col md:flex-row space-y-3 md:space-x-8 item-center'>
                <h1 className="w-full md:w-[20%] my-auto text-[28px] font-audio ">
                    <span className="block">Buy an Unbroken</span>{" "}
                </h1>
                <p className="w-[95%] md:w-[50%] text-[16px] my-auto">
                    Welcome to our NFT gallery. With your support, we will execute our anti-bullying initiatives.
                </p>
                <button className='my-auto md:ml-auto bg-[#262626] py-3 px-2 text-yellow text-[14px] rounded'>
                    View on Opensea
                </button>
            </div>
        </div>
    </div>
  )
}

export default NftSales