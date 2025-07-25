import React, { useState } from 'react'
import screenshot from '../../Image/Screenshot2.png'
import screenshot2 from '../../Image/Screenshot16.png'
import screenshot3 from '../../Image/Screenshot3.png'
function Portfolio() {

  const projects = [
    {
      id: 1,
      title: "MaizeKingdom Landing Page",
      image: screenshot,
      description: "This is a template landing page for a Maize Producing Company. I designed this with Html, Css and Bootstrap.",
      repo: "https://www.github.com/AkinolaEmmanuel/MaizeKingdom",
      link: "https://maizekingdom.netlify.app"
    },{
      id: 2,
      title: "Emmanuel Akinola's Blog",
      image: screenshot2,
      description: "This is a personal blog website for my writing. I designed this with React, Vite, Tailwindcss.",
      repo: "https://www.github.com/AkinolaEmmanuel/myBlog",
      link: "https://emmanuelakinola-blog.netlify.app"
    },
    {
      id: 3, 
      title: "BlockChain Masters",
      image: screenshot3,
      description: "A company website for BlockChain Masters, An affliate of Blockfuse Labs where I served. I designed and built with NextJs, Tailwindcss",
      repo: "https://www.github.com/AkinolaEmmanuel/blockchain-masters",
      link: "https://blockchain-masters.vercel.app/"
    },
    // {
    //   id: 4,
    //   title: "DIC Nigeria",
    //   description: "A Project I led and built in collaboration with the team at AIQ, It features a website and a functional school portal for student application and educational activites, I built the Front-End with NextJs, Tailwindcss",
    //   repo: "https://github.com/aiq-ng/dicon-ui",
    //   link: "https://dic-nigeria.com.ng/home"
    // }
  ]


  const [currentIndex, setCurrentIndex] = useState(1);


  const handleLoadMore = () => {
    if (currentIndex < projects.length) {
         setCurrentIndex((prev) => (prev + 1))
    } else {
      setCurrentIndex(1)
    }
 
  }


  return (
    <div id='Portfolio' className='my-20 Montserrat transition-all'>
    <div className="text-white text-center my-10">
      <h1 className='text-4xl my-10 font-extrabold Baskervville-SC'> Projects I have worked on </h1>
      {projects.slice(0, currentIndex).map((project) => (
      <div key={project.id} className="lg:flex">
      <div className="max-w-xl m-5 lg:ms-20 xl:mt-10 lg:mt-14 lg:w-8/12 bg-black border-2 border-teal-500 text-teal-200 p-10 rounded-lg text-sm my-6 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300">
      <img src={project.image} alt={project.title} />
      </div>
      <div className="xl:mt-20 lg:mt-10 mx-5 text-start">
      <h1 className='text-4xl font-extrabold mt-3'> {project.title}</h1>
      <p className='font-light text-gray-600 my-5 lg:w-4/5'> {project.description}</p>
     
      <div className="flex items-center w-full gap-1 my-5">
      <a href={project.link} target='_blank' rel='noreferrer'> <button className=' bg-white text-black text-xs md:text-sm border rounded-3xl lg:py-2 py-1 px-5 lg:my-2 hover:scale-95 transition-all hover:opacity-50'> Live </button> </a>
      <a href={project.repo} target="blank"><button className=' bg-black text-white text-xs md:text-sm border rounded-3xl lg:py-2 py-1 px-5 mx-2 lg:my-2 hover:scale-95 transition-all hover:opacity-50'> Github </button></a> 
       <a href="https://docs.google.com/document/d/1w1SPwx3xgAi11RGN7zpJBJRHOw46yJQ21TlY52EJhp8/edit?usp=sharing" target="blank"><button className='bg-black border-teal-500 border text-teal-200 text-xs md:text-sm lg:py-2 py-1 px-5 rounded-3xl lg:my-2 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300'> My Resume  </button></a> 
      </div>
     
      
      </div>
      </div>
      ))}

      <button className='my-20 px-6 py-2 border-2 border-teal-500 hover:bg-teal-500 transition-all'
       aria-label={currentIndex < projects.length ? 'More Projects Soon' : 'Close Projects'} onClick={handleLoadMore}>
         {currentIndex < projects.length ? 'Load More' : 'Close'}
      </button>
        
    </div>
    

    <div className="bg-teal-500 text-center py-14">
      <h1 className='text-3xl font-bold py-4 text-black'> Explore my CV. </h1>
      <div className="lg:w-1/2 w-10/12 m-auto text-white">
      <p> Check out my working experience and my contributions to different projects. Take a deeper look at my detailed Resume to learn about my skills, experience, and accomplishments. Click the Button below to download my Resume. </p>
      </div>
     <a href="https://docs.google.com/document/d/1w1SPwx3xgAi11RGN7zpJBJRHOw46yJQ21TlY52EJhp8/edit?usp=sharing" target='blank'><button className='my-6 px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all'>Download CV </button></a> 
    </div>



    </div>
  )
}

export default Portfolio