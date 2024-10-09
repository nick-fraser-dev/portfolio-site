import { SectionName } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";

type navItem = {
    ref: string;
    name: SectionName;
}

interface Props {
    navItem: navItem,
    isActive: boolean,
    handleNavClick: (newActiveSectionName: SectionName) => void;

}

export default function NavItem({ navItem, isActive, handleNavClick }: Props) {
    return (
        <motion.li className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <Link
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition ${isActive ? "text-gray-950" : ""}`}
                href={navItem.ref}
                onClick={() => handleNavClick(navItem.name)}>
                {navItem.name}
                {isActive ?
                    <motion.span
                        className={`rounded-full absolute inset-0 border border-black`}
                        layoutId="activeSection"
                        transition={{
                            type: "tween",
                            duration: 0.5
                        }}
                    >

                    </motion.span> : null}
            </Link>
        </motion.li>
    )
}