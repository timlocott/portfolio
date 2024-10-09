import ExpCard from "./ExpCard";

function WorkExp(){
    return(
        <div className="flex flex-col items-center justify-center h-screen m-4">
            <div className="flex flex-row justify-around w-full flex-wrap">
                <ExpCard company="University of Utah NAL Lab" dateRange="Aug 2023 - May 2024" title="Mobile Application Developer" skills={["Flutter","Python","AWS"]}/>
                <ExpCard company="Tempus Ex Machina" dateRange="Aug 2023 - Dec 2023" title="Analyst"/>
                <ExpCard company="L3 Harris Technologies" dateRange="Jun 2022 - Dec 2022" title="Software Engineering Intern"/>
                <ExpCard company="University of Utah" dateRange="Feb 2021 - Jun 2022" title="Salesforce Intern"/>
                <ExpCard company="A-1 Pioneer Moving & Storage" dateRange="May 2020 - Feb 2021" title="Mover"/>
                <ExpCard company="Rice-Eccles Stadium" dateRange="Aug 2019 - Feb 2021" title="IT Assistant"/>
            </div>
        </div>
    );
}

export default WorkExp;