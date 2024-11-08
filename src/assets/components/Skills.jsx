import React from 'react'
import Techicons from '../icons/Techicons'

const Skills = () => {
  
  return (
    <div className='text-green-400 w-full my-4 '>
        <div className='flex flex-col justify-center items-center mt-8'>
            <h1 className="text-3xl text-green-800 relative font-semibold hover:text-green-300 sm:text-green-700 cursor-pointer group hover:shadow-lg transition-all">Skills<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-[85px] sm:w-[85px]"></span></h1>
            <Techicons/>
        </div>
    </div>
  )
}

export default Skills