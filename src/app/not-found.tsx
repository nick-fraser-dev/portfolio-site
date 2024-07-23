"use client";
import { headers } from 'next/headers'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

export default function NotFound() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col font-light tracking-widest text-3xl items-center text-center gap-4">
            {pathname} not found.
            <div className="flex flex-row  items-center text-center justify-center align-middle bg-black text-white text-xl rounded-lg gap-2 shadow-xl px-4 py-2 hover:scale-110 group transition">
                <Link href="/" className="px-2" >Return Home </Link>
                <BiArrowBack className="group-hover:-translate-x-4 transition" />
            </div>


        </div>

    )
}
