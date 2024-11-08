// import { Loader } from 'lucide-react';
// import React, { useState } from 'react'

// const Contact = () => {
//   const [result, setResult] =useState();
//   const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);
//         console.log(event.target)
//         formData.append("access_key", "82f79b4e-7019-417c-b744-4d2fcf0e82b8");
    
//         const response = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           body: formData
//         });
    
//         const data = await response.json();
    
//         if (data.success) {
//           setResult("Form Submitted Successfully");
//           event.target.reset();
//           setTimeout(()=>{
//             setResult("")
//           },2000);
//         } else {
//           console.log("Error", data);
//           setResult(data.message);
//         }
//       };



//   return (
//     <div className='flex flex-col justify-center items-center my-5'>
//       <div>
//         <h1 className='text-green-800 p-3 font-semibold text-3xl'>Contact Us</h1>
//       </div>
//       <form onSubmit={onSubmit} className='text-white flex flex-col w-[300px]'>
//         <label className='text-xl font-bold'>Name</label>
//         <input type="text" name="text" required className='border bg-white text-black font-bold rounded-sm outline-none p-1 mb-3'/>
//         <label className='text-xl font-bold'>Email</label>
//         <input type="email" name="email"  required className='border bg-white text-black font-bold rounded-sm outline-none p-1 mb-3'/>
//         <label className='text-xl font-bold'>Phone</label>
//         <input type="phone" name="phone"  required className='border bg-white text-black font-bold rounded-sm outline-none p-1 mb-3'/>
//         <label className='text-xl font-bold'>Share Your Feedback</label>
//         <textarea type="message" name="message" required className='border bg-white text-black font-bold rounded-sm outline-none p-1 h-[200px]'/>
//         {result?<button className='bg-blue-700 text-white py-2 rounded-md my-5'>{result}</button>:<button type="submit" className='bg-blue-700 text-white py-2 rounded-md my-5'>Send Message</button>}
//       </form>
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "82f79b4e-7019-417c-b744-4d2fcf0e82b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      className='flex flex-col justify-center items-center my-5'
      whileInView={{ opacity: 1, scale: 1}}
      initial={{ opacity: 0, scale: 0.8}}
      transition={{ duration: 1 }}
    >
      <h1 className='text-green-800 p-3 font-semibold text-3xl'>Contact Us</h1>
      <form onSubmit={onSubmit} className='text-white flex flex-col w-[300px]'>
        <label className='text-xl font-bold'>Name</label>
        <input type="text" name="text" required className='border bg-white text-black font-bold rounded-sm outline-none p-1 mb-3'/>
        
        <label className='text-xl font-bold'>Email</label>
        <input type="email" name="email" required className='border bg-white text-black font-bold rounded-sm outline-none p-1 mb-3'/>
        
        <label className='text-xl font-bold'>Phone</label>
        <input type="phone" name="phone" required className='border bg-white text-black font-bold rounded-sm outline-none p-1 mb-3'/>
        
        <label className='text-xl font-bold'>Share Your Feedback</label>
        <textarea type="message" name="message" required className='border bg-white text-black font-bold rounded-sm outline-none p-1 h-[200px]'/>
        
        {result
          ? <button className='bg-blue-700 text-white py-2 rounded-md my-5'>{result}</button>
          : <button type="submit" className='bg-blue-700 text-white py-2 rounded-md my-5'>Send Message</button>
        }
      </form>
    </motion.div>
  );
}

export default Contact;
