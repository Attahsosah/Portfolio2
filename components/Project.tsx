import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase, SiTailwindcss } from 'react-icons/si';
import type { IconType } from 'react-icons';


type Props = {
    image?:string;
    title?:string;
    link?:string;
    number?:any;
    description?:string;
    tech?: string[];
}

// Map tech names to icon components
const techIconMap: Record<string, IconType> = {
  'React': FaReact,
  'Next.js': SiNextdotjs,
  'Node.js': FaNodeJs,
  'Firebase': SiFirebase,
  'TailwindCSS': SiTailwindcss,
};

function Project({image,title,link,description,number, tech}: Props) {
    const projects = [1,2]
  return (
    <div>
        {/* {projects.map((project,i) => ( */}
                <div  className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                    <motion.img 
                    className='max-h-56 max-w-56'
                    initial={{
                        y: -100,
                        opacity:0
                    }}
                    transition={{ duration: 1.2}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}

                    src={image}
                    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiC6fhWPvVa8NSDszxTkw_K2oti5raqeeP0w&usqp=CAU"
                    alt={title || "Project image"}
                    
                    
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
                       <a href={link} target="_blank" rel="noopener noreferrer"> <h4  className='text-4xl font-semibold text-center'>
                           
                           {title}</h4>
                            </a>

                            <p  className='text-lg text-center md:text-left'>
                                {description}

                            </p>
                            
                            {tech && tech.length > 0 && (
  <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
    {tech.map((t) => {
      const Icon = techIconMap[t];
      return (
        <span key={t} className="flex items-center gap-1 bg-blue-100 text-blue-800 border border-blue-300 rounded-full px-3 py-1 font-semibold shadow-sm transition hover:bg-blue-200 hover:shadow-md">
          {Icon ? React.createElement(Icon, { className: "text-blue-400", title: t }) : null}
          {t}
        </span>
      );
    })}
  </div>
)}
                            
                            </div>
                           
                    
                </div>
             {/* ) )} */}



    </div>
  )
}

export default Project