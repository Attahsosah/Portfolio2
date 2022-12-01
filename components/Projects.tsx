import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({}: Props) {
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
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                    <motion.img 
                    initial={{
                        y: -100,
                        opacity:0
                    }}
                    transition={{ duration: 1.2}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}

                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiC6fhWPvVa8NSDszxTkw_K2oti5raqeeP0w&usqp=CAU"
                    alt=""
                    
                    
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
                       <a href="https://ordering-app-lemon.vercel.app"> <h4 className='text-4xl font-semibold text-center'>
                           <span className='underline decoration-[#F7AB0A]'>Case Study {i + 1} of {projects.length}:</span> 
                            Food ordering App</h4>
                            </a>

                            <p className='text-lg text-center md:text-left'>This Food ordering app is a beautifully designed and customisable application where 
                                a superuser who is logged in can add and delete items.It makes use of a firebase backend to store the food information.

                            </p>
                            
                            
                            </div>
                           
                    
                </div>
            ) )}

        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
        
        
        
        </motion.div>
  )
}

export default Projects