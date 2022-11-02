import React, { useState } from 'react'

import { leftArrow, rightArrow, cancle } from '../../assets';

import { motion } from "framer-motion";

import { galleryImages } from '../../assets/program';

const ProgramImage = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)


  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-[40px]"
    >
       {openModal && 
          <div className='sliderWrap'>
            {/* <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  /> */}
            <img  className='btnPrev' onClick={prevSlide} src={leftArrow} alt="left" />
            <img  className='btnNext' onClick={nextSlide} src={rightArrow} alt="left" />
            <div className='fullScreenImage'>
              <div className='btnClose text-[40px] md:text-[60px] p-2' onClick={handleCloseModal}>X</div>
              <img src={galleryImages[slideNumber].img} alt='' />
            </div>
          </div>
        }

        <div className="flex flex-col gap-3 md:grid md:grid-rows-2 md:grid-cols-4 md:grid-flow-col md:gap-2 transition duration-700 ease-in-out">
          {
            galleryImages.map((slide, index) => {
              return(
                <div 
                className={slide.className} 
                  key={index}
                  onClick={ () => handleOpenModal(index) }
                >
                  <img className='h-full w-fit' src={slide.img} alt='' />
                </div>
              )
            })
          }
        </div>
    </motion.div>
  );
}

export default ProgramImage;