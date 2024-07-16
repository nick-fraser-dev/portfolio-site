import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function IntroLinks(){
    return(
        <motion.div
             initial={{opacity:0, y:100}}
             animate={{opacity:1, y:0}}
             transition={{delay: 0.2}}
            className="flex flex-col sm:flex-row items-center justify-end gap-2 px-4 font-medium text-lg mb-24 scroll-mt-96"
            id="links">
            <Link 
                href="mailto:nickfraser40@gmail.com"
                className="group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  transition cursor-pointer scroll-mt-96"
                id="contact"
                target="_blank"
                >
                Contact me <BsArrowRight className="opacity-60 group-hover:translate-x-2 transition"/> 
            </Link>
            <Link 
                className="group bg-white flex items-center text-gray-700 px-7 py-3 gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-neutral-200 hover:text-gray-950 active:scale-105 group transition cursor-pointer border border-black/10 scoll-mt-96"
                href="/NickFraserResume.pdf" 
                download
                id="resume"
                target="_blank">
                Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </Link>
            <a 
                className="group bg-white flex items-center text-gray-700 p-4 gap-2 rounded-lg outline-none focus:scale-110 hover:scale-[1.15] hover:bg-gray-200 hover:text-gray-950 active:scale-[1.15] group transition cursor-pointer border border-black/10"
                href="https://www.linkedin.com/in/nick-fraser-0731b1245/" target="_blank"><BsLinkedin className='opacity-60 group-hover:scale-110 transition'/>
            </a>
            <a 
                className="group bg-white flex items-center text-gray-700 p-4 gap-2 rounded-lg outline-none focus:scale-110 hover:scale-[1.15] hover:bg-gray-200 active:scale-[1.15] hover:text-gray-950 group transition cursor-pointer border border-black/10"
                href="https://github.com/nick-fraser-dev" target="_blank"> <FaGithubSquare className='opacity-60 group-hover:scale-110 transition'/></a>
            
        </motion.div>
    )
}