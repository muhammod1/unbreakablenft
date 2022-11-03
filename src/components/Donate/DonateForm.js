import React from 'react'

import { Form } from '../UI/Form';

import { lock } from '../../assets';

const DonateForm = () => {
  return (
    <div className='mt-20 flex item-start'>
        <div className='w-[55%]'>
            <div class="flex items-center m-b-2">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 accent-yellow h-4 rounded"/>
                <label for="default-checkbox" className="ml-2 text-[14px] text-[#D4D4D4] ">Donate anonymously</label>
            </div>
            <h3 className="text-white font-audio text-2xl my-3">
                Personal information
            </h3>
            <p className='text-[14px] text-grey_p'>All donation payments are secured and encrypted</p>
            <Form
                id='fullname' 
                name="fullname" 
                type="text"
                placeholder="your legal name" 
                label="Full name"
            />
            <Form
                id='email' 
                name="email" 
                type="email"
                placeholder="We would love to discuss further the terms of partnership" 
                label="Email address"
            />
            <h3 className="text-white font-audio text-2xl my-3 mt-14 flex item-center">
               <img src={lock} alt="lock" />
               <span className='pl-3'>Payment methods</span>
            </h3>
            <p className='text-[14px] text-grey_p'>All donation payments are secured and encrypted</p>
            <Form
                id='number' 
                name="number" 
                type="number"
                placeholder="200,000" 
                label="Donation amount"
            /> 
        </div>
    </div>
  )
}

export default DonateForm