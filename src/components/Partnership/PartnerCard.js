import React from 'react'

import { cctv, mic, board } from '../../assets'

const PartnerCard = () => {
    const partnerCard = [
        {
            img: cctv,
            title: "CCTVs",
            desc: "Increase safety and security of students by installing CCTVs in high schools in Nigeria.",
        },
        {
            img: board,
            title: "Story boards",
            desc: "Strategically place  manual “promise boards” on some school campuses for positive affirmations.",
        },
        {
            img: mic,
            title: "Campaigns",
            desc: "Partner with organizations to create sensitization programmes, seminars and essay competitions among students.",
        },

      ]
  return (
    <div className='mt-5'>
        <div className='flex flex-col mobile:flex-row flex-wrap md:justify-between'>
        {
          partnerCard.map(( card, index) => {
            return(
              <div className="my-[20px] mobile:w-[50%] md:w-[30%]" key={index}>
                <img className='w-fit ' src={card.img} alt='' />
                <p className='text-yellow text-[20px] my-3 font-bold'>{card.title}</p>
                <p className='text-[#D4D4D4] text-[13px]'>{card.desc}</p>
              </div>
            )
          })
        }
        </div>
        <button className='mt-[40px] w-full md:w-[30%] mobile:w-[30%] my-auto bg-yellow py-2 px-2 text-[13px] rounded'>
          See projects
        </button>
    </div>
  )
}

export default PartnerCard