import React from 'react'

import { Link } from 'react-router-dom'

export const DonateHero = () => {
  return (
    <div className="w-full mt-[60px] mobile:mt-[80px]  mx-auto md:mx-0 md:w-[85%]">
      <h3 className="text-white font-audio text-2xl small_l:text-[265%] small_l:leading-[121%]  md:text-[65px]">
        Make a <span className="block mobile:inline-block">Donation</span>{" "}
      </h3>
      <p className="mt-[25px] w-full small_l:w-[95%] md:w-3/5 text-[18px] text-grey_p">
        Bullying and any form of oppression is a global menace, which has to be treated with a sense of urgency.
      </p>
      <Link to="/">
        <p className='mt-3 text-yellow text-[18px]'>Learn more</p>
      </Link>
    </div>
  )
}