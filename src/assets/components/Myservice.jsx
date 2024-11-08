import React, { useEffect } from 'react'
import {FaLaptopCode,FaBullhorn, FaChartLine ,FaPalette,FaMobileAlt,FaChalkboardTeacher} from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Myservice = () => {
    useEffect(() => {
        
        AOS.init({
          duration: 1000, 
          once: false, 
          offset: 150, 
        });
      }, []);
  return (
    <div className='text-white flex flex-col items-center justify-center'>
        <div>
            <h1 className='text-3xl font-semibold mb-6 text-green-800'>My Services</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-4 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaLaptopCode size="2em" color="#007ACC" />
                <h1>Web developement</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipi elit. Volam! Culpa ipsam molestosam sunt!</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-4 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaChartLine size="2em" color="#FF9800" />
                <h1>Web developement</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipi elit. Volam! Culpa ipsam molestosam sunt!</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-4 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
            <FaChalkboardTeacher size="2em" color="#3E92CC" /> 
                <h1>Web developement</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipi elit. Volam! Culpa ipsam molestosam sunt!</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-4 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaBullhorn size="2em" color="#E91E63" />
                <h1>Web developement</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipi elit. Volam! Culpa ipsam molestosam sunt!</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-4 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaMobileAlt size="2em" color="#4CAF50" /> 
                <h1>Web developement</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipi elit. Volam! Culpa ipsam molestosam sunt!</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center justify-center w-[270px] bg-black space-y-2 border p-4 overflow-hidden rounded-lg hover:shadow-[0_0_25px_5px_rgba(0,255,0,0.5)] hover:scale-[1.1] transition-transform'>
                <FaPalette size="2em" color="#8e44ad" />
                <h1>Web developement</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipi elit. Volam! Culpa ipsam molestosam sunt!</p>
            </div>
        </div>
    </div>
  )
}

export default Myservice