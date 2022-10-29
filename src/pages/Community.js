import React from 'react'
import { faceb, instag, linkd, twit } from '../assets'

const Community = () => {
  return (
    <>
    {/* community section  */}
    <div className="mt-14 mx-6 md:mx-20 flex flex-col">
    <p className="text-[#737373] text-lg">Our Community</p>
    <h3 className="text-head_white font-audio text-[40px] sm:text-7xl mt-2">
      <span className="block 4xl:inline">Join other Unbrokens</span> around the world.
    </h3>
    <div className="mt-16 max-w-[534px] ">
        <h3 className="font-audio text-2xl  md:text-2xl text-head_white">
        Follow us on social media
        </h3>
        <p className="text-grey_p mt-2 ">
        Keep up with all our activities and join other Unbrokens around the world!
        </p>
      </div>
      <div className="mt-4 max-w-[534px] flex mx-[-10px]  ">
        <div className="mx-2">
            <img src={twit} alt="instagram"/>
        </div>
        <div className="mx-2">
            <img src={linkd} alt="linkdln"/>
        </div>
        <div className="mx-2">
        <img src={instag} alt="instagram"/>
        </div>
        <div className="mx-2">
        <img src={faceb} alt="facebook"/>
        </div>
      </div>
  </div>
  </>
  )
}

export default Community