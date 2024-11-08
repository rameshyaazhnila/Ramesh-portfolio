// import React from 'react'
// import {motion} from 'framer-motion'

// const AboutSection = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-center items-center pb-3'>
//       <div className=' h-[300px] lg:h-[500px] w-[300px] lg:w-[600px] min-w-[300px] overflow-hidden'>
//         <img src="/ramesh.jpg" alt="Logo" className='h-full w-full object-cover rounded-full lg:rounded-none' />
//       </div>
//       <div className='flex flex-col item-start justify-center space-y-3'>
//        <div className='min-w-[280px] pt-3'> 
//          <h1 className='text-green-800 font-semibold text-3xl px-5 sm:px-8'>About me</h1>
         
//        </div>
//        <div className='max-w-[550px] md:max-w-[750px] flex flex-col justify-center items-start space-y-3'>
//         <p className='text-white text-start px-5 sm:px-8 md:text-xl'>Lorem ipsum, dolor siadipisicing elit. Voluptatem iusto porro, consectetur non nihil ad corporis eaque est qquia optio minus quis consequatur, totam consectetur voluptatibus deserunt nemo natus vel nesciunt corrupti suscipit</p>
        // <div className='flex gap-3 px-5 sm:px-8 flex-col'>
        //   <h1 className='text-white sm:text-xl'>Experience : <span className='text-green-500'>5 years</span></h1>
        //   <h1 className='text-white sm:text-xl'>Speciality : <span className='text-green-500'>Web Designing & Developement</span></h1>
        //   <h1 className='text-white sm:text-xl'>Address : <span className='text-green-500'>pollachi, india</span></h1>
        //   <h1 className='text-white sm:text-xl'>Email : <span className='text-green-500'>Rameshyaazhnila@gmail.com</span></h1>
        //   <h1 className='text-white sm:text-xl'>Phone : <span className='text-green-500'>+916380499070</span></h1>
        //   <h1 className='text-white sm:text-xl'>Freelance : <span className='text-green-500'>Available</span></h1>
          
        // </div>
  
//         <motion.button whileHover={{ scale: 1.1, backgroundColor:"black", color: "#fff" ,boxShadow: '0px 4px 15px rgba(0, 255, 0, 0.6)'}} whileTap={{ scale: 0.9 }}
//       className="py-2 px-3 mx-5 sm:mx-8 text-[15px] font-semibold text-white bg-green-700 rounded-md cursor-pointer"
//     >
//       View all projects
//     </motion.button>
//       </div>
//       </div>
      
//     </div>
//   )
// }

// export default AboutSection

// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutSection = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-center items-center pb-3'>
//       <motion.div
//         className='h-[300px] lg:h-[500px] w-[300px] lg:w-[600px] min-w-[300px] overflow-hidden'
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <img src="/ramesh.jpg" alt="Logo" className='h-full w-full object-cover rounded-full lg:rounded-none' />
//       </motion.div>

//       <div className='flex flex-col item-start justify-center space-y-3'>
//         <motion.div
//           className='min-w-[280px] pt-3'
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         > 
//           <h1 className='text-green-800 font-semibold text-3xl px-5 sm:px-8'>About me</h1>
//         </motion.div>

//         <motion.div
//           className='max-w-[550px] md:max-w-[750px] flex flex-col justify-center items-start space-y-3'
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           <p className='text-white text-start px-5 sm:px-8 md:text-xl'>
//             Lorem ipsum, dolor si adipisicing elit. Voluptatem iusto porro, consectetur non nihil ad corporis eaque est quia optio minus quis consequatur, totam consectetur voluptatibus deserunt nemo natus vel nesciunt corrupti suscipit.
//           </p>
//           <motion.div
//             className='flex gap-3 px-5 sm:px-8 flex-col'
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                   staggerChildren: 0.2,
//                 },
//               },
//             }}
//           >
//             {[
//               { label: 'Experience', value: '5 years' },
//               { label: 'Speciality', value: 'Web Designing & Development' },
//               { label: 'Address', value: 'Pollachi, India' },
//               { label: 'Email', value: 'Rameshyaazhnila@gmail.com' },
//               { label: 'Phone', value: '+916380499070' },
//               { label: 'Freelance', value: 'Available' },
//             ].map((item, index) => (
//               <motion.h1
//                 key={index}
//                 className='text-white sm:text-xl'
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {item.label} : <span className='text-green-500'>{item.value}</span>
//               </motion.h1>
//             ))}
//           </motion.div>

