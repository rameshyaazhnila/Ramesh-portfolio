import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white py-2 bg-transparent">
      <div className="text-center bg-green-800 ">
        <p className='bg-transparent'>&copy; {currentYear} luckily born. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2 bg-green-800">
          <a href="#" className="hover:text-blue-300 bg-transparent">Privacy Policy</a>
          <a href="#" className="hover:text-blue-300 bg-transparent">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer