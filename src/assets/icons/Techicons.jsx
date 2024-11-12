import React, { useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Techicons() {
  useEffect(() => {
        
    AOS.init({
      duration: 1000, 
      once: false, 
      offset: 90, 
    });
  }, []);
  return (
    <div className='flex justify-center' data-aos="fade-left">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4 place-items-center">
        <FaHtml5 size={40} color="#E34F26" className='hover:scale-125 transition-transform duration-150'/>
        <FaCss3Alt size={40} color="#1572B6" className='hover:scale-125 transition-transform duration-150'/>
        <FaJs size={40} color="#F7DF1E" className='hover:scale-125 transition-transform duration-150' data-aos="fade-left"/>
        <FaReact size={40} color="#61DBFB" className='hover:scale-125 transition-transform duration-150' data-aos="fade-left"/>
        <SiTailwindcss size={40} color="#38B2AC" className='hover:scale-125 transition-transform duration-150' data-aos="fade-left"/>
        <GrNode size={40} color="green" className='hover:scale-125 transition-transform duration-150' data-aos="fade-left"/>
        <img src="/express.png" alt="Express.js" style={{ width: 40, height: 40 }} className='hover:scale-125 transition-transform duration-150'/> 
        <SiMongodb size={40} color="#47A248" className='hover:scale-125 transition-transform duration-150' data-aos="fade-right"/>
        <FaGithub size={40} color="white" className="hover:scale-125 transition-transform duration-150" data-aos="fade-left" />
        <img src="/python.png" alt="Express.js" style={{ width:45}} className='hover:scale-125 transition-transform duration-150'/> 
      </div>
    </div>
  );
}

export default Techicons;
