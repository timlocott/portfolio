/* eslint-disable no-unused-vars */

import React from 'react';
import uReact from '../assets/UReactFull.png'
import LMSWebsite from '../assets/LMSWebsite.jpg'
import databaseImg from '../assets/databaseImg.jpg'
import lifestyleApp from '../assets/lifestyleapp.jpg'

function Projects(){
    return(
        <div className="px-6 flex flex-col h-screen text-black">
            <div className="flex flex-row w-full justify-center text-white my-6">
                <button className="w-48 mr-10 bg-ebony rounded-full">Web Development</button>
                <button className="w-48 mr-10 bg-persianRed rounded-full">Mobile Development</button>
                <button className="w-48 bg-bleuDeFrance rounded-full">Salesforce</button>
            </div>
            <div className="flex flex-col mx-10">
                <div className="flex flex-row flex-wrap justify-center" role="list">
                    <div className="relative inline-block text-center m-4" role="listitem">
                        <img className="block w-full h-72 rounded-xl border border-ebony hover:cursor-pointer min-w-12" src={uReact}/>
                        <div className="absolute transform right-6 top-60 text-black text-right text-shadow">
                            UReact
                        </div>
                    </div>
                    <div className="relative inline-block text-center m-4" role="listitem">
                        <img className="block w-full h-80 rounded-xl border border-ebony hover:cursor-pointer" src={LMSWebsite}/>
                        <div className="absolute transform top-64 right-6 text-white text-right text-shadow">
                                LMS Website
                        </div>
                    </div>
                    <div className="relative inline-block text-center m-4" role="listitem">
                        <img className="block w-full h-64 rounded-xl border border-ebony hover:cursor-pointer" src={databaseImg}/>
                        <div className="absolute transform top-52 right-6 text-white text-right text-shadow">
                                LMS Database
                        </div>
                    </div>
                    <div className="relative inline-block text-center m-4" role="listitem">
                        <img className="block w-full h-80 rounded-xl border border-ebony hover:cursor-pointer" src={lifestyleApp}/>
                        <div className="absolute transform top-64 right-6 text-white text-right text-shadow">
                                LifeStyle App
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;