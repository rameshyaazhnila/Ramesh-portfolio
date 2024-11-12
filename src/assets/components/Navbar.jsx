
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isopen);
  };

  // Close the menu on scroll
  useEffect(() => {

    const handleScroll = () => {
      if (isopen) {
        setTimeout(() => setIsopen(false), 600);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isopen]);

  return (
    <div className="fixed w-[100%] h-[30px] m-0 p-4 top-0 left-0 z-50">
      <div className="flex justify-between py-1 items-center gap-5 filters rounded-2xl px-1">
        <h1 className="text-blue-500 text-[28px] p-0 font-bold bg-transparent">
          Luckily <span className="text-green-300 text-[30px] bg-transparent">Born</span>
        </h1>
        <div className="hidden sm:flex justify-center items-center pr-6 md:pr-20 space-x-6 lg:text-xl bg-transparent">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="text-white relative hover:text-green-300 cursor-pointer group hover:shadow-lg transition-all bg-transparent"
          >
            Home<span 
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="text-white relative hover:text-green-300 cursor-pointer group hover:shadow-lg transition-all bg-transparent"
          >
            About<span 
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="text-white relative hover:text-green-300 cursor-pointer group hover:shadow-lg transition-all bg-transparent"
          >
            Skills<span 
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
          <Link 
            to="service" 
            smooth={true} 
            duration={500} 
            className="text-white relative hover:text-green-300 cursor-pointer group hover:shadow-lg transition-all bg-transparent"
          >
            Service<span 
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="text-white relative hover:text-green-300 cursor-pointer group hover:shadow-lg transition- bg-transparent"
          >
            Contact<span 
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
        </div>
        {isopen ? (
          <X
            size={42}
            className="text-red-600 border p-1 border-blue-300 rounded-full sm:hidden transition-transform transform hover:scale-110 hover:text-blue-500 shadow-[0_0_10px_5px_rgba(0,255,0,0.5)]"
            onClick={handleClick}
          />
        ) : (
          <Menu
            size={42}
            className="text-red-600 border p-1 border-blue-300 rounded-full sm:hidden transition-transform transform hover:scale-110 hover:text-blue-500 shadow-[0_0_10px_5px_rgba(0,255,0,0.5)]"
            onClick={handleClick}
          />
        )}
      </div>
      {isopen && (
        <div className="absolute flex flex-col items-center sm:hidden w-full left-0 space-y-5 filters py-5 -z-40">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="text-white hover:text-green-600 cursor-pointer bg-transparent"
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="text-white hover:text-green-600 cursor-pointer bg-transparent"
          >
            About
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="text-white hover:text-green-600 cursor-pointer bg-transparent"
          >
            Skills
          </Link>
          <Link 
            to="service" 
            smooth={true} 
            duration={500} 
            className="text-white hover:text-green-600 cursor-pointer bg-transparent"
          >
            Service
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="text-white hover:text-green-600 cursor-pointer bg-transparent"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

