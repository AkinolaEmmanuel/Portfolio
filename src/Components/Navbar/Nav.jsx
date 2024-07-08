import React, { useState } from "react";
import "./Nav.css";
import { Transition } from "@headlessui/react";
import { Icon } from '@iconify/react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
// import {Link} from 'react-router-dom'



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
  return (
    
    <nav className="flex pt-4 justify-between md:justify-around px-2 md:p-6">
      {/* // <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>  */}
      <div className="text-white md:pt-2 pl-12">
        <span className="font-semibold md:pl-14 text-xl hover:text-2xl transition-all"><a href="#Home"> S.O.G </a></span>
      </div>

      {/* Nav items for big screens */}
      <div className="hidden md:visible md:flex">
        <a href="#About" className="mt-4 md:mt-0 md:pl-14 text-white hover:text-teal-200 hover:text-lg hover:underline transition-all ">
                About
        </a>
        <a href="#Portfolio" className="mt-4 md:mt-0 md:pl-14 hover:text-teal-200 text-white hover:text-lg hover:underline transition-all " >
                Projects
        </a>
        <a href="#Contacts" className="mt-4 md:mt-0 md:pl-14 hover:text-teal-200 text-white hover:text-lg hover:underline transition-all">
               Contacts
        </a>
        <a href="#Blog" className="mt-4 md:mt-0 md:pl-14 hover:text-teal-200 text-white hover:text-lg hover:underline transition-all">
               Blog
        </a> 
        <a href="/" className="md:pl-14 text-white">
        <Icon icon="ph:moon" width="25" height="25"/>  
        </a>
      </div>
 
     {/* Nav Items for small screens */}
       <div className="flex md:hidden visible mr-12">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-1 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="flex-grow lg:flex lg:items-center lg:w-auto" >
            <div className="text-sm lg:flex-grow">
              <a href="#About" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                About
              </a>
              <a href="#Portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                 Portfolio
              </a>
              <a href="#Contacts" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" >
                 Contacts
              </a>
            </div>
          </div>
        )}
      </Transition>
      </div> 
      {/* // </div> */}
    </nav>
    
  );
};

export default Nav;
