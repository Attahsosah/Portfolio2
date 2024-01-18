import React, {useState} from 'react'
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
    image?: string;
    proficiency?:string;

};


function Skill({directionLeft, image, proficiency}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 :200,
                opacity: 0 
            }}

            transition={{ duration:1}}
            whileInView={{ opacity:1, x:0}}
            src={image}
            className='rounded-full sm:top-0   border border-gray-500 hover:scale-150 object-cover h-24 w-24 md:w-28 md:h-28  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        
        
        />
      
        

        
    </div>
  )
}

export default Skill