import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact(){
    return(
        <div className="text-white px-6 flex flex-col h-screen justify-center items-center">
            <div className="w-screen p-20 bg-lighterSlateGrey">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col text-start mb-4">
                        <div>
                            Interested in my past work?
                        </div>
                        <div>
                            Want to reach out to me about exciting opportunities?
                        </div>
                    </div>
                    <div className="flex flex-row ml-80 justify-end">
                        <a className="bg-persianRed text-white hover:bg-jasper p-2 rounded-2xl mr-4" href="mailto:tsam.cottrell@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Email Me
                        </a>
                        <a className="bg-bleuDeFrance text-white hover:bg-blue-600 p-2 rounded-2xl mr-4" href="https://www.linkedin.com/in/tim-cottrell/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                            LinkedIn
                        </a>
                        <a className="bg-ebony text-white hover:bg-gray-700 p-2 rounded-2xl" href="https://github.com/timlocott" target="_blank" rel="noopener noreferrer">
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
