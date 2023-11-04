"use client"

import logo from "../assets/ieee-logo.svg";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-sans",
});
export default function Navbar() {
    const pathname = usePathname();
    return(
        <>
            <div className="bg-ieeeblue w-full max-h-20 z-20 sticky top-0">
                <div className="max-w-7xl flex flex-row items-center justify-between mx-auto px-6 lg:px-8">
                    <Link href="/" className="flex items-center ml-0 pt-2">
                        <div className="grid grid-rows-2 lg:scale-90">
                            <div>
                                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                <Image src={logo} alt="logo" className="w-[144px] lg:w-36 lg:pr-0"/>
                            </div>
                            <div className={`font-sans ${montserrat.variable} text-white`}>
                                <p className="text-xs font-semibold">STUDENT BRANCH MUJ</p>
                            </div>
                        </div>
                    </Link>
                    <div className="hidden mx-auto lg:grid grid-cols-6 text-white text-xs font-medium pb-4">
                        <Link href="/" className={`${pathname == "/" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>HOME</Link>
                        <Link href="/events" className={`${pathname == "/events" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>EVENTS</Link>
                        <Link href="/blogs" className={`${pathname == "/blogs" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>BLOGS</Link>
                        <Link href="/societies" className={`${pathname == "/societies" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>SOCIETIES</Link>
                        <Link href="/team" className={`${pathname == "/team" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>TEAM</Link>
                        <Link href="/contact-us" className={`${pathname == "/contact-us" ? "bg-white text-ieeeblue" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>CONTACT US</Link>
                    </div>
                    <div className="hidden lg:inline pb-4">
                        <Link href="/" className="border-2 border-white mr-0 text-xs text-white text-auto font-medium hover:bg-white hover:text-ieeeblue text-center w-36 px-4 py-2 rounded-full">JOIN NOW</Link>
                    </div>
                </div>
            </div>
        </>
    )
}