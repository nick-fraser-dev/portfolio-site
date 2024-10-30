import {navItems} from "@/components/nav-bar/nav-bar";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";

import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiCsharp, SiDotnet, SiTailwindcss, SiMongodb, SiRedux, SiGraphql, SiExpress, SiPostgresql, SiMicrosoftazure, SiDocker, SiPython, SiDjango, SiFramer, SiVercel } from "react-icons/si";

export type SectionName = typeof navItems[number]["name"];

const skillIconSize = 24;
const toolIconSize = 18;

export const toolIcons: Record<string, any> = 
{
    "HTML" : <AiOutlineHtml5 size={toolIconSize}/>,
    "CSS" : <FaCss3Alt size={toolIconSize}/>,
    "JavaScript" : <SiJavascript size={toolIconSize}/>,
    "TypeScript":<SiTypescript size={toolIconSize}/>,
    "React": <SiReact size={toolIconSize}/>,
    "Next.js": <SiNextdotjs size={toolIconSize}/>,
    "Node.js":<SiNodedotjs size={toolIconSize}/>,
    "C#":<SiCsharp size={toolIconSize}/>,
    ".NET": <SiDotnet size={toolIconSize}/>,
    "Git":<FaGitAlt size={toolIconSize}/>,
    "Tailwind": <SiTailwindcss size={toolIconSize}/>,
    "MongoDB": <SiMongodb size={toolIconSize}/>,
    "Redux": <SiRedux size={toolIconSize}/> ,
    "GraphQL": <SiGraphql size={toolIconSize}/> ,
    "Express": <SiExpress size={toolIconSize}/>,
    "PostgreSQL": <SiPostgresql size={toolIconSize}/>,
    "Azure": <SiMicrosoftazure size={toolIconSize}/>,
    "Docker": <SiDocker size={toolIconSize}/>,
    "Python" : <SiPython size={toolIconSize}/>,
    "Django": <SiDjango size={toolIconSize}/>,
    "Framer Motion": <SiFramer size={toolIconSize}/>,
    "Vercel": <SiVercel size={toolIconSize} />,
    "Java": <FaJava size={toolIconSize} />,
    "Spring Boot": <BiLogoSpringBoot size={toolIconSize} />
    
}

export const skillIcons: Record<string, any> = 
{
    "HTML" : <AiOutlineHtml5 size={skillIconSize}/>,
    "CSS" : <FaCss3Alt size={skillIconSize}/>,
    "JavaScript" : <SiJavascript size={skillIconSize}/>,
    "TypeScript":<SiTypescript size={skillIconSize}/>,
    "React": <SiReact size={skillIconSize}/>,
    "Next.js": <SiNextdotjs size={skillIconSize}/>,
    "Node.js":<SiNodedotjs size={skillIconSize}/>,
    "C#":<SiCsharp size={skillIconSize}/>,
    ".NET": <SiDotnet size={skillIconSize}/>,
    "Git":<FaGitAlt size={skillIconSize}/>,
    "Tailwind": <SiTailwindcss size={skillIconSize}/>,
    "MongoDB": <SiMongodb size={skillIconSize}/>,
    "Redux": <SiRedux size={skillIconSize}/> ,
    "GraphQL": <SiGraphql size={skillIconSize}/> ,
    "Express": <SiExpress size={skillIconSize}/>,
    "PostgreSQL": <SiPostgresql size={skillIconSize}/>,
    "Azure": <SiMicrosoftazure size={skillIconSize}/>,
    "Docker": <SiDocker size={skillIconSize}/>,
    "Python" : <SiPython size={skillIconSize}/>,
    "Django": <SiDjango size={skillIconSize}/>,
    "Framer Motion": <SiFramer size={skillIconSize}/>,
    "Java": <FaJava size={skillIconSize} />,
    "Spring Boot": <BiLogoSpringBoot size={skillIconSize} />
}