import React from 'react'
import Aboutsection from '../Atoms/Aboutsection'
import Profilesection from '../Atoms/Profilesection'
import Recentblog from '../Atoms/Recentblog'


const FirstSection = () => {
  return (
    <div className=''>
      <Profilesection />
      <Aboutsection />
      <Recentblog/>
    </div>
  )
}

export default FirstSection