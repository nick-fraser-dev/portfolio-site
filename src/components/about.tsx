import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ActiveSectionContext, useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About");
  
  //this should be updated with the WhileInView FramerMotion functionality from skills/skill.tsx
  return (
    <section
      ref={ref}
      className="text-2xl mb-20 max-w-[38rem] text-center scroll-mt-28" id="about">
      <SectionHeading>ABOUT ME</SectionHeading>

      <motion.p className="mb-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        
      >
        I am a <span className="font-medium">software developer</span> based in <span className="italic">Burlington, Vermont.</span> I am a lifelong learner of
        <span className="font-medium"> software engineering</span> and <span className="font-medium">music</span>.
        I am a passionate problem solver who loves selecting the right tools and finding the right solution for the job.
        I love React front ends, .NET and Node back ends, Nextjs full-stack apps, as well as SwiftUI and React Native mobile stacks.
      </motion.p>

      <motion.p className="mb-3 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <span className='italic'>When im not coding</span>{" "}
        I enjoy writing music, practicing piano and guitar, spinning vinyl,
        cooking with my wife, getting outside, and playing with our cats.
      </motion.p>
    </section>

  )
}