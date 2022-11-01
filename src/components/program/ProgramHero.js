import React from 'react'

const ProgramHero = () => {
  return (
    <div className='relative'>
        <div className='bg__program h-[525px] md:h-[525px] w-full'>
            <div className='w-[80%] mx-auto md:mx-0 md:w-1/2 absolute top-[35%] md:top-[25%] left-[5%]'>
                <h3 className="text-white font-audio text-[265%] leading-[91%]  md:text-[82px]">
                    <span className="block">Unbroken Programmes</span>{" "}
                </h3>
                <p className="mt-[25px] w-full md:w-4/5 text-grey_p">
                    Here we tell the stories of the Unbrokens who remained resilient in the face of bullying
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProgramHero