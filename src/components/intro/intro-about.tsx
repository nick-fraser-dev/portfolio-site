import { motion } from "framer-motion";

export default function IntroAbout() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      className='mb-10 mt-4 px-4 text-4xl font-light !leading-[1.5] sm:text-4xl'>

      <span className="font-bold">Hi, I'm Nick. </span>
      <span>I'm a  </span>
      <span className="font-bold">full-stack developer </span>
      <span>with </span>
      <span className="font-bold">8 years </span>
      <span>of experience. </span>
      <span>I like to build </span>
      <span className='italic'>apps and sites </span>
      <span>for </span>
      <span className="font-bold">web, mobile, </span>
      <span>and </span>
      <span className="font-bold">desktop.</span>
    </motion.h1>
  )
}