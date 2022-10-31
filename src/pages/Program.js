import React, { useState} from 'react'
import ProgramCard from '../components/program/ProgramCard'
import ProgramHero from '../components/program/ProgramHero'
import Pagination from '../components/program/paginationPro'

import { schoolDetails } from "../assets/program";

const Program = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  
  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = schoolDetails.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  return (
    <div>
      <ProgramHero />
      <ProgramCard schoolDetails={currentPosts} />
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={schoolDetails.length} 
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        paginate={paginate} 
      />
    </div>
  )
}

export default Program