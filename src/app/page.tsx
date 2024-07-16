"use client";
import Projects from "@/components/projects/projects";
import Skills from '@/components/skills/skills';
import Intro from '@/components/intro/intro';
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Copyright from "@/components/copyright";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Copyright />

    </main>
  );
}
