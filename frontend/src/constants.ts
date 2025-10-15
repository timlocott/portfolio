import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import resumeFile from "./assets/TCResume.pdf";

export const contactMethods = [
  {
    link: "mailto:tsam.cottrell@gmail.com",
    icon: faEnvelope,
    text: "Email Me",
    color: "bg-persianRed !text-white",
    hoverColor: "hover:bg-jasper",
  },
  {
    link: "https://www.linkedin.com/in/tim-cottrell/",
    icon: faLinkedin,
    text: "LinkedIn",
    color: "bg-bleuDeFrance !text-white",
    hoverColor: "hover:bg-blue-600",
  },
  {
    link: "https://github.com/timlocott",
    icon: faGithub,
    text: "GitHub",
    color: "bg-ebony !text-white",
    hoverColor: "hover:bg-gray-700",
  },
  {
    link: resumeFile,
    icon: faFile,
    text: "Resume",
    color: "bg-britishRacingGreen !text-white",
    hoverColor: "hover:bg-gray-700",
  },
] as const;

export const experienceItems = [
  {
    id: 1,
    title: "Associate Software Engineer",
    company: "Orem City",
    dateRange: "June 2025 - Present",
    skills: ["TypeScript", "React", "C#", "SQL"],
    description: "Creating a city-wide platform where citizens can interact with the many facets of Orem, facilitating a seamless and responsive experience for thousands of citizens. Working closely with stakeholders and users to develop and maintain a full suite of internal applications and tools to help make operations more efficient and intuitive. Collaborating daily with an energetic, fast-paced team that strives for high code quality, best practices, and reusability using React, TypeScript, and C#.",
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "CareCrew",
    dateRange: "Nov 2024 - May 2025",
    skills: ["HotWire Native", "Swift", "Kotlin"],
    description: "Developing a mobile application, using HotWire, to simplify and coordinate care for elderly loved ones. Regularly researching latest trends and technologies to create an innovative app and experience.",
  },
  {
    id: 3,
    title: "Mobile Application Developer",
    company: "University of Utah NAL Lab",
    dateRange: "Aug 2023 - May 2024",
    skills: ["Flutter", "Python", "AWS"],
    description: "Built a cross-platform HIPAA-compliant mobile application from a raw prototype built on Matlab scripts, expensive sensors, and manual processes. This app enables easy concussion testing, managing patient test history, and empowering clinicians to make informed treatment plans and diagnoses while also saving time and money.",
  },
  {
    id: 4,
    title: "Analyst",
    company: "Tempus Ex Machina",
    dateRange: "Aug 2023 - Dec 2023",
    skills: [],
    description: "Collect statistics from live PAC-12 football games, requiring attention to detail, accuracy, and efficiency. Aggregate game statistics with game footage, enabling coaching staff to accurately leverage game film.",
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    company: "L3 Harris Technologies",
    dateRange: "Jun 2022 - Dec 2022",
    skills: ["Angular", "TypeScript", "HTML", "CSS"],
    description: "Developed the front end of an interactive web app used to monitor modem status and live data flow delivering instantaneous updates to users. Participated in every stage of the software development life cycle bringing features into production regularly. Regularly coordinated with teammates to plan, ensuring on-time quality project completion. Managed, recorded, and reviewed development progress on Jira daily keeping projects and tasks organized.",
  },
  {
    id: 6,
    title: "Salesforce Intern",
    company: "University of Utah",
    dateRange: "Feb 2021 - Jun 2022",
    skills: ["SQL", "Apex", "JavaScript", "LWC"],
    description: "Documented system configuration and usage, and trained users in a fast-paced environment while wearing multiple hats. Personally led the project to on-board an important client, discover their needs, design cutting edge solutions, and implement and iterate on these solutions on our Salesforce platform which automated many processes, ensured data integrity, and eliminated redundant efforts. Created and deployed to production a configurable search component, enabling users to find contacts by any field more efficiently. Developed and deployed to production a flexible automatic field history tracking feature, allowing users to audit record history for any record type.",
  },
  {
    id: 7,
    title: "Mover",
    company: "A-1 Pioneer Moving & Storage",
    dateRange: "May 2020 - Feb 2021",
    skills: [],
    description: "Neatly packed clients’ belongings into boxes, protected furniture, and loaded trucks which helped clients feel that their possessions were safe. Completed moves on Hill Air Force Base, and met all military-specific requirements that required attention to detail.",
  },
  {
    id: 8,
    title: "IT Assistant",
    company: "Rice-Eccles Stadium",
    dateRange: "Aug 2019 - Feb 2021",
    skills: [],
    description: "Provided technical support and training to all employees, to ensure a positive user experience. Coordinated as a member of the Technical Services team to maintain all office and stadium devices and computers using a diverse knowledge of technology. Developed an inventory database from the ground up through Microsoft Access, that made inventory and rental tracking more efficient. Directed guests, answered phone calls, and managed card and door access at the reception desk to help guests feel welcome and informed.",
  },
] as const;