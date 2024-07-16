import { motion } from 'framer-motion'
import React from 'react'

export default function SectionDivider() {
  return (
    <motion.div 
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.3}}
    className="bg-gray-400 sm:mt-24 mt-12 sm:mb-32 mb-24 h-28 w-1 rounded-full sm:block"></motion.div>
  )
}
