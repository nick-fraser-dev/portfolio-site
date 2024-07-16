import React from 'react'
import IntroHero from './intro-hero';
import IntroAbout from './intro-about';
import IntroLinks from './intro-links';
import { useSectionInView } from '@/lib/hooks';
export default function Intro() {
  const {ref } = useSectionInView("Home");
  return (
    
    <section className='mb-0 max-w-[50rem] text-center sm:mb-2 sm:mt-12 scroll-mt-48' id="home" ref={ref}>

        <IntroHero />
        <IntroAbout />
        <IntroLinks />     
        
    </section>
  )
}