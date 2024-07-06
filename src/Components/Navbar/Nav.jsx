import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
// import {Link} from 'react-router-dom'



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-2 md:p-4">
      <div className="text-white px-4">
        {/* <span className="font-semibold text-xl hover:text-2xl transition-all"><Link to='/Home'> S.O.G </Link></span> */}
      </div>

      {/* Nav items for big screens */}
      <div className="invisible md:visible">
      {/* <Link to='/About' className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:text-lg transition-all mr-4">
                About
              </Link>
              <Link to='/Portfolio' className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:text-lg transition-all mr-4" >
                Portfolio
              </Link>
              <Link to='/Contacts' className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:text-lg transition-all">
               Contacts
              </Link> */}
      </div>
 
     {/* Nav Items for small screens */}
      <div className="flex md:hidden ">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center mx-3 px-3 py-1 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"  >
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
              {/* <Link to='/About' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                About
              </Link>
              <Link to='/Portfolio' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                 Portfolio
              </Link>
              <Link to='/Contacts' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" >
                 Contacts
              </Link> */}
            </div>
          </div>
        )}
      </Transition>
      </div>
    </nav>
  );
};

export default Nav;
