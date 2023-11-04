"use client"

import logo from "../assets/ieee-logo.png";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
    return(
        <>
            <div className="bg-ieeeblue w-full max-h-20 z-20 sticky top-0">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link href="/" className="flex items-center mr-auto">
                        <Image src={logo} alt="ieee-logo" className="w-40 h-auto"/>
                    </Link>
                    <div className="mx-auto grid grid-cols-6 text-white text-sm font-medium">
                        <Link href="/" className={`${pathname == "/" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>HOME</Link>
                        <Link href="/events" className={`${pathname == "/events" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>EVENTS</Link>
                        <Link href="/blogs" className={`${pathname == "/blogs" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>BLOGS</Link>
                        <Link href="/societies" className={`${pathname == "/societies" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>SOCIETIES</Link>
                        <Link href="/team" className={`${pathname == "/team" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>TEAM</Link>
                        <Link href="/contact-us" className={`${pathname == "/contact-us" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>CONTACT US</Link>
                    </div>
                    <Link href="/" className="border-2 border-white ml-auto text-sm text-white text-auto font-medium hover:bg-white hover:text-ieeeblue text-center w-36 px-4 py-2 rounded-full">JOIN NOW</Link>
                </div>
            </div>
        </>
    )
}