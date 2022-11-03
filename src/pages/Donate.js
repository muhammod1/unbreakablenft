import React from 'react'
import DonateForm from '../components/Donate/DonateForm'
import { DonateHero } from '../components/Donate/DonateHero'

const Donate = () => {
  return (
    <div className="w-[90%] mobile:w-[95%] max-w-[1220px] mx-auto">
      <DonateHero />
      <DonateForm />
    </div>
  )
}

export default Donate