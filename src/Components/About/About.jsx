import {React} from 'react';
import {SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiPhp} from 'react-icons/si';
import {Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, Bs5Circle, Bs6Circle} from 'react-icons/bs';

function About() {
  
  return (
    
     <div className='about'>
         <div className="text-white hero-text  ">
         {/* <div className="w-24 mx-auto my-3">
         <img src={Cartoon} alt="" />
         </div> */}
         <div className="">
         <h1 className='text-bold text-4xl text-center my-3'> Here are some fun facts about me<span className='text-teal-200 text-5xl'>.</span>  </h1>
        
       
        <div className="m-6">
        <div class="lg:grid grid-cols-3 gap-4 mx-auto py-auto text-center">
          <div className="border-0 border-white hover:border-2 hover:border-teal-400 box-border shadow-white shadow-sm my-4 py-2"><Bs1Circle size='2em' className=' mx-auto mb-10'  /><p>I am Emmanuel Akinola Tijesunimi, I am from Ibadan, Nigeria.</p></div>
          <div className="border-0 border-white hover:border-2 hover:border-teal-400 box-border shadow-white shadow-sm my-4 py-2"><Bs2Circle size='2em' className=' mx-auto mb-10'  /><p>I am a frontend developer, soon to become a full-stack software engineer</p></div>
          <div className="border-0 border-white hover:border-2 hover:border-teal-400 box-border shadow-white shadow-sm my-4 py-2"><Bs3Circle size='2em' className=' mx-auto mb-10'/><p>I am a graduate of the University Of Ibadan, I studied Education and Physics</p></div>
          <div className="border-0 border-white hover:border-2 hover:border-teal-400 box-border shadow-white shadow-sm my-4 py-2"><Bs4Circle size='2em' className=' mx-auto mb-10'/><p>I write, I love innovation and creativity. </p></div>
          <div className="border-0 border-white hover:border-2 hover:border-teal-400 box-border shadow-white shadow-sm my-4 py-2"><Bs5Circle size='2em' className=' mx-auto mb-10'/><p>I am a leader, I love every oportunity to step up and take charge to achieve goals.</p></div>
          <div className="border-0 border-white hover:border-2 hover:border-teal-400 box-border shadow-white shadow-sm my-4 py-2"><Bs6Circle size='2em' className=' mx-auto mb-10'/><p>I love team work, creating and building to solve problems and bring solutions to life. </p></div>
        </div>
        
        <h1 className='text-2xl font-bold mt-10'> My Stack; </h1>
        <div className="lg:flex">
        <div className="lg:flex grid grid-cols-2">
        <button className='flex border rounded-3xl py-2 px-4 mx-2 my-2'> Html5  <SiHtml5 size='1.6em' className='text-yellow-700 px-1' />  </button>
        <button className='flex border rounded-3xl py-2 px-4 mx-2 my-2'> Css3 <SiCss3 size='1.6em' className='text-blue-700 px-1'/> </button>
        <button className='flex border rounded-3xl py-2 px-4 mx-2 my-2'> JavaScript <SiJavascript size='1.6em' className='text-yellow-300 px-1'/> </button>
        <button className='flex border rounded-3xl py-2 px-4 mx-2 my-2'>Bootstrap <SiBootstrap size='1.6em' className='px-1'/> </button>
        <button className='flex border rounded-3xl py-2 px-4 mx-2 my-2'> Tailwind <SiTailwindcss size='1.6em' className='px-1'/> </button>
        <button className='flex border rounded-3xl py-2 px-4 mx-2 my-2'> ReactJS <SiReact size='1.6em' className='text-blue-400 px-1'/> </button>
        <button className='flex border rounded-3xl py-2 px-4 mx-2 my-2'> PHP <SiPhp size='1.6em' className='text-blue-400 px-1'/> </button>
        
        </div>
        </div>
         </div>
     </div>
     </div>
     </div>
    
  )
}

export default About