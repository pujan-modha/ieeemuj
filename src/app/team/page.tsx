"use client"

import {ECTeamCard} from "~/app/components/team_card";
import {CCTeamCard} from "~/app/components/team_card";
import useLenis from "~/app/hooks/useLenis";

export default function Page() {
    useLenis();
    return(
        <>
            <div>
                <div id="parallax" className="w-full py-12 bg-fixed">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <p className="text-4xl text-center font-bold text-white">TEAM</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    <div className="my-16 space-y-16">
                        <div>
                            <div className="mb-12">
                                <p className="text-3xl text-center font-semibold text-ieeedarkblue">Executive Committee</p>
                                <hr className="mt-1 border-ieeegray opacity-20"/>
                            </div>
                            <div className="flex flex-wrap gap-x-24 gap-y-12 mx-auto justify-center">
                                <ECTeamCard/>
                                <ECTeamCard/>
                                <ECTeamCard/>
                                <ECTeamCard/>
                                <ECTeamCard/>
                                <ECTeamCard/>
                                <ECTeamCard/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-12">
                                <p className="text-3xl text-center font-semibold text-ieeedarkblue">Core Committee</p>
                                <hr className="mt-1 border-ieeegray opacity-20"/>
                            </div>
                            <div className="flex flex-wrap gap-16 mx-auto justify-center">
                                <CCTeamCard/>
                                <CCTeamCard/>
                                <CCTeamCard/>
                                <CCTeamCard/>
                                <CCTeamCard/>
                                <CCTeamCard/>
                                <CCTeamCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}