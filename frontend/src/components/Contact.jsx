// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// eslint-disable-next-line no-unused-vars
import React from "react";

function Contact() {
  return (
    <div className="text-white px-6 flex flex-col h-screen justify-center items-center">
      <div className="rounded-xl sm:rounded-none w-[80vw] h-full max-h-[50vh] p-10 sm:w-screen sm:max-h-[30vh] sm:p-20 bg-lighterSlateGrey">
        <div className="flex flex-col items-center sm:justify-center justify-between h-full">
          <div className="flex flex-col text-start mb-4">
            <div>Interested in my past work?</div>
            <div>Want to reach out to me about exciting opportunities?</div>
          </div>
          <div className="flex flex-col sm:flex-row lg:ml-80 justify-between h-[20vh] items-center sm:justify-end">
            <a
              className="bg-persianRed !text-white hover:bg-jasper px-3 py-2 rounded-xl sm:mr-4 w-60 sm:w-32 flex justify-center items-center"
              href="mailto:tsam.cottrell@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email Me
            </a>
            <a
              className="bg-bleuDeFrance text-white hover:bg-blue-600 px-3 py-2 rounded-xl sm:mr-4 w-60 sm:w-32 flex justify-center items-center"
              href="https://www.linkedin.com/in/tim-cottrell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
            <a
              className="bg-ebony text-white hover:bg-gray-700 px-3 py-2 rounded-xl w-60 sm:w-32 flex justify-center items-center"
              href="https://github.com/timlocott"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
