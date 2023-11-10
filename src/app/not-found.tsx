"use client"

import useLenis from "~/app/hooks/useLenis";
import Link from "next/link";

export default function NotFound(){
    useLenis();
    return(
        <>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 -mt-16">
                <div className="h-screen flex items-center">
                    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 md:w-full pb-8">
                        <div className="text-left">
                            <h1 className="text-4xl text-ieeeblue font-semibold">ERROR!!</h1>
                            <h1 className="text-9xl font-black text-ieeeblue">404</h1>
                            <p className="text-xl lg:text-3xl pb-8 text-ieeedarkblue font-medium">{`Looks like you have reached the Jogger's Park.`}</p>
                            <Link href="/"
                               className="px-8 py-3 text-lg font-medium border-2 border-ieeeblue hover:text-white rounded-full hover:bg-ieeeblue text-ieeeblue">GO DOME</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}