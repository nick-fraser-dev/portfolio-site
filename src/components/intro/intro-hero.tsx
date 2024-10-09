import { motion } from "framer-motion";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export default function IntroHero() {
    return (
        <div className="flex items-center justify-center pb-10">

            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <HiOutlineComputerDesktop className='h-42 bg-clip-content p-0 m-2 border-spacing-0 bg-slate-50 bg-round rounded-3xl shadow-xl' size={200} />
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", delay: 1, duration: 0.25 }}

                        className='absolute -top-2 right-0.5 bg-green-300 border-spacing-10 text-black bg-round rounded-full p-2 outline-black'>Hi!</motion.span>
                </motion.div>

            </div>
        </div>
    )
}