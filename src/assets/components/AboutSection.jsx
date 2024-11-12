import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center pb-3'>
      <motion.div
        className='h-[270px] lg:h-[500px] lg:w-[600px] min-w-[300px] overflow-hidden'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <img src="/web.jpeg" alt="Logo" className='py-9 lg:py-28 object-cover w-full h-full' />
      </motion.div>

      <div className='flex flex-col item-start justify-center space-y-3'>
        <motion.div
          className='min-w-[280px] pt-3'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        > 
          <h1 className='text-green-800 font-semibold text-3xl px-5 sm:px-8'>About me</h1>
        </motion.div>

        <motion.div
          className='max-w-[550px] md:max-w-[750px] flex flex-col justify-center items-start space-y-3'
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <p className='text-white text-start px-5 sm:px-8 md:text-xl'>A freelance web designer with a passion for creating meaningful digital solutions. I specialize in developing responsive, user-friendly websites that align perfectly with your business goals and leave a lasting impression on your audience.</p>
          <div className='flex gap-3 px-5 sm:px-8 flex-col'>
          {/* <h1 className='text-white sm:text-xl'>Experience : <span className='text-green-500'>5 years</span></h1> */}
          <h1 className='text-white sm:text-xl'>Speciality : <span className='text-green-500'>Web Designing & Developement</span></h1>
          <h1 className='text-white sm:text-xl'>Address : <span className='text-green-500'>pollachi, india</span></h1>
          <h1 className='text-white sm:text-xl'>Email : <span className='text-green-500'>Rameshyaazhnila@gmail.com</span></h1>
          <h1 className='text-white sm:text-xl'>Phone : <span className='text-green-500'>+916380499070</span></h1>
          <h1 className='text-white sm:text-xl'>Freelance : <span className='text-green-500'>Available</span></h1>
          
        </div>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: 'black',
              color: '#fff',
              boxShadow: '0px 4px 15px rgba(0, 255, 0, 0.6)',
            }}
            whileTap={{ scale: 0.9 }}
            className="py-2 px-3 mx-5 sm:mx-8 text-[15px] font-semibold text-white bg-green-700 rounded-md cursor-pointer"
          >
            View all projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
