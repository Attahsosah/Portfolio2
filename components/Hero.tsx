import Link from 'next/link';
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from 'framer-motion';

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words:["Hi",
            "The Name's Attah",
            "Attah Sosah",
            "Guy-who-loves-Coffee",
            "<ButLovesToCodeMore />"
          ],
          loop:true,
          delaySpeed:2000,

  });
  return (
    //  
    <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
      <BackgroundCircles />
      <motion.img 
       initial={{
        opacity:0.5,
        
        scale:0.5

      }}
      animate={{
        x:[15,15,15,15,15,15,15,15,15,15,15,15,15,500,15],
        opacity:1,
        scale: 3,
        rotate:[100,160,200,260,300,360,400,390,380,360],
      }}
      whileInView={{
        opacity:1,
        scale:1

      }}
      transition={{
        
        duration: 2.5
        
      }}
      viewport={{once:true}}
      
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpMlcgNRldPhvxO6PQatDPekVroEPNMWK6PZuwpQBfN84QAKtv8liXZ8eKICnGMSr80s&usqp=CAU' alt="Profile"
        />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3 text-[#2b4970]'>{text}</span>
        <Cursor cursorColor='#F7AB8A' />
        
        </h1>
        <motion.div 
         initial={{
          opacity:0.5,
         
          scale:3

        }}
        whileInView={{
          opacity:1,
          scale:1

        }}
        transition={{
          duration: 2.5

        }}
        
        className='pt-5 '>
          <Link href="#about">
           <button 
           
           
           className='heroButton'>About</button>
          </Link>
          
          {/* <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link> */}
          <Link href="#skills">
           <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
          
         
         
          
        </motion.div>
      </div>
      
      </div>
  )
}

export default Hero