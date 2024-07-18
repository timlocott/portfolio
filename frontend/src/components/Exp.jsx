function WorkExp(){
    return(
        <div className="flex flex-col items-center justify-center h-screen m-4">
            {/* <div className="rounded-xl border border-ebony hover:cursor-pointer text-ebony flex flex-col">
                <div className="text-lg font-bold">
                    Sponsored Capstone Student
                </div>
                <div className="text-sm font-extralight text-pretty">
                    Aug 2023 - May 2024
                </div>
            </div> */}
            <div className="flex flex-row justify-between w-full">
                <div className="flip-card">
                    <div className="flip-card-inner rounded-xl hover:cursor-pointer text-ebony flex flex-col">
                        <div className="flip-card-front rounded-xl flex flex-col justify-start">
                            <div className="mt-2">
                                University of Utah NAL Lab
                            </div>
                            <div className="text-sm font-extralight text-pretty">
                                Aug 2023 - May 2024
                            </div>
                            <div className="text-xl font-bold mt-6">
                                Sponsored Capstone Student
                            </div>
                        </div>
                        <div className="flip-card-back rounded-xl">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner rounded-xl hover:cursor-pointer text-ebony flex flex-col">
                        <div className="flip-card-front rounded-xl p-2">
                            <div className="text-lg font-bold">
                                Analyst
                            </div>
                            <div className="text-sm font-extralight text-pretty">
                                Aug 2023 - Dec 2023
                            </div>
                        </div>
                        <div className="flip-card-back rounded-xl p-2">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExp;