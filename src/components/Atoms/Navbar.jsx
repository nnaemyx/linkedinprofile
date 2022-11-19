import React from 'react'
import Home from '../../images/home 1.svg'
import Notification from '../../images/notify bell 1.svg'
import Bookmark from '../../images/Vector (5).svg'
import Draft from '../../images/draft icon (1) 1.svg'
import Line from '../../images/Line 21.svg'
import Write from '../../images/write blog post 1.svg'
import Line2 from '../../images/Line 10.png'


const Navbar = () => {
  return (
    <div className='pl-6 lg:flex hidden  gap-6'>
      <div className='leading-9 mt-8 space-y-10 w-[17px]'>
        <img src={Home} alt="" />
        <img src={Notification} alt="" />
        <img src={Bookmark} alt="" />
        <img src={Draft} alt="" />
        <img src={Line} alt="" />
        <img src={Write} alt="" />
      </div>

      <div>
        <img src={Line2} alt="" />
      </div>
    </div>
  )
}

export default Navbar