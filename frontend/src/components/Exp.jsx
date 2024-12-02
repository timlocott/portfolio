import ExpCard from "./ExpCard";
import React from "react";
import Modal from "react-modal";

import webLink from '../assets/webLink.png';

// Modal.setAppElement('#exp');

function WorkExp(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [description, setDescription] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [dateRange, setDateRange] = React.useState("");
    const [skills, setSkills] = React.useState([]);
    const [hasWebsiteLink, setHasWebsiteLink] = React.useState(false);
    const [websiteLink, setWebsiteLink] = React.useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
        setHasWebsiteLink(false);
    }

    function handleClick(_title, _company, _dateRange, _skills, _description, _hasWebsiteLink, _websiteLink = ""){
        openModal();
        setTitle(_title);
        setCompany(_company);
        setDateRange(_dateRange);
        setSkills(_skills);
        setDescription(_description);
        setHasWebsiteLink(_hasWebsiteLink);
        setWebsiteLink(_websiteLink);
    }

    return(
        <div id="exp" data-testid="modal-overlay" className="flex flex-col items-center justify-center h-screen m-4">
            <div className="flex flex-row justify-around w-full flex-wrap">
                <div title="experience" onClick={() => handleClick("Mobile Application Developer",
                    "University of Utah NAL Lab",
                    "Aug 2023 - May 2024",
                    ["Flutter","Python","AWS"],
                    "Built a cross-platform HIPAA-compliant mobile application from a raw prototype built on Matlab scripts, expensive sensors, and manual processes. This app enables easy concussion testing, managing patient test history, and empowering clinicians to make informed treatment plans and diagnoses while also saving time and money.",
                    true,
                    "https://sites.google.com/view/ureact/home"
                )}>
                    <ExpCard company="University of Utah NAL Lab" 
                        dateRange="Aug 2023 - May 2024"
                        title="Mobile Application Developer" 
                        skills={["Flutter","Python","AWS"]} />
                </div>
                <div title="experience" onClick={() => handleClick("Analyst",
                    "Tempus Ex Machina",
                    "Aug 2023 - Dec 2023",
                    [],
                    "Collect statistics from live PAC-12 football games, requiring attention to detail, accuracy, and efficiency. Aggregate game statistics with game footage, enabling coaching staff to accurately leverage game film.",
                    false,
                )}>
                    <ExpCard company="Tempus Ex Machina" 
                        dateRange="Aug 2023 - Dec 2023"
                        title="Analyst" 
                        skills={[]}/>
                </div>
                <div title="experience" onClick={() => handleClick("Software Engineering Intern",
                    "L3 Harris Technologies",
                    "Jun 2022 - Dec 2022",
                    ["Angular", "TypeScript", "HTML", "CSS"],
                    "Developed the front end of an interactive web app used to monitor modem status and live data flow delivering instantaneous updates to users. Participated in every stage of the software development life cycle bringing features into production regularly. Regularly coordinated with teammates to plan, ensuring on-time quality project completion. Managed, recorded, and reviewed development progress on Jira daily keeping projects and tasks organized.",
                    false
                )}>
                    <ExpCard company="L3 Harris Technologies" 
                        dateRange="Jun 2022 - Dec 2022"
                        title="Software Engineering Intern" 
                        skills={["Angular", "TypeScript", "HTML", "CSS"]}/>
                </div>
                <div title="experience" onClick={() => handleClick("Salesforce Intern",
                    "University of Utah",
                    "Feb 2021 - Jun 2022",
                    ["SQL", "Apex", "JavaScript","LWC"],
                    "Documented system configuration and usage, and trained users in a fast-paced environment while wearing multiple hats. Personally led the project to on-board an important client, discover their needs, design cutting edge solutions, and implement and iterate on these solutions on our Salesforce platform which automated many processes, ensured data integrity, and eliminated redundant efforts. Created and deployed to production a configurable search component, enabling users to find contacts by any field more efficiently. Developed and deployed to production a flexible automatic field history tracking feature, allowing users to audit record history for any record type.",
                    false
                )}>
                    <ExpCard company="University of Utah" 
                        dateRange="Feb 2021 - Jun 2022"
                        title="Salesforce Intern" 
                        skills={["SQL", "Apex", "JavaScript","LWC"]}/>
                </div>
                <div title="experience" onClick={() => handleClick("Mover",
                    "A-1 Pioneer Moving & Storage",
                    "May 2020 - Feb 2021",
                    [],
                    "Neatly packed clients’ belongings into boxes, protected furniture, and loaded trucks which helped clients feel that their possessions were safe. Completed moves on Hill Air Force Base, and met all military-specific requirements that required attention to detail.",
                    false
                )}>
                    <ExpCard company="A-1 Pioneer Moving & Storage" 
                        dateRange="May 2020 - Feb 2021"
                        title="Mover" 
                        skills={[]}/>
                </div>
                <div title="experience" onClick={() => handleClick("IT Assistant",
                    "Rice-Eccles Stadium",
                    "Aug 2019 - Feb 2021",
                    [],
                    "Provided technical support and training to all employees, to ensure a positive user experience. Coordinated as a member of the Technical Services team to maintain all office and stadium devices and computers using a diverse knowledge of technology. Developed an inventory database from the ground up through Microsoft Access, that made inventory and rental tracking more efficient. Directed guests, answered phone calls, and managed card and door access at the reception desk to help guests feel welcome and informed.",
                    false
                )}>
                    <ExpCard company="Rice-Eccles Stadium" 
                        dateRange="Aug 2019 - Feb 2021"
                        title="IT Assistant" 
                        skills={[]}/>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={closeModal}
                className="modal rounded-xl text-white p-4 flex flex-col">
                    <div className="text-lg font-bold">{ title }</div>
                    <div className="flex flex-row justify-between">
                        <div className="font-light pb-3">{ company }</div>
                        <div className="font-extralight pb-3">{ dateRange }</div>
                    </div>
                    <div className="flex flex-col justify-between h-full flex-grow">
                         <p className="pb-4 text-sm">{ description }</p>
                         <div className="flex flex-row justify-between">
                            <div className="flex flex-row flex-wrap-reverse items-center">
                                {skills.map((item, index) => (
                                    <div className="bg-white rounded-xl text-ebony w-fit h-fit px-2 mr-2 mb-2" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                           <a href={websiteLink}>
                                 { hasWebsiteLink && <button className="w-fit border-none pr-0">
                                    <img src={webLink} className="size-10"/>
                                </button>}
                            </a>
                         </div>
                    </div>
            </Modal>
        </div>
    );
}

export default WorkExp;