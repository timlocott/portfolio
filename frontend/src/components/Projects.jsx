/* eslint-disable no-unused-vars */

import React from 'react';
import { useState } from 'react';

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
import ProjectInfo from './ProjectInfo';

function Projects(){
    const [project, setProject] = useState("")
    return(
        <div className="px-6 flex flex-col h-screen text-black overflow-visib;e">
            <div className="flex flex-row w-full justify-center text-white my-6 bg-transparent sticky">
                <button className="w-48 mr-10 bg-ebony rounded-full">Web Development</button>
                <button className="w-48 mr-10 bg-persianRed rounded-full">Mobile Development</button>
                <button className="w-48 bg-bleuDeFrance rounded-full">Salesforce</button>
            </div>
            <div className="flex flex-col mx-10">
                <div className="flex flex-row flex-wrap justify-center h-full" role="list">
                    <ProjectCard imgHeight="h-64" imgSrc={portLogo} textPos="top-60" textColor="text-white" projTitle="Personal Website"/>
                    <ProjectCard imgHeight="h-72" imgSrc={photoGallery} textPos="top-60" textColor="text-white" projTitle="Photo Gallery"/>
                    <ProjectCard imgHeight="h-72" imgSrc={uReact} textPos="top-60" textColor="text-white" projTitle="UReact"/>
                    <ProjectCard imgHeight="h-80" imgSrc={chatClient} textPos="top-64" textColor="text-white" projTitle="Chat Client"/>
                    <ProjectCard imgHeight="h-80" imgSrc={LMSWebsite} textPos="top-64" textColor="text-white" projTitle="LMS Website"/>
                    <ProjectCard imgHeight="h-64" imgSrc={databaseImg} textPos="top-52" textColor="text-white" projTitle="LMS Database"/>
                    <ProjectCard imgHeight="h-80" imgSrc={lifestyleApp} textPos="top-64" textColor="text-white" projTitle="LifeStyle App"/>
                    <ProjectCard imgHeight="h-64" imgSrc={custContactSearch} textPos="top-48" textColor="text-white" projTitle="LWC Search"/>
                    <ProjectCard imgHeight="h-72" imgSrc={fieldHistoryTracking} textPos="top-60" textColor="text-white" projTitle="Field History"/>
                </div>
            </div>
            {project != "" &&
                <ProjectInfo project={project}/>
            }
        </div>
    );
}

export default Projects;