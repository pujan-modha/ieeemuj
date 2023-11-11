"use client"

import useLenis from "~/app/hooks/useLenis";
import React from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Page() {
    useLenis();
    return(
        <>
            <ProgressBar
                height="4px"
                color="#66ccff"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <div>
                <div id="grids" className="w-full py-12 bg-fixed">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <p className="text-4xl text-center font-bold text-white">BLOGS</p>
                    </div>
                </div>
            </div>
        </>
    )
}