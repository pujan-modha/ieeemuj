"use client"

import useLenis from "~/app/hooks/useLenis";
import React from "react";

export default function Page() {
    useLenis();
    return(
        <>
            <div>
                <div id="parallax" className="w-full py-12 bg-fixed">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <p className="text-4xl text-center font-bold text-white">CONTACT US</p>
                    </div>
                </div>
            </div>
        </>
    )
}