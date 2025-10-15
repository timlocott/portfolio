import ExpCard from "./ExpCard";
import React from "react";
import Modal from "react-modal";

import webLink from "../assets/webLink.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { experienceItems } from "../constants";

// Modal.setAppElement('#exp');

 interface Experience {
  id: number;
  title: string;
  company: string;
  dateRange: string;
  skills: readonly string[];
  description: string;
  websiteLink?: string;
}

const experienceItem = (experience: Experience, handleClick: (experience: Experience) => void) => {
  return (
    <div 
      className="flex flex-col sm:h-fit justify-center"
      title={`experience ${experience.title}`}
      onClick={() => handleClick(experience)}
    >
      <ExpCard
        company={experience.company}
        dateRange={experience.dateRange}
        title={experience.title}
        skills={experience.skills}
        description={experience.description}
        websiteLink={experience.websiteLink}
      />
    </div>
  );
}

const WorkExp: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // const [description, setDescription] = React.useState("");
  // const [title, setTitle] = React.useState("");
  // const [company, setCompany] = React.useState("");
  // const [dateRange, setDateRange] = React.useState("");
  // const [skills, setSkills] = React.useState([]);
  // const [hasWebsiteLink, setHasWebsiteLink] = React.useState(false);
  // const [websiteLink, setWebsiteLink] = React.useState("");

  const [selectedExperience, setSelectedExperience] = React.useState<Experience | null>(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick(experience: Experience) {
    openModal();
    setSelectedExperience(experience);
  }

  return (
    <div
      id="exp"
      data-testid="modal-overlay"
      className="flex items-center justify-center m-4 sm:h-screen"
    >
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:w-full sm:flex-wrap h-full max-h-[calc(100vh-120px)] overflow-y-auto">
          {experienceItems.map((experience) => experienceItem(experience, handleClick))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        className="modal rounded-xl text-white p-4 flex flex-col h-[80vh] w-[80vw] sm:w-[60vw] sm:h-[40vh]"
      >
        <button
          onClick={closeModal}
          className="flex flex-col justify-center self-end text-xl font-bold border-white border-solid border-2 rounded-lg p-2 mb-2"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className="text-lg font-bold">{selectedExperience?.title}</div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="font-light pb-3">{selectedExperience?.company}</div>
          <div className="font-extralight pb-3">{selectedExperience?.dateRange}</div>
        </div>
        <div className="flex flex-col justify-between h-full flex-grow">
          <p className="pb-4 text-sm">{selectedExperience?.description}</p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row flex-wrap-reverse items-center">
              {selectedExperience?.skills.map((item, index) => (
                <div
                  className="bg-white rounded-xl text-ebony w-fit h-fit px-2 mr-2 mb-2"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <a href={selectedExperience?.websiteLink}>
              {selectedExperience?.websiteLink && (
                <button className="w-fit border-none pr-0">
                  <img src={webLink} className="size-10" />
                </button>
              )}
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default WorkExp;
