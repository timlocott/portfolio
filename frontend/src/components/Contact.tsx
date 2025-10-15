// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactMethods } from "../constants";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const contactMethodButton = (link: string, icon: IconDefinition, text: string, color: string, hoverColor: string) => {
  return (
    <a
      className={`${color} hover:${hoverColor} px-3 py-2 rounded-xl sm:mr-4 w-60 sm:w-32 flex justify-center items-center`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {text}
    </a>
  );
}

function Contact() {
  return (
    <div className="text-white px-6 flex flex-col h-screen justify-center items-center">
      <div className="rounded-xl sm:rounded-none w-[80vw] h-full max-h-[50vh] p-10 sm:w-screen sm:max-h-[30vh] sm:p-20 bg-lighterSlateGrey">
        <div className="flex flex-col items-center sm:justify-center justify-between h-full">
          <div className="flex flex-col text-start mb-4">
            <div>Interested in my past work?</div>
            <div>Want to reach out to me about exciting opportunities?</div>
          </div>
          <div className="flex flex-col sm:flex-row lg:ml-80 justify-between h-[25vh] items-center sm:justify-end">
            {contactMethods.map((method) => 
              contactMethodButton(
                method.link, 
                method.icon, 
                method.text, 
                method.color, 
                method.hoverColor
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
