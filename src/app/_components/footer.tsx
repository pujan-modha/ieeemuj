"use client"

import {Montserrat} from "next/font/google";
import Image from "next/image";
import logo from "../assets/ieee-logo.svg";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareInstagram, faSquareFacebook} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-sans",
});
export default function Footer() {
    return(
        <>
            <div id="footer" className="bottom-0 mb-0 w-full z-20 min-h-96 text-white lg:bg-fixed">
               <div className="max-w-7xl mx-auto px-6 lg:px-8">
                   <div className="grid grid-cols-1 lg:grid-cols-2 text-white text-sm font-medium py-16 lg:py-24">
                       <div className="flex flex-col">
                           <div className="flex flex-col mx-auto lg:mx-0 md:flex-row">
                               <div className="md:border-r-2 mx-auto md:mx-0 my-auto">
                                   {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                   <Image src={logo} alt="logo" className="w-64 md:w-72 md:pr-6"/>
                               </div>
                               <div className={`font-sans ${montserrat.variable} grid grid-rows-2 leading-none my-auto md:pl-6 text-center md:text-left`}>
                                   <p className="text-[2.2rem] md:text-[1.7rem] font-medium">Student Branch</p>
                                   <p className="text-[1.5rem] md:text-[1.15rem] font-light">Manipal University Jaipur</p>
                               </div>
                           </div>
                           <div className="flex flex-col md:flex-row md:justify-around pt-8 md:pt-6 md:mx-8 md:scale-90 text-base font-medium space-y-2 md:space-y-0">
                               <Link href="https://www.linkedin.com/company/ieeesbmuj/" className="inline-flex"><FontAwesomeIcon icon={faLinkedin} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeesbmuj</p>
                                   <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                               </Link>
                               <Link href="https://www.instagram.com/ieeemuj/" className="inline-flex"><FontAwesomeIcon icon={faSquareInstagram} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeemuj</p>
                                   <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                               </Link>
                               <Link href="https://www.facebook.com/ieeemuj/" className="inline-flex"><FontAwesomeIcon icon={faSquareFacebook} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeemuj</p>
                                   <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                               </Link>
                           </div>
                       </div>
                       <div className="grid md:grid-cols-2 pt-2">
                           <div className="flex flex-col">
                               <div className="pt-8 lg:pt-0 lg:pb-4">
                                   <p className="text-xl font-medium pb-2">Contact Us</p>
                                   <ul>
                                       <li><Link href="tel:+919721490618"><p>+91 97214 90618</p></Link></li>
                                       <li>Sriansh Raj</li>
                                   </ul>
                                   <br/>
                                   <ul>
                                       <li><Link href="tel:+919569516125"><p>+91 95695 16125</p></Link></li>
                                       <li>Atul Raj Sharma</li>
                                   </ul>
                                   <br/>
                                   <ul>
                                       <li><Link href="mailto:ieee@muj.manipal.edu"><p>ieee@muj.manipal.edu</p></Link></li>
                                   </ul>
                               </div>
                               <div className="pt-8 lg:pt-4">
                                   <p className="text-xl font-medium pb-2">Address</p>
                                   <p className="w-[50vw] md:w-[40vw] lg:w-full lg:pr-16 leading-6">Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007</p>
                               </div>
                           </div>
                           <div className="flex flex-col">
                               <div className="pt-8 lg:pt-0 lg:pb-4">
                                   <p className="text-xl font-medium pb-2">Faculty Messages</p>
                                   <ul>
                                       <li className="leading-6"><Link href="/">{`Director's Message`}</Link></li>
                                       <li className="leading-6"><Link href="/">{`Coordinator's Message`}</Link></li>
                                       <li className="leading-6"><Link href="/">{`DSW's Message`}</Link></li>
                                       <li className="leading-6"><Link href="/">{`Advisor's Message`}</Link></li>
                                   </ul>
                               </div>
                               <div className="pt-8 lg:pt-4">
                                   <p className="text-xl font-medium pb-2">Links</p>
                                   <ul>
                                       <li className="leading-6"><Link href="https://jaipur.manipal.edu/">MUJ Official Website</Link></li>
                                       <li className="leading-6"><Link href="https://www.ieee.org/">IEEE Official Website</Link></li>
                                       <li className="leading-6"><Link href="https://site.ieee.org/r1-sac/resources/student-scholarships/">IEEE Scholarship</Link></li>
                                       <li className="leading-6"><Link href="https://www.ieee.org/membership_services/membership/benefits/benefits.html">IEEE Benefits</Link></li>
                                       <li className="leading-6"><Link href="https://www.ieee.org/membership_services/membership/join/index.html">IEEE Global Membership</Link></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="pb-2"><p className="text-center text-sm">MADE WITH <span className="animate-pulse">❤️</span>️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️ BY PUJAN MODHA</p></div>
               </div>
            </div>
        </>
    )
}