"use client"

import Hero from "~/app/components/hero";
import useLenis from "~/app/hooks/useLenis";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

export default function Home() {
    useLenis();
    return (
    <>
      <div>
        <Hero/>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="my-16">
                <div className="text-center">
                    <p className="text-ieeedarkblue text-2xl lg:text-3xl font-bold mb-1">Institute of Electrical and Electronics Engineers</p>
                    <p className="text-ieeeblue text-base lg:text-lg font-semibold leading-5">Advancing technology for the benefit of humanity.</p>
                    <br/>
                    <p className="font-medium">IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
                    <br/>
                    <p className="font-medium">IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 400,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.</p>
                    <br/>
                    <p className="text-ieeeblue font-semibold inline-flex hover:underline hover:underline-offset-4 hover:decoration-2"><Link href="https://www.ieee.org/">Learn more at ieee.org</Link><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg></p>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-10 gap-12 mt-12">
                    <div className="grid grid-cols-2 col-span-4 col-start-1 gap-8 md:m-auto lg:m-0 text-4xl font-bold text-center">
                        <div className="w-auto md:w-64 lg:w-auto flex flex-col gap-1 items-center justify-center border-2 border-ieeegray border-dashed border-opacity-40 rounded-full aspect-square">
                            <p className="text-ieeedarkblue"><CountUp end={1000} duration={3}/>+</p>
                            <p className="text-xl font-bold">Members</p>
                        </div>
                        <div className="w-auto md:w-64 lg:w-auto flex flex-col gap-1 items-center justify-center border-2 border-ieeegray border-dashed border-opacity-40 rounded-full aspect-square">
                            <p className="text-ieeedarkblue"><CountUp end={100} duration={3}/>+</p>
                            <p className="text-xl font-bold">Events</p>
                        </div>
                        <div className="w-auto md:w-64 lg:w-auto flex flex-col gap-1 items-center justify-center border-2 border-ieeegray border-dashed border-opacity-40 rounded-full aspect-square">
                            <p className="text-ieeedarkblue"><CountUp end={3} duration={3}/></p>
                            <p className="text-xl font-bold">Societies</p>
                        </div>
                        <div className="w-auto md:w-64 lg:w-auto flex flex-col gap-1 items-center justify-center border-2 border-ieeegray border-dashed border-opacity-40 rounded-full aspect-square">
                            <p className="text-ieeedarkblue"><CountUp end={10} duration={3}/>+</p>
                            <p className="text-xl font-bold">Mentors</p>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-6 col-start-5 m-auto text-center lg:text-left">
                        <p className="text-ieeedarkblue text-xl font-bold mb-1">About IEEE SB MUJ</p>
                        <p className="font-medium">IEEE Student Branch, Manipal University Jaipur is a group of driven individuals striving to create and spread awareness about various technologies that surround us. In our pursuit for quality and practical knowledge, we are guided by a group of dedicated faculty members who are relentless in their efforts to hone our potential and mould us into the best engineers we could possibly become.</p>
                        <br/>
                        <p className="text-ieeedarkblue text-xl font-bold mb-1">Our Vision</p>
                        <p className="font-medium">{`IEEE SB MUJ envisions itself as the world's premier provider of technical knowledge, community services, educational seminars, and individualised services to the world's top professionals.`}</p>
                        <br/>
                        <p className="text-ieeedarkblue text-xl font-bold mb-1">Our Mission</p>
                        <p className="font-medium">IEEE SB MUJ is the biggest technical professional organisation of Manipal University, Jaipur. Our mission here is to work on projects and development into advancing technology in order to transform lives through the power of technology and education.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}