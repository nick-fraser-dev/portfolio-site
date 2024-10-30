"use client";
import Project from "./project";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";

const projects = [
    {
        projectName: "Portfolio Site",
        projectImage: "/portfolio-site.png",
        projectDescription: "A minimalist portfolio built with Next.js and Framer Motion.",
        projectTools: ["TypeScript", "Next.js", "Tailwind", "Framer Motion", "Vercel"],
        projectGithub: "https://github.com/nick-fraser-dev/portfolio-site",
        projectLink: "#home"
    },
    {
        projectName: "RecipeRepo",
        projectImage: "/recipe-repo.png",
        projectDescription: "A recipe repository built with React, PostgreSQL, and TailwindCSS.",
        projectTools: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind"],
        projectGithub: "https://github.com/nick-fraser-dev",
        projectLink: "https://github.com/nick-fraser-dev"
    },
    {
        projectName: "Coming Soon",
        projectImage: "coming soon",
        projectDescription: "This project is coming soon",
        projectTools: ["C#", ".NET", "React", "TypeScript", "Azure", "Docker"],
        projectGithub: "https://github.com/nick-fraser-dev",
        projectLink: "#home"
    },
    {
        projectName: "Coming Soon",
        projectImage: "coming soon",
        projectDescription: "This project is coming soon",
        projectTools: ["Java", "Spring Boot", "React", "TypeScript", "HTML", "CSS"],
        projectGithub: "https://github.com/nick-fraser-dev",
        projectLink: "#home"
    }
]

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.2);
    return (
        <section className="scroll-mt-28 flex flex-col items-center align-middle text-center mb-24 sm:w-[75%]" id="projects" ref={ref}>
            <SectionHeading>SELECTED PROJECTS</SectionHeading>
            <div className="flex flex-col items-center text-center align-middle w-11/12 sm:w-[75%] rounded-xl gap-4">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        index={index}
                        projectName={project.projectName}
                        projectImage={project.projectImage}
                        projectDescription={project.projectDescription}
                        projectTools={project.projectTools}
                        projectGithub={project.projectGithub}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>
        </section>
    )
}
