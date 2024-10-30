import { motion } from "framer-motion";
import Image from "next/image";
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
                    {/* <HiOutlineComputerDesktop className='h-42 bg-clip-content p-0 m-2 border-spacing-0 bg-slate-50 bg-round rounded-3xl shadow-xl' size={200} /> */}
                    <div className="overflow-hidden rounded-3xl ring-indigo-400 ring-2">
                        <Image
                            src={"/static/nf_li.jpg"} height={200} width={200} alt={"nick-fraser"}
                            className="relative rounded-3xl scale-125 translate-y-4 brightness-110 saturate-[.9]"
                            
                        />
                    </div>

                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", delay: 1, duration: 0.25 }}

                        className='absolute -top-4 -right-2.5 bg-green-300 border-spacing-10 text-black bg-round rounded-full p-2 outline-black h-10 w-10 flex flex-col items-center justify-center'>Hi!</motion.span>
                </motion.div>

            </div>
        </div>
    )
}