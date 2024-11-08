// import React from 'react';
// import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub } from 'react-icons/fa';
// import { SiTailwindcss, SiMongodb } from 'react-icons/si';
// import { GrNode } from 'react-icons/gr';


// function Techicons() {
//   return (
//     <div className='flex justify-center'>
//     <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 space-y-2 space-x-3 lg:grid-cols-10 place-items-center p-4 sm:w-full overflow-hidden">
//       <FaHtml5 size={40} color="#E34F26" className='hover:scale-[1.3] transition-all duration-150'/>
//       <FaCss3Alt size={40} color="#1572B6" />
//       <FaJs size={40} color="#F7DF1E" />
//       <FaReact size={40} color="#61DBFB" />
//       <SiTailwindcss size={40} color="#38B2AC" />
//       <GrNode size={40} color="green" />
//       <img src="/express.png" alt="Express.js" style={{ width: 40, height: 40 }} /> {/* Express logo */}

//       <SiMongodb size={40} color="#47A248" />
//       <FaGithub size={40} color="blue" />
//     </div>
//     </div>
//   );
// }

// export default Techicons;
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

function Techicons() {
  return (
    <div className='flex justify-center'>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4 place-items-center">
        <FaHtml5 size={40} color="#E34F26" className='hover:scale-125 transition-transform duration-150' />
        <FaCss3Alt size={40} color="#1572B6" className='hover:scale-125 transition-transform duration-150' />
        <FaJs size={40} color="#F7DF1E" className='hover:scale-125 transition-transform duration-150' />
        <FaReact size={40} color="#61DBFB" className='hover:scale-125 transition-transform duration-150' />
        <SiTailwindcss size={40} color="#38B2AC" className='hover:scale-125 transition-transform duration-150' />
        <GrNode size={40} color="green" className='hover:scale-125 transition-transform duration-150' />
        <img src="/express.png" alt="Express.js" style={{ width: 40, height: 40 }} className='hover:scale-125 transition-transform duration-150' /> {/* Express logo */}
        <SiMongodb size={40} color="#47A248" className='hover:scale-125 transition-transform duration-150' />
        <FaGithub size={40} color="black" className='hover:scale-125 transition-transform duration-150' />
      </div>
    </div>
  );
}

export default Techicons;
