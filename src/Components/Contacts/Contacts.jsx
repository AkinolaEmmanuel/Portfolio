import React from 'react';
import { CiMail, CiTwitter } from "react-icons/ci";
import { FaGithub, FaWhatsapp  } from "react-icons/fa";

function Contacts() {
  return (
    <div className='text-white mx-2 Montserrat transition-all' id='Contacts'>
    <div className="contact">
   
    <h1 className='text-4xl text-center my-7'> Contact Me!</h1>
    <div className="lg:mx-20">
    <p className='italic text-center lg:mx-auto lg:w-10/12'> "Thank you for going through my Portfolio! Do You have an idea you want to bring to life, a position that needs to be filled or you want to chat techie stuffs? I would love to work with you or for us to be friends or partners." </p>
    
    <div className="ml-20 my-10 lg:ml-0 lg:my-0">
     <div className="lg:flex lg:flex-wrap lg:my-20 lg:justify-center">
     {/* <div className="mx-10">
    <img src={download} alt="" className='hover:scale-125 transition-all' />
    </div> */}
     <div className="flex">
      <a href="mailto:emmanuelakinola255@gmail.com" target='blank'><CiMail size={'3em'}/></a>
       <p className='p-2'>Send me a mail!</p> 
      </div> 
     <div className='flex lg:mx-10'>
      <a href="https://x.com/AkinolaTijesu7" target='blank'><CiTwitter size={'3em'}/></a>
       <p className='p-2'>Send a dm!</p>
     </div> 
    <div className='flex ;g:mx-10'>
      <a href="https://github.com/AkinolaEmmanuel" target='blank'><FaGithub size={'3em'}/></a> 
      <p className='p-2'>Collab on Github</p> 
    </div>  
    <div className='flex lg:mx-10'>
    <a href="https://wa.link/cb0sw6" target='blank'><FaWhatsapp size={'3em'}/></a> 
    <p className='p-2'>Chat on Whatsapp</p> 
    </div> 
    
    </div> 
   
    </div>
    </div>

    </div>
   


    </div>
  )
}

export default Contacts