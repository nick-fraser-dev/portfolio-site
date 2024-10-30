import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiCsharp, SiDotnet, SiTailwindcss, SiMongodb, SiRedux, SiGraphql, SiExpress, SiPostgresql, SiMicrosoftazure, SiDocker, SiPython, SiDjango, SiFramer } from "react-icons/si";

const size = 48;
const skillIcons: Record<string, any> = 
{
    "HTML" : <AiOutlineHtml5 size={size}/>,
    "CSS" : <FaCss3Alt size={size}/>,
    "JavaScript" : <SiJavascript size={size}/>,
    "TypeScript":<SiTypescript size={size}/>,
    "React": <SiReact size={size}/>,
    "Next.js": <SiNextdotjs size={size}/>,
    "Node.js":<SiNodedotjs size={size}/>,
    "C#":<SiCsharp size={size}/>,
    ".NET": <SiDotnet size={size}/>,
    "Git":<FaGitAlt size={size}/>,
    "Tailwind": <SiTailwindcss size={size}/>,
    "MongoDB": <SiMongodb size={size}/>,
    "Redux": <SiRedux size={size}/> ,
    "GraphQL": <SiGraphql size={size}/> ,
    "Express": <SiExpress size={size}/>,
    "PostgreSQL": <SiPostgresql size={size}/>,
    "Azure": <SiMicrosoftazure size={size}/>,
    "Docker": <SiDocker size={size}/>,
    "Python" : <SiPython size={size}/>,
    "Django": <SiDjango size={size}/>,
    "Framer Motion": <SiFramer size={size}/>,
    "Java": <FaJava size={size} />,
    "Spring Boot": <BiLogoSpringBoot size={size} />
}

const animationVariants = {
    initial: {
        opacity: 0,
        y:100,
        rotateY: 360
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        rotateY: 0,
        transition: {
            delay: 0.05 * index,
            duration: 0.3
        }
    })
}

interface Props {
    skill: string,
    index: number,
}

export default function Skill({skill, index} : Props){
    return (
        <>
        <motion.li 
        className="flex flex-col
            sm:size-12
            md:size-36
            text-center items-center justify-center 
            border border-black[/0.1] rounded-xl text-gray-800" 
            key={index}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            custom={index}
        >
            {skillIcons[skill]}
            <h2 className="max-md:hidden">{skill}</h2>
        </motion.li> 
        </>
    )
}