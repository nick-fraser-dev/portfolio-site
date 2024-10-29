import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.9);
  return (
    <section
      ref={ref}
      className="text-xl mb-20 max-w-[38rem] text-center scroll-mt-28" id="about">
      <SectionHeading>ABOUT ME</SectionHeading>

      <motion.p className="mb-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView="animate"
        viewport={{ once: true }}

      >
        I am a <span className="font-medium">software developer</span> based in <span className="italic">Burlington, Vermont.</span> I am a lifelong learner of
        <span className="font-medium"> software engineering</span> and <span className="font-medium">music</span>.
        I was first introduced to programming in college while I was studying music technology and I was hooked.  
        My core areas of expertise are <span className="font-medium">C#</span> and the <span className="font-medium">.NET</span> ecosystem, <span className="font-medium">TypeScript</span> and the <span className="font-medium">React/Node</span> ecosystem, <span className="font-medium">SQL</span> and <span className="font-medium">NoSQL databases</span>, <span className="font-medium">Java</span>, and <span className="font-medium">Python</span>.
        I also have experience with mobile development stacks like <span className="font-medium">React Native</span>, and <span className="font-medium">Swift/SwiftUI</span>.
        I love turning ideas into easy to use and elegant tools that solve actual problems for actual people.
      </motion.p>

      <motion.p className="mb-3 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView="animate"
        viewport={{ once: true }}
      >
        <span className='italic'>When I'm not coding</span>{" "}
        I enjoy writing music, getting outside,
        cooking with my wife, and playing with our cats.
      </motion.p>
    </section>

  )
}
