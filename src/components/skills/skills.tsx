import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '../section-heading';
import Skill from "./skill";

const skills = [
    "C#",
    ".NET",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "Git",
    "Express",
    "Python",
    "Azure",
    "Docker",
    "Tailwind",
    "MongoDB",
    "Next.js",
    "Redux",
    "GraphQL",
    "Django",
    "HTML",
    "CSS",
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
