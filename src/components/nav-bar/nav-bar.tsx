"use client";
import { motion } from "framer-motion";
import NavItem from "./nav-item";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "@/lib/types";
import { usePathname } from "next/navigation";

export const navItems = [
    {
        name: "Home",
        ref: "#home"
    },
    {
        name: "Skills",
        ref: "#skills"
    },
    {
        name: "About",
        ref: "#about"
    },
    {
        name: "Projects",
        ref: "#projects"
    }
] as const;
export default function NavBar() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const pathname = usePathname();


    function handleNavClick(newActiveSectionName: SectionName) {
        setActiveSection(newActiveSectionName);
        setTimeOfLastClick(Date.now());
    }
    const validPaths = ["/", "/#home", "/#skills", "/#about", "/#projects"]
    if (!validPaths.includes(pathname)) {
        return (
            <></>
        )
    };
    return (
        <>
            <header className="z-[999] relative" >
                <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full 
                    rounded-none border border-white border-opacity-40
                    bg-white bg-opacity-70 shadow-2xl shadow-black/[0.5] 
                    backdrop-blur-[50px]
                    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 0.8 }}
                >
                </motion.div>

                <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0" >

                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                        {navItems.map((navItem, id) => (
                            <NavItem navItem={navItem} key={id} isActive={activeSection == navItem.name} handleNavClick={handleNavClick} />
                        ))}
                    </ul>
                </nav>

            </header>
        </>
    )
}
