import React from 'react'
import Searchslider from './Searchslider'
import Staffpost from './Staffpost'
import Trendingpost from './Trendingpost'

const Searchblog = () => {
  return (
    <div className='bg-white lg:w-[113%] h-[1000px]'>
      <div className='text-center hidden lg:block'>
        <input type="text" placeholder="&#x1F50E;&#xFE0E; Search for blog post..." className='rounded-full focus:outline-none border-[black] border-2 mt-4 py-2 w-[18rem]' />
      </div>


      <div>
        <Staffpost />
      </div>

      <div>
        <Trendingpost/>
      </div>

      <div>
        <Searchslider/>
      </div>

    </div>
  )
}

export default Searchblog