import React from 'react'

const NftSales = () => {
  return (
    <div className='py-32 bg-black'>
        <div className='w-[90%] mx-auto p-7 md:p-5 sm:p-4 bg-yellow rounded-md'>
            <div className='flex md:flex-row sm:flex-col space-x-8 md:space-x-6 sm:space-x-0 item-center'>
                <h1 className="w-[20%] md:w-[20%] sm:w-full my-auto sm:my-3 sm:text-[28px] md:text-[28px] font-audio ">
                    <span className="block">Buy an Unbroken</span>{" "}
                </h1>
                <p className="w-[50%] md:w-[50%] sm:w-[85%] text-[16px] flex-auto my-auto sm:mx-0">
                    Welcome to our NFT gallery. With your support, we will execute our anti-bullying initiatives.
                </p>
                <button className='sm:my-4 md:my-auto my-auto ml-auto md:ml-auto sm:ml-0 bg-[#262626] py-3 px-3 text-yellow text-[16px] rounded'>
                    View on Opensea
                </button>
            </div>
        </div>
    </div>
  )
}

export default NftSales