/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";
import Modal from "react-modal";

import uReact from "../assets/UReactFull.png";
import LMSWebsite from "../assets/LMSWebsite.jpg";
import databaseImg from "../assets/databaseImg.jpg";
import lifestyleApp from "../assets/lifestyleapp.jpg";
import custContactSearch from "../assets/custContactSearch.jpg";
import fieldHistoryTracking from "../assets/fieldHistoryTracking.jpg";
import chatClient from "../assets/chatClient.jpg";
import photoGallery from "../assets/photoGallery.jpg";
import portLogo from "../assets/portLogo.png";
import webLink from "../assets/webLink.png";

import ProjectCard from "./ProjectCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [dateRange, setDateRange] = React.useState("");
  const [skills, setSkills] = React.useState([]);
  const [hasWebsiteLink, setHasWebsiteLink] = React.useState(false);
  const [websiteLink, setWebsiteLink] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick(
    _title,
    _dateRange,
    _skills,
    _description,
    _hasWebsiteLink,
    _websiteLink = ""
  ) {
    openModal();
    setTitle(_title);
    setDateRange(_dateRange);
    setSkills(_skills);
    setDescription(_description);
    setHasWebsiteLink(_hasWebsiteLink);
    setWebsiteLink(_websiteLink);
  }

  return (
    <div className="mx-4 flex flex-col h-screen text-black">
      {/* <div className="flex flex-row w-full justify-center text-white my-6 bg-transparent sticky">
        <button className="w-48 mr-10 bg-ebony rounded-full">
          Web Development
        </button>
        <button className="w-48 mr-10 bg-persianRed rounded-full">
          Mobile Development
        </button>
        <button className="w-48 bg-bleuDeFrance rounded-full">
          Salesforce
        </button>
      </div> */}
      <div className="flex flex-col my-4 sm:mx-10">
        <div
          className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center justify-between items-center sm:w-full h-full max-h-[calc(100vh-120px)] overflow-y-auto"
          role="list"
        >
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "Portfolio",
                "Jun 2024 - Present",
                ["React", "HTML", "Tailwind CSS", "Git", "AWS"],
                "IN PROGRESS: A simple website showcasing past projects, skills, and work experience. Users are also able to use the website to contact me via email.",
                true,
                "https://www.timcottrell.net/"
              )
            }
          >
            <ProjectCard
              imgSrc={portLogo}
              textColor="text-white"
              projTitle="Personal Website"
            />
          </div>
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "Photo Gallery",
                "Delayed",
                ["Flutter", "Git"],
                "Using Flutter, I am in the process of crafting a multi-platform application tailored to support my wife's photography business. This application serves as a dedicated platform for her to effortlessly upload photos from her various photoshoots. These photos are then securely housed within private galleries accessible only to the designated clients and individuals they authorize. Within these galleries, clients are able to view their personalized photoshoot collections. They can engage further by favoriting specific photos and seamlessly downloading them. Additionally, a communication channel is integrated, allowing clients to reach out to my wife whenever necessary. This application not only enhances the client experience but also streamlines the operational aspects of the photography business.",
                false
              )
            }
          >
            <ProjectCard
              imgSrc={photoGallery}
              textColor="text-white"
              projTitle="Photo Gallery"
            />
          </div>
          <div
            title="project"
            className="max-w-56 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "UReact",
                "Aug 2023 - May 2024",
                ["Flutter", "Python", "MySQL", "AWS", "GitLab"],
                "For my Senior Capstone project, my team and I collaborated with the Kinesiology department at the University of Utah to develop a mobile application to test for concussions. Their past testing process was lengthy, required many expensive high-grade sensors, and time-to-stability results were only available after manually running the data through a Matlab script. Our goal was to reduce the large number of separate sensors needed down to the sensors already on a single mobile device, provide access to patient data within the clinic, produce results immediately, and make the application available to a wide user base. We did this by leveraging the accelerometer, running the gathered accelerometer data through a Python script to determine the time-to-stability metric for the patient, storing patient data while complying with HIPAA standards, and developing using the Flutter framework to make a cross-platform mobile application. Our project ensures not only efficiency and accuracy in concussion testing but also a seamless and widely accessible solution for clinicians and researchers.",
                true,
                "https://sites.google.com/view/ureact/home"
              )
            }
          >
            <ProjectCard
              imgSrc={uReact}
              textColor="text-white"
              projTitle="UReact"
            />
          </div>
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "Chat Web App",
                "Jan 2023 - May 2024",
                [
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Python",
                  "FastAPI",
                  "SQLite",
                  "REST",
                ],
                "A chat application that enables users to securely message each other, and retain a history of chats. Supports authenticated users, an API to retrieve chat data, and a responsive front-end.",
                false
              )
            }
          >
            <ProjectCard
              imgSrc={chatClient}
              textColor="text-white"
              projTitle="Chat Web App"
            />
          </div>
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "LMS Website",
                "Aug 2023 - Dec 2023",
                [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Python",
                  "Django",
                  "AJAX",
                  "jQuery",
                ],
                "An LMS created using the Django framework. This web application supports user roles, database queries and updates, table sorting and filtering, file uploads and more.",
                false
              )
            }
          >
            <ProjectCard
              imgSrc={LMSWebsite}
              textColor="text-white"
              projTitle="LMS Website"
            />
          </div>
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "LMS Database",
                "Jan 2023 - May 2023",
                ["MySQL", "C#", "Visual Studio"],
                "My partner and I developed a robust database for a Learning Management System (LMS), utilizing a combination of MySQL and C#. This relational database seamlessly facilitated user access to the LMS, enabling actions tailored to their roles as students, professors, or administrators. Our database interfaced with a front-end framework created by our professor. We integrated the front-end interactions with corresponding data",
                false
              )
            }
          >
            <ProjectCard
              imgSrc={databaseImg}
              textColor="text-white"
              projTitle="LMS Database"
            />
          </div>
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "Lifestyle App",
                "Jan 2023 - Apr 2023",
                [
                  "Kotlin",
                  "Git",
                  "Android Studio",
                  "Google Material Design",
                  "Kotlin Coroutines",
                ],
                "My team developed an Android lifestyle application using Kotlin. Our application offers users a comprehensive range of features, enabling them to effortlessly generate and access their profiles. Moreover, our application calculates and displays their Basal Metabolic Rate (BMR) and daily calorie objectives. Additionally, users can conveniently explore nearby hiking options and stay informed about local weather conditions. The entire application adheres to the principles of Material Design Guidelines, ensuring a streamlined and visually appealing user experience.",
                false
              )
            }
          >
            <ProjectCard
              imgSrc={lifestyleApp}
              textColor="text-white"
              projTitle="LifeStyle App"
            />
          </div>
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "LWC Search",
                "Feb 2022 - Feb 2022",
                [
                  "LWC",
                  "CRM",
                  "Apex",
                  "CSS",
                  "HTML5",
                  "Salesforce Trailblazer Rank: Expeditioner",
                ],
                "Due to department needs, I developed a Lightning Web Component utilizing HTML, JavaScript, and Apex to empower users to search contacts by university ID (custom field) or name, enhancing efficiency and user experience beyond Salesforce's native capabilities.",
                false
              )
            }
          >
            <ProjectCard
              imgSrc={custContactSearch}
              textColor="text-white"
              projTitle="LWC Search"
            />
          </div>
          <div
            title="project"
            className="max-w-48 max-h-64 min-w-48 min-h-64 my-4 sm:m-4"
            onClick={() =>
              handleClick(
                "Field History Tracking",
                "Jul 2021 - Nov 2021",
                [
                  "CRM",
                  "Apex",
                  "Salesforce Trailblazer Rank: Expeditioner",
                  "OOP",
                ],
                "A department needed to be able to track the field history of a record for more fields than Salesforce tracks natively. Using Apex and SOQL, I wrote a trigger and several classes that are triggered to run when a user creates or updates a case (or any other object) either through the UI or through API calls. This code creates custom records that document field history information and data, which are related to the object and visible when viewing it. I also added simple error logging that captures any data entered if creation or update fails.",
                false
              )
            }
          >
            <ProjectCard
              imgSrc={fieldHistoryTracking}
              textColor="text-white"
              projTitle="Field History"
            />
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          className="modal rounded-xl text-white p-4 flex flex-col  h-[80vh] w-[80vw] sm:w-[60vw] sm:h-[40vh]"
        >
          <button
            onClick={closeModal}
            className="flex flex-col justify-center self-end text-xl font-bold border-white border-solid border-2 rounded-lg p-2 mb-2"
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <div className="text-lg font-bold">{title}</div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="font-extralight pb-3">{dateRange}</div>
          </div>
          <div className="flex flex-col justify-between h-full flex-grow">
            <p className="pb-4 text-sm h-[50vh] sm:h-[15vh] overflow-y-auto">
              {description}
            </p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row flex-wrap-reverse items-center">
                {skills.map((item, index) => (
                  <div
                    className="bg-white rounded-xl text-ebony w-fit h-fit px-2 mr-2 mb-2"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <a href={websiteLink}>
                {hasWebsiteLink && (
                  <button className="w-fit border-none pr-0">
                    <img src={webLink} className="size-10" />
                  </button>
                )}
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Projects;
