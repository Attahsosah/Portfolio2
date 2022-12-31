import { motion } from 'framer-motion'
import React from 'react'
import Project from './Project';

type Props = {
    image?:string;
    title?:string;
    link?:string;
}

function Projects({ }: Props) {
    // const projects = [1,2]
    
  return (
    <motion.div 
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}

    
    
    className='h-screen top-20 relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <motion.h3
        initial={{
          opacity:0.5,
          x:100,
          scale:0.5

        }}
        whileInView={{
          opacity:1,
          scale:1

        }}
        transition={{
          duration: 1

        }}
        
        
        className='absolute top-0 uppercase tracking-[20px] text-gray-500  pr-32 pl-0
        text-2xl'>
            Projects
        </motion.h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
        
            <Project link='https://ordering-app-lemon.vercel.app/#offer' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiC6fhWPvVa8NSDszxTkw_K2oti5raqeeP0w&usqp=CAU' title='Food Ordering App' description='This Food ordering app is a beautifully designed and customisable application where 
                                a superuser who is logged in can add and delete items.It makes use of a firebase backend to store the food information.' />
            <Project image='https://i.ibb.co/TKVbvsG/Screen-Shot-2022-12-01-at-1-57-06-PM.png'link='https://airbnb-yt.vercel.app' title='AirBnB Clone' description='A close clone of the Airbnb website containing the same sleek design, animated text , search functionality and a map feature'/>


           
           
       

        </div>
        

        <div className='w-full absolute top-[30%] bg-[#F7FB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
        
        
        
        </motion.div>
  )
}

export default Projects