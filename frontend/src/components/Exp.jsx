import ExpCard from "./ExpCard";

function WorkExp(){
    return(
        <div className="flex flex-col items-center justify-center h-screen m-4">
            <div className="flex flex-row justify-around w-full flex-wrap">
                <ExpCard company="University of Utah NAL Lab" 
                    dateRange="Aug 2023 - May 2024" 
                    title="Mobile Application Developer" 
                    skills={["Flutter","Python","AWS"]} 
                    description="Built a cross-platform HIPAA-compliant mobile application from a raw prototype built on Matlab scripts, expensive sensors, and manual processes. 
                        This app enables easy concussion testing, managing patient test history, and empowering clinicians to make informed treatment plans and diagnoses while also saving time and money."/>
                <ExpCard company="Tempus Ex Machina"
                    dateRange="Aug 2023 - Dec 2023" 
                    title="Analyst" 
                    description="Collect statistics from live PAC-12 football games, requiring attention to detail, accuracy, and efficiency. 
                        Aggregate game statistics with game footage, enabling coaching staff to accurately leverage game film."/>
                <ExpCard company="L3 Harris Technologies" 
                    dateRange="Jun 2022 - Dec 2022" title="Software Engineering Intern" 
                    skills={["Angular", "TypeScript", "HTML", "CSS"]} 
                    description="Developed the front end of an interactive web app used to monitor modem status and live data flow delivering instantaneous updates to users. 
                        Participated in every stage of the software development life cycle bringing features into production regularly.
                        Regularly coordinated with teammates to plan, ensuring on-time quality project completion.
                        Managed, recorded, and reviewed development progress on Jira daily keeping projects and tasks organized."/>
                <ExpCard company="University of Utah" 
                    dateRange="Feb 2021 - Jun 2022" 
                    title="Salesforce Intern" 
                    skills={["SQL", "Apex", "JavaScript","LWC"]}
                    description="Documented system configuration and usage, and trained users in a fast-paced environment while wearing multiple hats.
                        Personally led the project to on-board an important client, discover their needs, design cutting edge solutions, and implement and iterate on these solutions on our Salesforce platform which automated many processes, ensured data integrity, and eliminated redundant efforts.
                        Created and deployed to production a configurable search component, enabling users to find contacts by any field more efficiently.
                        Developed and deployed to production a flexible automatic field history tracking feature, allowing users to audit record history for any record type."/>
                <ExpCard company="A-1 Pioneer Moving & Storage" 
                    dateRange="May 2020 - Feb 2021" 
                    title="Mover"
                    description="Neatly packed clients’ belongings into boxes, protected furniture, and loaded trucks which helped clients feel that their possessions were safe.
                        Completed moves on Hill Air Force Base, and met all military-specific requirements that required attention to detail."/>
                <ExpCard company="Rice-Eccles Stadium" 
                    dateRange="Aug 2019 - Feb 2021" 
                    title="IT Assistant"
                    description="Provided technical support and training to all employees, to ensure a positive user experience.
                        Coordinated as a member of the Technical Services team to maintain all office and stadium devices and computers using a diverse knowledge of technology.
                        Developed an inventory database from the ground up through Microsoft Access, that made inventory and rental tracking more efficient.
                        Directed guests, answered phone calls, and managed card and door access at the reception desk to help guests feel welcome and informed."/>
            </div>
        </div>
    );
}

export default WorkExp;