import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '../section-heading';
import Skill from "./skill";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "C#",
    ".NET",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Azure",
    "Docker",
    "Python",
    "Django",
    "Framer Motion",
]

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.95);
    return (
        <section
            className="mb-20 scroll-mt-28 text-center items-center sm:mb-20 md:w-[75%] lg:w-[50%] sm:w-[90%]"
            id="skills" ref={ref}>
            <SectionHeading>SKILLS</SectionHeading>
            <ul className="flex flex-wrap justify-center items-center gap-2 ">
                {skills.map((skill, index) => (
                    <Skill skill={skill} index={index} key={index} />
                ))}
            </ul>
        </section>
    )
}
