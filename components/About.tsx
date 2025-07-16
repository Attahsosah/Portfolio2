import { motion } from 'framer-motion'
import React from 'react'
motion
type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity:0 }}
        whileInView={{ opacity:1}}
        transition={{duration:1.5}}

      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
        
        className='absolute top-0 uppercase tracking-[20px] text-[#2b4970] text-2xl pr-32'
         
         >About
         </motion.h3>
        
        <motion.img
        initial={{
             x:-200,
             opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        viewport={{once:true}}
        src='https://i.ibb.co/7tVQj7z6/Profile.png'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />
        

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
            Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" " } background  
            </h4>
            <p className='text-base'>Hi there! My name is Attah Sosah. Since the age of 13 , I have been obsessed with programming. Over the years, I have explored the different areas of programming. I am currently a full stack web developer . In most cases I work on web apps. I welcome you to my portfolio website </p>
        </div>
    </motion.div>
  )
}

export default About