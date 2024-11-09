import React, { useEffect } from 'react'
import {FaLaptopCode,FaBullhorn, FaChartLine ,FaPalette,FaMobileAlt,FaChalkboardTeacher} from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Myservice = () => {
    useEffect(() => {
        
        AOS.init({
          duration: 1000, 
          once: false, 
          offset: 100, 
        });
      }, []);
  return (
    <div className='text-white flex flex-col items-center justify-center'>
        <div>
            <h1 className='text-3xl font-semibold mb-6 text-green-800 hover:scale-[1.2] transition-transform'>My Services</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-3 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaLaptopCode size="2em" color="#007ACC" />
                <h1 className='text-yellow-300 font-bold'>Web developement</h1>
                <p>Tailored solutions that match your brand, goals, and audience.</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-3 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaMobileAlt size="2em" color="#4CAF50" />
                <h1 className='text-yellow-300 font-bold'>Responsive Web Design</h1>
                <p>Ensuring your site looks great on all devices, from desktops to smartphones</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-3 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
            <FaChalkboardTeacher size="2em" color="#3E92CC" /> 
                <h1 className='text-yellow-300 font-bold'>Content Management Systems (CMS)</h1>
                <p>User-friendly systems for easy content updates.</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-3 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaChartLine size="2em" color="#FF9800" />
                <h1 className='text-yellow-300 font-bold'>SEO Services</h1>
                <p>Strategies that enhance visibility and drive organic traffic to your site.</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-3 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaMobileAlt size="2em" color="#4CAF50" /> 
                <h1 className='text-yellow-300 font-bold'>E-commerce Solutions</h1>
                <p> Perfect for businesses looking to sell products online, featuring secure payment gateways and user-friendly interfaces.</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-3 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaPalette size="2em" color="#8e44ad" />
                <h1 className='text-yellow-300 font-bold'>Ongoing Support and Maintenance</h1>
                <p>Comprehensive support to keep your website running smoothly.</p>
            </div>
        </div>
    </div>
  )
}

export default Myservice