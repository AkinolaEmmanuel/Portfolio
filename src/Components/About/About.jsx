import React from 'react';
import './About.css';
import { Icon } from '@iconify/react';
import {SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiPhp, SiMysql, SiGit} from 'react-icons/si';


function About() {
  
  return (
    
     <div className='lg:py-20 py-5 transition-all' id='About'>
         <div className="text-white">
         {/* <div className="w-24 mx-auto my-3">
         <img src={Cartoon} alt="" />
         </div> */}
         <div className="">
         <h1 className='font-bold lg:text-4xl text-2xl text-center lg:my-3 Baskervville-SC'> Welcome to Emmanuel's Portfolio! </h1>
         <h2 className='font-light lg:text-2xl text-center lg:my-3 italic'> Here are some fun facts about me<span className='text-teal-200 text-5xl'>.</span> </h2>


         <div className="lg:flex lg:mx-40 lg:my-20 Montserrat">
         <div className="lg:w-1/3 my-6">
          <Icon icon="openmoji:man-student-dark-skin-tone" width="100" height="100" className='m-auto' />
          <p className='text-center px-4 lg:px-2'>I am Emmanuel Akinola Tijesunimi, I am from Ibadan, Nigeria. I am a graduate of the University Of Ibadan, I studied Education and Physics. </p>
          </div>
          <div className="lg:w-1/3 my-6">
          <Icon icon="openmoji:man-technologist-dark-skin-tone" width="100" height="100" className='m-auto' />
             <p className='text-center px-4 lg:px-2'> I am a front-end developer skilled at creating dynamic and responsive user interfaces with different technologies, libraries and frameworks.</p>
          </div>
          <div className="lg:w-1/3 my-6">
            <div className="flex justify-center">
            <Icon icon="openmoji:soccer-ball" width="50" height="100" className='' /> <Icon icon="openmoji:writing-hand-dark-skin-tone" width="50" height="100" className='' />
            </div>
           <p className='text-center px-4 lg:px-2'>Asides Coding and building, I have interests in sports, mainly football. and writing, I write articles on platforms like medium and blogs. </p>
          </div>      
          </div>
        

          <section className='bg-teal-700 py-10'>
          <h1 className='lg:text-2xl text-xl italic text-center lg:pt-20 py-4'> Why you should hire/work with me for your project? </h1>
        <div className="Montserrat">
        <div class="lg:grid grid-cols-2 gap- mx-auto py-auto">
          <div className="m-10 lg:p-10 flex flex-wrap lg:flex-nowrap lg:hover:border-2 lg:border-white animate-slideIn">
            <div className="lg:px-4 m-auto">
           <Icon icon="codicon:code" width="100" height="100" />
           </div>
           <div className="">
           <h1 className='text-2xl font-bold'>Expertise in Modern Frontend Technologies</h1>
           <p className='text-sm'> Proficient in HTML, CSS, JavaScript, and frameworks such as React, I love what I do and I am a nac for getting the job done, how and when it should be done. I am willing to learn new technologies inorder to achieve set goals. </p>
           </div>
          </div>
          <div className="m-10 lg:p-10 flex flex-wrap lg:flex-nowrap lg:hover:border-2 lg:border-white animate-slideOut">
          <div className="lg:px-4 m-auto"> 
          <Icon icon="codicon:layout-panel-justify" width="100" height="100" />
          </div>
          <div className="">
           <h1 className='text-2xl font-bold'>Responsive Design</h1>
           <p className='text-sm'> Ability to create responsive and mobile-first web applications, I am proficient in using frameworks like Bootstrap or Tailwind CSS and i have a strong understanding of media queries and flexible grid systems. </p>
          </div>
          </div>
          <div className="m-10 lg:p-10 flex flex-wrap lg:flex-nowrap lg:hover:border-2 lg:border-white animate-slideIn">
          <div className="lg:px-4 m-auto">
          <Icon icon="codicon:symbol-property" width="100" height="100" />
          </div>
          <div className="">
           <h1 className='text-2xl font-bold'>Problem Solving</h1>
           <p className='text-sm'>I am enthusiastic about innovation, creativity and problem solving, Can your idea solve a problem? I want in! I have lofty dreams to become a full-stack software engineer at a world problem solving organization! </p>
          </div>
          </div>
          <div className="m-10 lg:p-10 flex flex-wrap lg:flex-nowrap lg:hover:border-2 lg:border-white animate-slideOut">
          <div className="lg:px-4 m-auto">
          <Icon icon="fluent:people-team-20-filled" width="100" height="100" />
          </div>
          <div className="">
           <h1 className='text-2xl font-bold'>Collaborative Team member</h1>
           <p className='text-sm '>Excellent communication skills, I have experience working with and collaborating effectively with designers, backend developers, and other stakeholders.I love every oportunity to contribute and I can be fun and once in a while, I can bring a lighter mood to the room. A little joke wouldn't hurt?</p>
          </div>
          </div>
          </div>
          </div> 
          </section>
        <div className="my-10 Montserrat">
        <h1 className='text-2xl font-bold text-center pt-4'> My Stack; </h1>
        <div className="lg:flex lg:justify-center">
        <div className="lg:flex lg:flex-wrap grid grid-cols-2">
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiHtml5 size='6em' className='text-yellow-700 lg:px-1'/><h3>Html5</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiCss3 size='6em' className='text-blue-700 lg;px-1'/><h3>CSS3</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiJavascript size='6em' className='text-yellow-300 lg:px-1'/><h3>Javascript</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiBootstrap size='6em' className='text-purple-600 px-1'/><h3>Bootstrap5</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiTailwindcss size='6em' className='text-blue-500 px-1'/><h3>Tailwind CSS</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiReact size='6em' className='text-blue-400 px-1'/><h3>ReactJS</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiPhp size='6em' className='text-purple-400 px-1'/><h3>PHP</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiMysql size='6em' className='text-blue-400 px-1'/><h3>MySQL</h3></button>
        <button className='py-2 lg:px-4 px-10 mx-2 my-2'><SiGit size='6em' className='text-red-600 px-1'/><h3>Git</h3></button>
        </div>
        </div>
        </div>

      
         
     </div>
     </div>
     </div>
    
  )
}

export default About