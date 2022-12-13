import { motion } from 'framer-motion'
import React from 'react'
import Project from './Project';

type Props = {
    image?:string;
    title?:string;
    link?:string;
}

function Projects({ }: Props) {
    const projects = [1,2,3,4,5]
    
  return (
    <motion.div 
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}

    
    
    className='h-screen top-20 relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 
        text-2xl'>
            Projects
        </h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
        
            <Project  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiC6fhWPvVa8NSDszxTkw_K2oti5raqeeP0w&usqp=CAU' title='Food Ordering App' />
            <Project link='https://airbnb-yt.vercel.app' title='AirBnB Clone'/>


           
           
       

        </div>
        

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
        
        
        
        </motion.div>
  )
}

export default Projects