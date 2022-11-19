import React from 'react'
import Navbar from '../Atoms/Navbar'
import Blog from '../Atoms/Blog'
import Searchblog from '../Atoms/Searchblog'



const Blogpage = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-4'>
      <div>
        <Navbar/>
      </div>

      <div className='-mt-4'>
        <Blog/>
      </div>

      <div>
        <Searchblog/>
      </div>
    </div>
  )
}

export default Blogpage