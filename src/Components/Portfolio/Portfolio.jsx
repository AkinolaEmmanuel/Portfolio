import React from 'react'
import screenshot from '../../Image/Screenshot2.png'
function Portfolio() {
  return (
    <div id='Portfolio' className='my-20 Montserrat'>
    <div className="text-white text-center my-10">
      <h1 className='text-4xl my-10 font-extrabold Baskervville-SC'> Projects I have worked on </h1>
      <div className="lg:flex">
      <div className="m-5 lg:ms-20 xl:mt-10 lg:mt-14 lg:w-8/12 bg-black border-2 border-teal-500 text-teal-200 p-10 rounded-lg text-sm my-6 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300">
      <img src={screenshot} alt="maizekingdom.com" />
      </div>
      <div className="xl:mt-20 lg:mt-10 mx-5 text-start">
      <h1 className='text-4xl font-extrabold mt-3'> MaizeKingdom Landing Page </h1>
      <p className='font-light text-gray-600 my-5 lg:w-4/5'> Here is a template landing page for a Maize Producing Company. I designed this with Html, Css and Bootstrap.</p>
     
      <div className="">
      <a href="https://maizekingdom.netlify.app" target='_blank' rel='noreferrer'> <button className='lg:w-1/5 bg-white text-black border rounded-3xl lg:py-2 py-1 px-4 lg:my-2 hover:scale-95 transition-all hover:opacity-50'> Live </button> </a>
      <a href="/" target="blank"><button className='lg:w-1/5 bg-black text-white border rounded-3xl lg:py-2 py-1 px-4 mx-2 lg:my-2 hover:scale-95 transition-all hover:opacity-50'> Github </button></a> 
      <a href="https://us.docworkspace.com/d/sIMiZ7qUp6ceLswY" target="blank"><button className='bg-black border-teal-500 border text-teal-200 lg:py-2 py-2 px-4 rounded-3xl text-sm lg:my-2 hover:bg-teal-500 hover:border-black hover:text-white hover:transition hover:ease-in hover:duration-300'> My Resume  </button></a> 
      
      </div>
      </div>
      </div>
      
      <button className='my-20 px-6 py-2 border-2 border-teal-500 hover:bg-teal-500 transition-all' aria-label='More Projects Soon'>Load More</button>
    </div>
    

    <div className="bg-teal-500 text-center py-14">
      <h1 className='text-3xl font-bold py-4 text-black'> Explore my CV. </h1>
      <div className="lg:w-1/2 w-10/12 m-auto text-white">
      <p> Check out my working experience and my contributions to different projects. Take a deeper look at my detailed Resume to learn about my skills, experience, and accomplishments. Click the Button below to download my Resume. </p>
      </div>
      <button className='my-6 px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all' aria-label='More Projects Soon'>Download CV </button>
    </div>
























    </div>
  )
}

export default Portfolio