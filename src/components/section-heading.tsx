import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function SectionHeading( {children}: Props) {
  return (
    <motion.h2 className="text-3xl font-light tracking-widest capitalize mt-16 mb-8 sm:mb-24 text-center text-gray-800"
    initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.75}}
        > 
        {children}
    </motion.h2>
  )
}
