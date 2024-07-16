import { toolIcons } from '@/lib/types';
import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsGithub, BsLink } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';


const animationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: 0.5
        }
    })
}

interface Props {
    index: number,
    projectName: string,
    projectImage: string,
    projectDescription: string,
    projectTools: string[],
    projectGithub: string,
    projectLink: string
}

export default function Project({ index, projectName, projectImage, projectDescription, projectTools, projectGithub, projectLink }: Props) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center align-middle border border-gray-200 gap-4 bg-white bg-opacity-50 font-light rounded-xl sm:h-[600px] w-full sm:w-full group transition"
            key={index}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
        >
            <div className="font-medium">
                <p>{projectName}</p>
            </div>
            <div className="flex flex-col sm:w-full sm:h-3/4 items-center justify-center text-center border rounded-xl">
                {projectImage == "coming soon" ?

                    <h1 className="text-3xl font-light tracking-widest flex-wrap sm:h-48" >
                        COMING SOON
                    </h1>

                    :
                    <Image src={`${projectImage}`} alt="project-picture" width="800" height="800" className="w-auto h-auto rounded-xl" />}
            </div>

            <div>
                <p className="flex flex-wrap text-center justify-center items-center">{projectDescription}</p>
            </div>
            <div className="flex flex-row w-full rounded-xl pl-2 sm:pl-2">
                <div className="flex flex-row justify-around w-1/4 font-extralight">
                    <a 
                        href={projectGithub}
                        target="_blank"
                        className="flex flex-col items-center text-center justify-center">
                        <FaGithubSquare size={22} />
                    </a>
                    <a 
                        href={projectLink}
                        target={projectLink == "#home" ? "" : "_blank"}
                        className="flex flex-col items-center text-center justify-center">
                        <BsLink size={22}/>
                    </a>
                </div>
                <div className="flex flex-row items-center text-center align-middle justify-around gap-4 border border-gray-200 w-1/2 h-1/12 p-2 rounded-xl">
                    {projectTools.map((tool, index) =>
                        <div className="" key={index}>
                            {toolIcons[tool]}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
