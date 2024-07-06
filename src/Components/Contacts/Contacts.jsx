import React from 'react';
import download from "../../Image/download1.jpeg"
import { CiMail, CiTwitter } from "react-icons/ci";
import { FaGithub, FaWhatsapp  } from "react-icons/fa";

function Contacts() {
  return (
    <div className='text-white mx-2'>
    <div className="contact">
   
    <h1 className='text-4xl text-center my-7'> My Contacts</h1>
    <div className="lg:mx-96">
    <p className='italic lg:mx-0'> "Thank you for going through my Portfolio! Do You have an idea you want to bring to life, a position that needs to be filled or you want to chat techie stuffs? I would love for us to be friends or partners." </p>
    
    <div className="lg:flex">
    <div className="lg:ms-60 ms-2 mt-10 lg:mt-16 lg:order-last">
    <img src={download} alt="" className='hover:scale-125 transition-all' />
    </div>
     <div className="grid grid-cols-1 gap-4 my-10">
     <div className="flex ">
      <a href="mailto:emmanuelakinola255@gmail.com" target='blank'><CiMail size={'3em'}/></a>
       <p className='p-2 w-36'>Send me a mail!</p> 
      </div> 
     <div className='flex '>
      <a href="https://x.com/AkinolaTijesu7" target='blank'><CiTwitter size={'3em'}/></a>
       <p className='p-2 w-36'>Send a dm!</p>
     </div> 
    <div className='flex '>
      <a href="https://github.com/AkinolaEmmanuel" target='blank'><FaGithub size={'3em'}/></a> 
      <p className='p-2 w-36'>Collab on Github</p> 
    </div>  
    <div className='flex '>
    <a href="https://wa.link/cb0sw6" target='blank'><FaWhatsapp size={'3em'}/></a> 
    <p className='p-2 w-40'>Chat on Whatsapp</p> 
    </div> 
    
    </div> 
   
    </div>
    </div>

    </div>
   


    </div>
  )
}

export default Contacts