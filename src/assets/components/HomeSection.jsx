import React from 'react';
import Typewriter from 'react-typewriter-effect';
import { SocialIcon } from 'react-social-icons';
import { FiPhone } from 'react-icons/fi';
import {motion} from 'framer-motion'


const HomeSection = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center'>
      <div className=' h-[300px] lg:h-[500px] w-[300px] lg:w-[600px] min-w-[300px] overflow-hidden'>
        <img src="/ramesh.jpg" alt="Logo" className='h-full w-full object-cover rounded-full lg:rounded-none' />
      </div>
      <div className='flex flex-col item-start justify-center space-y-2'>
       <div className='min-w-[280px] pt-3'>
         <h1 className='text-white font-semibold text-2xl px-5 sm:px-8'>Hey, I'm <span className='text-green-700 text-[30px]'>Ramesh</span></h1>
         <p className='text-white font-semibold text-2xl px-5 sm:px-8'>I'm a <span className='text-green-700 text-[30px] inline-flex'>Web<span>&nbsp;</span><Typewriter
                textStyle={{ color: 'inherit' }}
                startDelay={100}
                cursorColor="white"
                multiText={[' Developer', 'Designer']}
                multiTextDelay={1000}
                typeSpeed={100}
                deleteSpeed={80}
                multiTextLoop
               /></span></p>
       </div>
       <div className='max-w-[550px] md:max-w-[750px] flex flex-col justify-center items-center sm:items-start space-y-5'>
        <p className='text-white text-start px-5 sm:px-8 md:text-xl'>A freelance web designer dedicated to crafting stunning websites that captivate audiences and elevate brands. Whether you need a responsive design, an e-commerce solution, or a complete website revamp, I’m here to transform your ideas into impactful digital experiences.</p>
        <div className='flex gap-5 sm:px-8 relative'>
          <a href="tel:+916380499070" target="_blank" rel="noopener noreferrer"><FiPhone size={35} className='p-2 bg-green-500 text-white hover:border-4 hover:border-green-700 rounded-full size-12'/></a>
          <SocialIcon url="https://wa.me/+916380499070" className='hover:border-4 hover:border-green-700 rounded-full'/>
          <SocialIcon url="mailto:rameshyaazhnila@gmail.com" network="email" className="hover:border-4 hover:border-green-700 rounded-full"/>

          <SocialIcon url="https://www.instagram.com/rameshkumarramesh635/profilecard/?igsh=amZxOHd3b3pvemZi" className='hover:border-4 hover:border-green-700 rounded-full'/>
        </div>
  
        <motion.button
  whileHover={{
    scale: 1.1,
    backgroundColor: 'black',
    color: '#fff',
    boxShadow: '0px 4px 15px rgba(0, 255, 0, 0.6)', // Green shadow effect
  }}
  whileTap={{ scale: 0.9,boxShadow:'0px 4px 15px rgba(0, 255, 0, 0.6)'}}
  className="py-2 mb-0 px-3 sm:mx-8 bg-green-700 text-[15px] font-semibold text-white rounded-md cursor-pointer"
>
  Connect with me
</motion.button>

      </div>
      </div>
      
    </div>
  );
}

export default HomeSection;


