import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article  className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px]
     xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >
       <motion.img
        initial={{
            y: -100,
            opacity:0,
       }}
       transition={{duration:1.2}}
       whileInView={{opacity:1,y:0}}
       viewport={{once:true}}
       className='h-32 w-32 rounded-full md:rounded-full  xl:w-[200px] xl:h-[200px] object-cover
       object-center'
       src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
       alt="pic"
       
       /> 
       <div className='px-0 md:px-10'>
        <h4 className=' text-4xl font-light pt-2'>Random Developer</h4>
        <p className='font-bold text-2xl mt-1'>Family</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-4' src='https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon.png' alt='' />
          <img className='h-10 w-10 rounded-4' src='https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon.png' alt='' />
          <img className='h-10 w-10 rounded-4' src='https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon.png' alt='' />



        </div>
        <p>
            Starter work...-Ended...
        </p>
        <ul className=' list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points Summary points </li>





        </ul>
       </div>
    </article>
  )
}

export default ExperienceCard