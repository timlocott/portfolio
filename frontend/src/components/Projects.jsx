/* eslint-disable no-unused-vars */

import React from 'react';
import { useState } from 'react';
import Modal from "react-modal";

import uReact from '../assets/UReactFull.png'
import LMSWebsite from '../assets/LMSWebsite.jpg'
import databaseImg from '../assets/databaseImg.jpg'
import lifestyleApp from '../assets/lifestyleapp.jpg'
import custContactSearch from '../assets/custContactSearch.jpg'
import fieldHistoryTracking from '../assets/fieldHistoryTracking.jpg'
import chatClient from '../assets/chatClient.jpg'
import photoGallery from '../assets/photoGallery.jpg'
import portLogo from '../assets/portLogo.png'
import ProjectCard from './ProjectCard';

function Projects(){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    function handleClick(){
        openModal();
    }

    return(
        <div className="px-6 flex flex-col h-screen text-black overflow-visib;e">
            <div className="flex flex-row w-full justify-center text-white my-6 bg-transparent sticky">
                <button className="w-48 mr-10 bg-ebony rounded-full">Web Development</button>
                <button className="w-48 mr-10 bg-persianRed rounded-full">Mobile Development</button>
                <button className="w-48 bg-bleuDeFrance rounded-full">Salesforce</button>
            </div>
            <div className="flex flex-col mx-10">
                <div className="flex flex-row flex-wrap justify-center h-full" role="list">
                    <ProjectCard imgSrc={portLogo} textColor="text-white" projTitle="Personal Website" onClick={() => console.log("Personal Website clicked")} />
                    <ProjectCard imgSrc={photoGallery} textColor="text-white" projTitle="Photo Gallery" onClick={() => console.log("Photo Gallery clicked")} />
                    <ProjectCard imgSrc={uReact} textColor="text-white" projTitle="UReact" onClick={() => console.log("UReact clicked")} />
                    <ProjectCard imgSrc={chatClient} textColor="text-white" projTitle="Chat Client" onClick={() => console.log("Chat Client clicked")} />
                    <ProjectCard imgSrc={LMSWebsite} textColor="text-white" projTitle="LMS Website" onClick={() => console.log("LMS Website clicked")} />
                    <ProjectCard imgSrc={databaseImg} textColor="text-white" projTitle="LMS Database" onClick={() => console.log("LMS Database clicked")} />
                    <ProjectCard imgSrc={lifestyleApp} textColor="text-white" projTitle="LifeStyle App" onClick={() => console.log("LifeStyle App clicked")} />
                    <ProjectCard imgSrc={custContactSearch} textColor="text-white" projTitle="LWC Search" onClick={() => console.log("LWC Search clicked")} />
                    <ProjectCard imgSrc={fieldHistoryTracking} textColor="text-white" projTitle="Field History" onClick={() => console.log("Field History clicked")} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
