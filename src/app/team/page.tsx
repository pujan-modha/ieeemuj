import {ECTeamCard} from "~/app/_components/team_card";
import {CCTeamCard} from "~/app/_components/team_card";

export default function Page() {
    return(
        <>
            <div>
                <div id="parallax" className="w-full py-12 bg-fixed">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-white">TEAM</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 my-16">
                    <div>
                        <div className="my-16">
                            <p className="text-3xl text-center font-semibold text-ieeedarkblue">Executive Committee</p>
                            <hr className="mt-1 border-ieeegray opacity-20"/>
                        </div>
                        <div className="flex flex-wrap gap-16 mx-auto justify-center">
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
                        <p className="text-3xl text-center font-semibold mt-16 text-ieeedarkblue">Core Committee</p>
                        <hr className="mt-2 mb-16 border-ieeegray opacity-20"/>
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
        </>
    )
}