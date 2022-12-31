import React from 'react'
import { motion } from 'framer-motion'


type Props = {
    image?:string;
    title?:string;
    link?:string;
    number?:any;
    description?:string;
}

function Project({image,title,link,description,number}: Props) {
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
                    alt=""
                    
                    
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
                       <a href="https://ordering-app-lemon.vercel.app"> <h4  className='text-4xl font-semibold text-center'>
                           
                           {title}</h4>
                            </a>

                            <p  className='text-lg text-center md:text-left'>
                                {description}

                            </p>
                            
                            
                            </div>
                           
                    
                </div>
             {/* ) )} */}



    </div>
  )
}

export default Project