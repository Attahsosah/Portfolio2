import { motion } from 'framer-motion'
import React from 'react'
import Project from './Project';

const projects = [
  {
    image: "https://i.ibb.co/JWr7Wx2s/Screenshot-2025-07-16-at-6-52-42-PM.png",
    link: 'https://ordering-app-lemon.vercel.app/#offer',
    title: 'Food Ordering App',
    description: 'This Food ordering app is a beautifully designed and customisable application where a superuser who is logged in can add and delete items. It makes use of a firebase backend to store the food information.',
    tech: ["React", "Firebase", "TailwindCSS"]
  },
  {
    image: "https://i.ibb.co/sv7DkPJK/Screen-Shot-2025-03-06-at-10-30-23-AM.png",
    link: 'https://dashboard-sooty-six.vercel.app',
    title: 'Dashboard',
    description: 'A dashboard example project with a dashboard that displays statistics, various different metrics, customers and much more information',
    tech: ["Next.js", "React", "TailwindCSS", "Firebase"]
  },
  {
    image: "https://i.ibb.co/tJJGx8m/pexels-junior-teixeira-1064069-2047905.jpg",
    link: "https://muhira-market.vercel.app/",
    title: 'Muhira Updates Ecommerce Site',
    description: 'Custom E-commerce site for a local business',
    tech: ["Next.js", "React", "TailwindCSS", "Firebase"]
  }
];

function Projects() {
  return (
    <motion.div 
      initial={{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='h-screen top-20 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <motion.h3
        initial={{ opacity:0.5, x:100, scale:0.5 }}
        whileInView={{ opacity:1, scale:1 }}
        transition={{ duration: 1 }}
        className='absolute top-0 uppercase tracking-[20px] text-[#2b4970]  pr-32 pl-0 text-2xl'>
        Projects
      </motion.h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-blue-900 scrollbar-thin'>
        {projects.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7FB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects