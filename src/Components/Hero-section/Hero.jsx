import React from 'react';
// import { Link } from 'react-router-dom';
import me from '../../Image/me2.jpeg';
import { TypeAnimation } from 'react-type-animation';
import {BsTwitter, BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {PiHandWavingBold} from 'react-icons/pi';

function Hero() {
  return (
    <div className='md:flex justify-between md:mt-40 m-14'>
     <div className="object-contain lg:w-1/4 lg:h-1/5 w-full md:w-1/2 lg:order-last">
     <img src={me} alt="" className=' h-auto w-100 relative right-40 z-50 border-blue-600 rounded-md'/>
      <div className="bg-slate-800 w-96 h-96 bottom-32 right-44 fixed z-0 "></div>
     </div>
    
     <div className="md:flex xl:w-1/2">
    <div className="text-white md:mt-20 xl:ms-20">
    <p className='text-2xl hero-text flex pb-3'> Hi there! <span className='wave'><PiHandWavingBold color='yellow' size='1.2em'/></span> </p>
    <p className='xl:text-5xl md:text-4xl text-1xl text-teal-200 pb-3'> I am Emmanuel Akinola </p>
     <TypeAnimation sequence={[
        'I write code.', 
        3000, 
        'I am a frontend developer.', 
        3000, 
        'Soon to be a full-stack developer.', 
        3000,
        'I am a creative writer and a content creator.',
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '.9em', display: 'inline-block', color: 'white', fontFamily: 'Open Sans, cursive' }}   />
       <div className="flex">
        {/* <Link to= "/About"> <button className='bg-black border-2 border-teal-500 text-teal-200 p-2 rounded-lg text-sm my-6 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300'> More About Me </button> </Link>
         <a href="https://us.docworkspace.com/d/sIMiZ7qUp6ceLswY" target="blank"><button className=' bg-black border-2 border-teal-500 text-teal-200 p-2 rounded-lg text-sm my-6 mx-2 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300'> My Resume  </button> </a> */}
        </div>
        
     </div>


     <div className="md:order-first lg:m-10 lg:mt-20">
     <ul className='flex md:flex-col space-x-5 md:space-y-5 md:space-x-0'>
      <li className='hover:scale-125 transition-all'><a href="http://x.com/akinolatijesu7" target='blank'> <BsTwitter size={'2em'} color='white'/> </a></li>
      <li className='hover:scale-125 transition-all'><a href="http://github.com/Akinolaemmanuel" target='blank'> <BsGithub size={'2em'} color='white'/> </a></li>
      <li className='hover:scale-125 transition-all'><a href="http://" target='blank'> <BsLinkedin size={'2em'} color='white'/> </a></li>
      <li className='hover:scale-125 transition-all'><a href="http://wa.me/07047548793" target='blank'> <BsWhatsapp size={'2em'} color='white'/> </a></li>
     </ul>

     </div>
     </div>
      
    </div>
  )
}

export default Hero