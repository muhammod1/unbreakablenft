import React from 'react'

import { rightArrow, leftArrow } from '../../assets';
const pagination = ({ currentPage, postsPerPage, totalPosts, paginate,paginateFront, paginateBack }) => {
    const pageNumbers = [];

    for( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className='flex bg-[#0C0B09] py-[30px]'>
        <nav
          className='mx-auto relative z-0 inline-flex shadow-sm '
          aria-label='Pagination'
        >
            <a
                onClick={() => { paginateBack()}}
                href='#'
                className='relative inline-flex mr-3 items-center px-2 py-2 text-sm font-normal text-white hover:opacity-50'
            >
                <span className='inline-flex'> 
                    <img className='mr-2' src={rightArrow} alt='a' />
                    Previous
                </span>
            </a>

            <ul className='flex mx-auto' >
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a
                            onClick={() => {paginate(number)}}
                            href='#'
                            className={
                            currentPage === number
                                ? "bg-yellow rounded-md  text-[black] hover:opacity-50 relative inline-flex items-center px-3 py-2 text-sm font-medium"
                                : "bg-transparent  text-white hover:opacity-50 relative inline-flex items-center px-3 py-2 text-sm font-medium"
                            }
                        >
                           {`0${number}`}
                        </a>
                    </li>
                ))}
            </ul>
            <a
                onClick={() => { paginateFront()}}
                href='#'
                className='relative inline-flex items-center ml-3 px-2 py-2 text-sm font-normal text-white hover:opacity-50'
            >
                <span className='inline-flex'> 
                    Next
                    <img className='ml-2' src={leftArrow} alt='a' />
                </span>
          </a>
        </nav>
    </div>
  )
}

export default pagination