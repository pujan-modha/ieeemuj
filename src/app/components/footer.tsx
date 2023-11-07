"use client"

import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import logo from "~/app/assets/ieee-logo.svg";
import muj_dome from "~/app/assets/muj_dome.svg";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareInstagram, faSquareFacebook, faSquareYoutube} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const jetbrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});
export default function Footer() {
    return(
        <>
            <div id="parallax" className="bottom-0 mb-0 w-full z-20 min-h-96 text-white bg-fixed">
               <div className="max-w-7xl mx-auto px-4 lg:px-8">
                   <div className="grid grid-cols-1 lg:grid-rows-2 text-white text-sm font-medium py-16 lg:py-20 lg:gap-x-8">
                       <div>
                           <div className="grid grid-cols-1 lg:grid-cols-2 md:mx-auto lg:my-4">
                               <div className="flex flex-col mx-auto lg:mx-0 md:flex-row mb-8 md:mb-4 lg:mb-0 select-none">
                                   <div className="md:border-r-2 mx-auto md:mx-0 my-auto">
                                       {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                       <Image src={logo} alt="logo" className="w-64 md:w-72 md:pr-4 md:py-1"/>
                                   </div>
                                   <hr className="md:hidden my-1"/>
                                   <div className="flex flex-col leading-none md:pl-4 my-auto text-center md:text-left">
                                       {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                       <Image src={muj_dome} alt="MUJ Dome" className="w-32 mx-auto pb-0.5"/>
                                       <p className="text-[2.2rem] md:text-[1.5rem] font-medium">Student Branch</p>
                                       <p className="text-[1.5rem] md:text-[1rem] font-light">Manipal University Jaipur</p>
                                   </div>
                               </div>
                               <div className="mt-6">
                                   <ul className="grid grid-cols-1 md:grid-cols-2 justify-between content-evenly text-base font-medium">
                                       <li>
                                           <Link href="https://www.linkedin.com/company/ieeesbmuj/" className="inline-flex"><FontAwesomeIcon icon={faLinkedin} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeesbmuj</p>
                                               <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                           </Link>
                                       </li>
                                       <li>
                                           <Link href="https://www.instagram.com/ieeemuj/" className="inline-flex"><FontAwesomeIcon icon={faSquareInstagram} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeemuj</p>
                                               <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                           </Link>
                                       </li>
                                       <li>
                                           <Link href="https://www.facebook.com/ieeemuj/" className="inline-flex"><FontAwesomeIcon icon={faSquareFacebook} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeemuj</p>
                                               <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                           </Link>
                                       </li>
                                       <li>
                                           <Link href="https://www.youtube.com/@ieeemuj6141" className="inline-flex"><FontAwesomeIcon icon={faSquareYoutube} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeemuj6141</p>
                                               <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                           </Link>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
                               <div className="mt-6 lg:mt-0">
                                   <p className="text-xl font-semibold pb-2">Contact Us</p>
                                   <div className="text-base flex flex-col gap-3">
                                       <ul>
                                           <li><Link href="tel:+919721490618">+91 97214 90618</Link></li>
                                           <li>Sriansh Raj</li>
                                       </ul>
                                       <ul>
                                           <li><Link href="tel:+919569516125">+91 95695 16125</Link></li>
                                           <li>Atul Raj Sharma</li>
                                       </ul>
                                       <ul>
                                           <li><Link href="mailto:ieee@muj.manipal.edu">ieee@muj.manipal.edu</Link></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="mt-6 lg:mt-0">
                                   <p className="text-xl font-semibold pb-2">Links</p>
                                   <ul className="text-base flex flex-col gap-1">
                                       <li className="leading-6"><Link href="/credits">Website Credits</Link></li>
                                       <li className="leading-6"><Link href="https://jaipur.manipal.edu/">MUJ Official Website</Link></li>
                                       <li className="leading-6"><Link href="https://www.ieee.org/">IEEE Official Website</Link></li>
                                       <li className="leading-6"><Link href="https://site.ieee.org/r1-sac/resources/student-scholarships/">IEEE Scholarship</Link></li>
                                       <li className="leading-6"><Link href="https://www.ieee.org/membership_services/membership/benefits/benefits.html">IEEE Benefits</Link></li>
                                       <li className="leading-6"><Link href="https://www.ieee.org/membership_services/membership/join/index.html">IEEE Global Membership</Link></li>
                                   </ul>
                               </div>
                               <div className="mt-6 lg:mt-0">
                                   <p className="text-xl font-semibold pb-2">Faculty Messages</p>
                                   <ul className="text-base flex flex-col gap-1">
                                       <li className="leading-6"><Link href="/">{`Director's Message`}</Link></li>
                                       <li className="leading-6"><Link href="/">{`Coordinator's Message`}</Link></li>
                                       <li className="leading-6"><Link href="/">{`DSW's Message`}</Link></li>
                                       <li className="leading-6"><Link href="/">{`Advisor's Message`}</Link></li>
                                   </ul>
                               </div>
                               <div className="mt-6 lg:mt-0">
                                   <p className="text-xl font-semibold pb-2">Address</p>
                                   <p className="text-base leading-6 w-[50vw] md:w-[25vw] lg:w-auto">Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={`font-mono ${jetbrains_mono.variable} pb-2`}><p className="text-center text-xs">DESIGNED & DEVELOPED WITH <span className="animate-pulse">❤️</span>️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️ BY PUJAN MODHA</p></div>
               </div>
            </div>
        </>
    )
}