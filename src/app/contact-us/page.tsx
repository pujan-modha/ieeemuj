"use client"

import useLenis from "~/app/hooks/useLenis";
import React from "react";

export default function Page() {
    useLenis();
    return(
        <>
            <div>
                <div id="grids" className="w-full py-12 bg-fixed">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <p className="text-4xl text-center font-bold text-white">CONTACT US</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    <div className="flex flex-col my-16 gap-16">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                            <div>
                                <p className="text-3xl font-bold text-ieeedarkblue">Contacts</p>
                                <hr className="mt-1 mb-6 border-ieeegray opacity-20"/>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-2xl font-bold text-ieeeblue">Sriansh Raj</p>
                                        <p className="font-medium text-ieeegray">Chairperson</p>
                                        <p className="text-sm font-medium text-ieeegray">+91 97214 90618</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-2xl font-bold text-ieeeblue">Atul Raj Sharma</p>
                                        <p className="font-medium text-ieeegray">Vice Chairperson</p>
                                        <p className="text-sm font-medium text-ieeegray">+91 95695 16125</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-2xl font-bold text-ieeeblue">Sriansh Raj</p>
                                        <p className="font-medium text-ieeegray">Chairperson</p>
                                        <p className="text-sm font-medium text-ieeegray">+91 97214 90618</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-2xl font-bold text-ieeeblue">Atul Raj Sharma</p>
                                        <p className="font-medium text-ieeegray">Vice Chairperson</p>
                                        <p className="text-sm font-medium text-ieeegray">+91 95695 16125</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-2xl font-bold text-ieeeblue">Sriansh Raj</p>
                                        <p className="font-medium text-ieeegray">Chairperson</p>
                                        <p className="text-sm font-medium text-ieeegray">+91 97214 90618</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-2xl font-bold text-ieeeblue">Atul Raj Sharma</p>
                                        <p className="font-medium text-ieeegray">Vice Chairperson</p>
                                        <p className="text-sm font-medium text-ieeegray">+91 95695 16125</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-ieeedarkblue">Write to us!</p>
                                <hr className="mt-1 mb-6 border-ieeegray opacity-20"/>
                                <div className="w-full md:w-[42rem] lg:w-full text-black">
                                    <form action="https://formspree.io/f/pujanmodha" className="space-y-4" method="POST">
                                        <div>
                                            <label htmlFor="name" className="mb-2 text-sm font-medium">Name</label>
                                            <input name="Name" type="text" id="name" className="shadow-sm border border-ieeegray border-opacity-40 text-ieeegray text-sm rounded-lg focus:ring-ieeeblue focus:border-ieeeblue block w-full p-2.5" placeholder="Your Name" required/>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mb-2 text-sm font-medium">Your email</label>
                                            <input name="Email" type="email" id="email" className="shadow-sm border border-ieeegray border-opacity-40 text-ieeegray text-sm rounded-lg focus:ring-ieeeblue focus:border-ieeeblue block w-full p-2.5" placeholder="name@example.com" required/>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="message" className="mb-2 text-sm font-medium">Your message</label>
                                            <textarea name="Message" rows={10} id="message" className="block w-full p-2.5 text-sm text-ieeegray rounded-lg shadow-sm border border-ieeegray border-opacity-40 focus:ring-ieeeblue focus:border-ieeeblue" placeholder="Write your messege..." required></textarea>
                                        </div>
                                        <button type="submit" className="w-full text-center py-2 text-sm font-medium text-white rounded-lg hover:bg-white hover:border-2 hover:text-ieeedarkblue border-ieeeblue bg-ieeeblue border-2 hover:border-ieeedarkblue">SUBMIT</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                            <div>
                                <p className="text-3xl font-bold text-ieeedarkblue">Address</p>
                                <hr className="mt-1 mb-4 border-ieeegray opacity-20"/>
                                <p className="text-ieeegray font-medium flex flex-col">
                                    <span>Manipal University Jaipur,</span>
                                    <span>Dehmi Kalan, Near GVK Toll Plaza,</span>
                                    <span>Jaipur-Ajmer Expressway,</span>
                                    <span>Jaipur, Rajasthan 303007</span>
                                </p>
                            </div>
                            <div className='relative bg-ieeeblue bg-opacity-10 border border-ieeeblue rounded-lg h-auto w-full md:h-96 md:w-auto aspect-square md:aspect-video lg:aspect-auto'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9088893627104!2d75.56315290391319!3d26.84285004503928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1627036239444!5m2!1sen!2sin"
                                    className="absolute p-2 h-full w-full rounded-xl"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}