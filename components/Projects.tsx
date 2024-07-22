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
        
        
        className='absolute top-0 uppercase tracking-[20px] text-[#2b4970]  pr-32 pl-0
        text-2xl'>
            Projects
        </motion.h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-blue-900 scrollbar-thin'>

             {/* <Project image="" link="" title="" description="" /> */}

            <Project link='https://ordering-app-lemon.vercel.app/#offer' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiC6fhWPvVa8NSDszxTkw_K2oti5raqeeP0w&usqp=CAU' title='Food Ordering App' description='This Food ordering app is a beautifully designed and customisable application where 
                                a superuser who is logged in can add and delete items.It makes use of a firebase backend to store the food information.' />
            
            <Project image="https://cdn.discordapp.com/attachments/800718490750418967/1094972512414224454/Screen_Shot_2023-04-10_at_3.07.37_PM.png?ex=669f02de&is=669db15e&hm=242a1680d8dac728a1035633061a1093e4370daa4b9ee94d9475e2830cbfc3d2&" link='https://dashboard-sooty-six.vercel.app'  title='Dashboard' description='A dashboard example project with a dashboard that displays statistics and much more information'/>

            <Project image="https://cdn.discordapp.com/attachments/800718490750418967/1134118604644827226/Screen_Shot_2023-07-27_at_3.35.04_PM.png?ex=669f0a82&is=669db902&hm=d80de3f676a2dd3364380b3265e00f2bb3128aaedca6a9e515ae08128c87de50&"   title='Tour site Clone' description='A clone of the front end of a tour  site '/>


          
           
       

        </div>
        

        <div className='w-full absolute top-[30%] bg-[#F7FB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
        
        
        
        </motion.div>
  )
}

export default Projects