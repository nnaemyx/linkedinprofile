import React from 'react'

// import icons 
import { BiCodeAlt } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb'



const Skills = () => {
  return (
    <div className='bg-white mt-6 rounded-md'>
      <div className='lg:w-[830px] py-8  lg:pl-[2rem] pl-[1rem] lg:h-[150px]'>
        <h1 className='font-semibold text-[17px]'>Skills and Portfolio</h1>
        <div>
          <ul className='text-[12.17px] lg:text-[14px]'>
            <li className='flex  items-center gap-2'><span><BiCodeAlt/></span>Node.js, React.js, Javascript, Tailwind, Python.</li>
            <a href="google.com"><li className='flex gap-2 items-center'><span><AiOutlineGithub/></span>Github</li></a>
            <a href="google.com"><li className='flex gap-2 items-center'><span><TbWorld/></span>www.website.com</li></a>
         </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills