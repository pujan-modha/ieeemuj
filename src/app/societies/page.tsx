"use client"

import Image from "next/image";
import cs_logo from "~/app/assets/cs_logo.png";
import wie_logo from "~/app/assets/wie_logo.png";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faInstagram} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import useLenis from "~/app/hooks/useLenis";

export default function Page() {
    useLenis();
    return (
        <>
            <div>
                <div id="parallax" className="w-full py-12 bg-fixed">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <p className="text-4xl text-center font-bold text-white">SOCIETIES</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    <div className="my-16">
                        <div className="flex flex-col gap-y-36 md:gap-y-24 font-medium">
                            <div className="flex flex-col lg:grid lg:grid-cols-12">
                                <div
                                    className="lg:col-start-1 lg:col-span-4 lg:pr-8 lg:my-auto mb-8 px-8 md:px-0 md:pr-96 lg:px-0">
                                    <Image src={cs_logo} alt="IEEE Computer Society"/>
                                </div>
                                <div className="lg:col-start-5 lg:col-span-8 lg:pl-8">
                                    <p className="text-2xl font-bold text-ieeedarkblue">IEEE Computer Society</p>
                                    <hr className="mt-1 mb-2 border-ieeegray opacity-20"/>
                                    <div className="text-justify">
                                        <p>“Serving computing at its best with inclusion and diversity” is the prime
                                            motto of the IEEE Computer Society. This society was created keeping in mind
                                            IEEE’s continued commitment to providing options at best. The IEEE Computer
                                            Society is driven by the central goals of equity, diversity, inclusion, and
                                            yearn to serve computing at its perfection.</p>
                                        <br/>
                                        <p>With an intent to expand the IEEE’s reach and learnings, this society was
                                            started a year back in early 2020. Since then, society has tried every
                                            possible course of action by conducting diverse events such as webinars,
                                            competitions, workshops, and mentorship programs to set a goal for the young
                                            achievers. The members of IEEE CS have been skilled and earned minimal
                                            expertise in roughly all possible sub-sections of CS via our accelerator
                                            program. The senior student mentors steer them on each stage they take and
                                            deliver them with the professional material for further reference.</p>
                                        <br/>
                                        <p>We aim to proactively support diversity and inclusion by being the premier
                                            source for information, inspiration, and collaboration in computer science
                                            and engineering. Connecting members on campus, this IEEE Computer Society
                                            empowers the students who wish to advance in technology by delivering tools
                                            at all stages of their professional careers.</p>
                                        <br/>
                                        <p>“Computer science is the operating system for all innovations.” At IEEE CS,
                                            we look at it similarly, trying to make a better world by working as a
                                            team.</p>
                                        <br/>
                                        <div>
                                            <ul className="flex flex-row justify-start gap-x-4 text-ieeegray text-opacity-60">
                                                <li>
                                                    <Link href="https://cs.ieeemuj.com/"
                                                          className="inline-flex"><p className="text-lg font-semibold text-ieeedarkblue">Website</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                             className="w-4 h-4">
                                                            <path fillRule="evenodd"
                                                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/company/ieeecsmuj/"
                                                          className="inline-flex"><FontAwesomeIcon icon={faLinkedinIn} size="xl" color="#0066CC"/>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                             className="w-4 h-4">
                                                            <path fillRule="evenodd"
                                                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/company/ieeecsmuj/"
                                                          className="inline-flex"><FontAwesomeIcon icon={faInstagram} size="xl" color="#CC3366"/>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                             className="w-4 h-4">
                                                            <path fillRule="evenodd"
                                                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
                                <div className="lg:col-start-1 lg:col-span-8 lg:pr-8">
                                    <p className="text-2xl font-bold text-ieeedarkblue">IEEE Women in Engineering</p>
                                    <hr className="mt-1 mb-2 border-ieeegray opacity-20"/>
                                    <div className="text-justify">
                                        <p>IEEE Women in Engineering (WIE) is one of the largest international
                                            professional organizations dedicated to promoting women engineers,
                                            scientists, and inspiring girls everywhere to follow their academic
                                            interests in a career in engineering. The mission of IEEE WIE is to
                                            facilitate the recruitment and retention of women in technical disciplines
                                            globally. IEEE WIE envisions a vibrant community of professionals using
                                            their diverse talents to innovate for the benefit of humanity.</p>
                                        <br/>
                                        <p>IEEE-WIE MUJ Student Branch started in 2018 and has left no stone unturned in
                                            providing a platform where women can share ideas and collaborate. We seek to
                                            maintain a healthy and warm ambience for young women to discuss opinions,
                                            practice leadership and hone their skills by hosting numerous webinars,
                                            workshops, competitions, and internships.</p>
                                        <br/>
                                        <p>We strive to recognize the outstanding achievements of women and organize
                                            receptions at major technical conferences to enhance networking and promote
                                            membership at WIE. IEEE-WIE MUJ pledges to work towards gender-diversified
                                            panels at all IEEE conferences and events.</p>
                                        <br/>
                                        <div>
                                            <ul className="flex flex-row justify-start gap-x-4 text-ieeegray text-opacity-60">
                                                <li>
                                                    <Link href="https://wie.ieeemuj.com/"
                                                          className="inline-flex"><p className="text-lg font-semibold text-ieeedarkblue">Website</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                             className="w-4 h-4">
                                                            <path fillRule="evenodd"
                                                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/company/ieeewiemuj/"
                                                          className="inline-flex"><FontAwesomeIcon icon={faLinkedinIn} size="xl" color="#0066CC"/>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                             className="w-4 h-4">
                                                            <path fillRule="evenodd"
                                                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/company/ieeewiemuj/"
                                                          className="inline-flex"><FontAwesomeIcon icon={faInstagram} size="xl" color="#CC3366"/>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                             className="w-4 h-4">
                                                            <path fillRule="evenodd"
                                                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="lg:col-start-9 lg:col-span-4 lg:pl-8 lg:my-auto mb-8 px-8 md:px-0 md:pr-96 lg:px-0">
                                    <Image src={wie_logo} alt="IEEE Computer Society"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}