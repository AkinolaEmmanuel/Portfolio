import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import me from '../../Image/me.jpeg';
import me2 from '../../Image/me2.jpeg'
import me3 from '../../Image/me3.jpeg';
import me4 from '../../Image/me4.jpeg';
import me5 from '../../Image/me5.jpeg';
import me6 from '../../Image/me6.jpeg';
import me7 from '../../Image/me7.jpeg';
import { TypeAnimation } from 'react-type-animation';
import {BsTwitter, BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {PiHandWavingBold} from 'react-icons/pi';

function Hero() {
  const images = [me, me2, me3, me4, me5, me6, me7];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } 
        else {
             setCurrentIndex(currentIndex + 1);
        }
    }, 3000)
    
    return () => clearInterval(intervalId);
})
  return (
    <div className='md:flex md:justify-between md:my-40 m-14 Poppins transition-all'>
     <div className=" lg:order-last">
     <img src={images[currentIndex]} alt="" className='lg:h-96 lg:w-96 w-96 h-96 object-cover lg:relative lg:right-40 z-50 border-blue-600 rounded-lg'/>
      <div className="bg-slate-800 lg:w-96 lg:h-96 lg:bottom-32 lg:right-48 lg:absolute z-0 rounded-lg invisible md:visible"></div> 
     </div>
  
     <div className="md:flex xl:w-1/2">
    <div className="text-white md:mt-20 xl:ms-20">
    <p className='text-2xl my-4 flex lg:pb-3'> Hi there! <span className='wave'><PiHandWavingBold color='yellow' size='1.2em'/></span> </p>
    <p className='xl:text-4xl md:text-4xl text-1xl text-teal-200 pb-3'> I am Emmanuel Akinola. </p>
     <TypeAnimation sequence={[
        'I write code.', 
        3000, 
        'I am a frontend developer.', 
        3000, 
        'Soon to be a full-stack developer.', 
        3000,
        'I am a writer and a content creator.',
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '.9em', display: 'inline-block', color: 'white', fontFamily: 'Open Sans, cursive' }}   />
       <div className="flex">
         <a href="#About"> <button className='bg-black border-2 border-teal-500 text-teal-200 p-3 rounded-lg text-sm my-6 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300'> More About Me </button> </a>
         <a href="https://docs.google.com/document/d/11mp2HtVBTqVuystmJFwkxsBWN2XXSy3nzr8uWbkUjPU/edit?usp=sharing" target="blank"><button className=' bg-black border-2 border-teal-500 text-teal-200 p-3 rounded-lg text-sm my-6 mx-2 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300'> My Resume  </button> </a> 
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