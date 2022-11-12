import React from 'react'
import Aboutsection from '../Atoms/Aboutsection'
import Profilesection from '../Atoms/Profilesection'
import Recentblog from '../Atoms/Recentblog'
import Reviews from '../Atoms/Reviews'
import Skills from '../Atoms/Skills'


const FirstSection = () => {
  return (
    <div className='xl:w-[830px] lg:w-[67%] '>
      <Profilesection />
      <Aboutsection />
      <Recentblog />
      <Skills />
      <Reviews />
      
    </div>
  )
}

export default FirstSection