/* eslint-disable no-unused-vars */

import React, { Suspense, lazy } from 'react';
import { useState } from 'react';
import OrbitProgress from 'react-loading-indicators/OrbitProgress';

import uReact from '../assets/UReactFull.png'
import LMSWebsite from '../assets/LMSWebsite.jpg'
import databaseImg from '../assets/databaseImg.jpg'
import lifestyleApp from '../assets/lifestyleapp.jpg'
import custContactSearch from '../assets/custContactSearch.jpg'
import fieldHistoryTracking from '../assets/fieldHistoryTracking.jpg'
import chatClient from '../assets/chatClient.jpg'
import photoGallery from '../assets/photoGallery.jpg'
import portLogo from '../assets/portLogo.png'

const ProjectCard = lazy(() => import('./ProjectCard'));
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
                    <Suspense fallback={<OrbitProgress variant="disc" color="#575C55" size="medium" text="" textColor=""/>}>
                        <ProjectCard imgSrc={portLogo} textColor="text-white" projTitle="Personal Website"/>
                        <ProjectCard imgSrc={photoGallery} textColor="text-white" projTitle="Photo Gallery"/>
                        <ProjectCard imgSrc={uReact} textColor="text-white" projTitle="UReact"/>
                        <ProjectCard imgSrc={chatClient} textColor="text-white" projTitle="Chat Client"/>
                        <ProjectCard imgSrc={LMSWebsite} textColor="text-white" projTitle="LMS Website"/>
                        <ProjectCard imgSrc={databaseImg} textColor="text-white" projTitle="LMS Database"/>
                        <ProjectCard imgSrc={lifestyleApp} textColor="text-white" projTitle="LifeStyle App"/>
                        <ProjectCard imgSrc={custContactSearch} textColor="text-white" projTitle="LWC Search"/>
                        <ProjectCard imgSrc={fieldHistoryTracking} textColor="text-white" projTitle="Field History"/>
                    </Suspense>
                </div>
            </div>
            {project != "" &&
                <ProjectInfo project={project}/>
            }
        </div>
    );
}

export default Projects;