//           <motion.button
//             whileHover={{
//               scale: 1.1,
//               backgroundColor: 'black',
//               color: '#fff',
//               boxShadow: '0px 4px 15px rgba(0, 255, 0, 0.6)',
//             }}
//             whileTap={{ scale: 0.9 }}
//             className="py-2 px-3 mx-5 sm:mx-8 text-[15px] font-semibold text-white bg-green-700 rounded-md cursor-pointer"
//           >
//             View all projects
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// const AboutSection = () => {
//   const imageRef = useRef(null);
//   const isImageInView = useInView(imageRef, { once: true });

//   const textRef = useRef(null);
//   const isTextInView = useInView(textRef, { once: true });

//   return (
//     <div className='flex flex-col sm:flex-row justify-center items-center pb-3'>
//       <motion.div
//         className='h-[300px] lg:h-[500px] w-[300px] lg:w-[600px] min-w-[300px] overflow-hidden'
//         ref={imageRef}
//         initial={{ opacity: 0 }}
//         animate={isImageInView ? { opacity: 1 } : {}}
//         transition={{ duration: 1 }}
//       >
//         <img src="/ramesh.jpg" alt="Logo" className='h-full w-full object-cover rounded-full lg:rounded-none' />
//       </motion.div>

//       <div className='flex flex-col item-start justify-center space-y-3' ref={textRef}>
//         <motion.div
//           className='min-w-[280px] pt-3'
//           initial={{ x: -100, opacity: 0 }}
//           animate={isTextInView ? { x: 0, opacity: 1 } : {}}
//           transition={{ duration: 1, delay: 0.3 }}
//         > 
//           <h1 className='text-green-800 font-semibold text-3xl px-5 sm:px-8'>About me</h1>
//         </motion.div>

//         <motion.div
//           className='max-w-[550px] md:max-w-[750px] flex flex-col justify-center items-start space-y-3'
//           initial={{ y: 50, opacity: 0 }}
//           animate={isTextInView ? { y: 0, opacity: 1 } : {}}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           <p className='text-white text-start px-5 sm:px-8 md:text-xl'>
//             Lorem ipsum, dolor si adipisicing elit. Voluptatem iusto porro, consectetur non nihil ad corporis eaque est quia optio minus quis consequatur, totam consectetur voluptatibus deserunt nemo natus vel nesciunt corrupti suscipit.
//           </p>
          
//           <motion.div
//             className='flex gap-3 px-5 sm:px-8 flex-col'
//             initial="hidden"
//             animate={isTextInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { staggerChildren: 0.2 },
//               },
//             }}
//           >
//             {[
//               { label: 'Experience', value: '5 years' },
//               { label: 'Speciality', value: 'Web Designing & Development' },
//               { label: 'Address', value: 'Pollachi, India' },
//               { label: 'Email', value: 'Rameshyaazhnila@gmail.com' },
//               { label: 'Phone', value: '+916380499070' },
//               { label: 'Freelance', value: 'Available' },
//             ].map((item, index) => (
//               <motion.h1
//                 key={index}
//                 className='text-white sm:text-xl'
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={isTextInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5 }}
//               >
//                 {item.label} : <span className='text-green-500'>{item.value}</span>
//               </motion.h1>
//             ))}
//           </motion.div>

//           <motion.button
//             whileHover={{
//               scale: 1.1,
//               backgroundColor: 'black',
//               color: '#fff',
//               boxShadow: '0px 4px 15px rgba(0, 255, 0, 0.6)',
//             }}
//             whileTap={{ scale: 0.9 }}
//             className="py-2 px-3 mx-5 sm:mx-8 text-[15px] font-semibold text-white bg-green-700 rounded-md cursor-pointer"
//           >
//             View all projects
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center pb-3'>
      <motion.div
        className='h-[300px] lg:h-[500px] w-[300px] lg:w-[600px] min-w-[300px] overflow-hidden'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <img src="/ramesh.jpg" alt="Logo" className='h-full w-full object-cover rounded-full lg:rounded-none' />
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
          <p className='text-white text-start px-5 sm:px-8 md:text-xl'>
            Lorem ipsum, dolor si adipisicing elit. Voluptatem iusto porro, consectetur non nihil ad corporis eaque est quia optio minus quis consequatur, totam consectetur voluptatibus deserunt nemo natus vel nesciunt corrupti suscipit.
          </p>
          <div className='flex gap-3 px-5 sm:px-8 flex-col'>
          <h1 className='text-white sm:text-xl'>Experience : <span className='text-green-500'>5 years</span></h1>
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
