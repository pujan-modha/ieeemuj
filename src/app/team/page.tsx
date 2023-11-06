import ECTeamCard from "~/app/_components/team_card";

export default function Page() {
    return(
        <>
            <div>
                <div id="footer" className="w-full py-12 bg-fixed">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-white">TEAM</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 my-16">
                    <div>
                        <p className="text-3xl text-center font-semibold my-16 text-ieeeblue">Executive Committee</p>
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
                </div>
            </div>
        </>
    )
}