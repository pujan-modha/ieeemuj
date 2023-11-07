"use client"

import logo from "~/app/_assets/ieee-logo.svg";
import muj_dome from "~/app/_assets/muj_dome.svg";
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
            <div className="bg-ieeeblue w-full max-h-20 z-20 sticky top-0 select-none">
                <div className="max-w-7xl flex flex-row items-center justify-between mx-auto px-4 lg:px-8">
                    <div className="content-center ml-0 pt-2.5">
                        <Link href="/" className="flex items-center">
                            <div className="grid grid-rows-2 content-around">
                                <div className="mx-auto">
                                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                    <Image src={muj_dome} alt="logo" className="w-24 px-2"/>
                                </div>
                                <div className={`font-sans ${montserrat.variable} text-white`}>
                                    <hr className="mt-0.5"/>
                                    <p className="text-sm font-semibold text-center leading-none">IEEE SB MUJ</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden mx-auto lg:grid grid-cols-6 text-white text-sm font-medium content-center">
                        <Link href="/" className={`${pathname == "/" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>HOME</Link>
                        <Link href="/events" className={`${pathname == "/events" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>EVENTS</Link>
                        <Link href="/blogs" className={`${pathname == "/blogs" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>BLOGS</Link>
                        <Link href="/societies" className={`${pathname == "/societies" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>SOCIETIES</Link>
                        <Link href="/team" className={`${pathname == "/team" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>TEAM</Link>
                        <Link href="/contact-us" className={`${pathname == "/contact-us" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>CONTACT US</Link>
                    </div>
                    <div className="hidden lg:inline content-center">
                        <Link href="/" className="border-2 border-white mr-0 text-sm text-white text-auto font-medium hover:bg-white hover:text-ieeeblue text-center w-36 px-4 py-2 rounded-full">JOIN NOW</Link>
                    </div>
                </div>
            </div>
        </>
    )
}