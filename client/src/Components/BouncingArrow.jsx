import React from 'react'
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

export default function BouncingArrow() {
  return (
    <motion.div
    animate={{ x: [-5, 5, -5]}}
    transition={{
        repeat:Infinity,
        duration: 3,
        ease: "easeInOut"
    }}
    className='relative flex items-center'
    >
    <FontAwesomeIcon className='text-xl' icon={faArrowAltCircleRight} />
    </motion.div>
    
  )
}
