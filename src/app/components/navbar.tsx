"use client"

import logo from "~/app/assets/ieee-logo.svg";
import muj_dome from "~/app/assets/muj_dome.svg";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const pathname = usePathname();
    return(
        <>
            <div className="bg-ieeeblue w-full z-20 sticky top-0 select-none">
                <div className={`justify-around my-0  ${
                    !toggleMenu
                        ? " "
                        : "bg-ieeeblue bg-opacity-0 duration-700"
                }`}>
                    <div className="max-w-7xl flex flex-row items-center justify-between mx-auto px-4 lg:px-8">
                        <div className="flex mt-2 py-1 ml-0 items-center">
                            <Link href="/" className="flex items-center">
                                <div className="grid grid-rows-2 content-around">
                                    <div className="mx-auto">
                                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                        <Image src={muj_dome} alt="logo" className="w-24 px-2"/>
                                    </div>
                                    <div className="text-white">
                                        <hr className="mt-0.5"/>
                                        <p className="text-sm font-semibold text-center leading-none">IEEE SB MUJ</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="hidden mx-auto lg:grid grid-cols-6 text-white text-sm font-medium text-center items-center">
                            <Link href="/" className={`${pathname == "/" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>HOME</Link>
                            <Link href="/events" className={`${pathname == "/events" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>EVENTS</Link>
                            <Link href="/blogs" className={`${pathname == "/blogs" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>BLOGS</Link>
                            <Link href="/societies" className={`${pathname == "/societies" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>SOCIETIES</Link>
                            <Link href="/team" className={`${pathname == "/team" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>TEAM</Link>
                            <Link href="/contact-us" className={`${pathname == "/contact-us" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>CONTACT US</Link>
                        </div>
                        <div className="hidden lg:inline items-center">
                            <Link href="/" className="border-2 border-white mr-0 text-sm text-white font-medium hover:bg-white hover:text-ieeeblue text-center w-36 px-4 py-2 rounded-full">JOIN NOW</Link>
                        </div>
                        {/* Mobile navigation toggle */}
                        <div className="col-span-10 col-start-13 lg:hidden flex text-white">
                            <button onClick={() => setToggleMenu(!toggleMenu)}>
                                {!toggleMenu ? <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg></div> : <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                </div>}
                            </button>
                        </div>
                    </div>
                    {/* mobile navigation */}
                    <div className="w-full bg-ieeeblue grid mx-auto px-4 absolute top-16">
                        <div className={`z-20 overflow-hidden lg:hidden duration-700 ${
                            !toggleMenu ? "h-0" : "h-screen bg-fixed"
                        }`}>
                            <div className="flex items-center justify-center h-screen">
                                <div className="grid gap-12 text-white font-medium text-center text-xl -mt-32">
                                    <Link href="/" onClick={() => setToggleMenu(!toggleMenu)} className={`${pathname == "/" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>HOME</Link>
                                    <Link href="/events" onClick={() => setToggleMenu(!toggleMenu)} className={`${pathname == "/events" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>EVENTS</Link>
                                    <Link href="/blogs" onClick={() => setToggleMenu(!toggleMenu)} className={`${pathname == "/blogs" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>BLOGS</Link>
                                    <Link href="/societies" onClick={() => setToggleMenu(!toggleMenu)} className={`${pathname == "/societies" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>SOCIETIES</Link>
                                    <Link href="/team" onClick={() => setToggleMenu(!toggleMenu)} className={`${pathname == "/team" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>TEAM</Link>
                                    <Link href="/contact-us" onClick={() => setToggleMenu(!toggleMenu)} className={`${pathname == "/contact-us" ? "bg-white text-ieeeblue underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} px-4 py-2 rounded-full`}>CONTACT US</Link>
                                    <Link href="/" onClick={() => setToggleMenu(!toggleMenu)} className="border-2 border-white text-white hover:bg-white hover:text-ieeeblue px-4 py-2 rounded-full">JOIN NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}