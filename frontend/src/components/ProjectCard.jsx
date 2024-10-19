/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import OrbitProgress from 'react-loading-indicators/OrbitProgress';


function ProjectCard({imgSrc, projTitle, textColor}){
    const [imageLoaded, setImageLoaded] = useState(false);
    {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <OrbitProgress variant="disc" color="#575C55" size="medium" text="" textColor=""/>
                </div>
            )}
    return (
        <div className={`relative inline-block text-center m-4 hover:text-white max-w-48 max-h-64 h-64" role="listitem ${imageLoaded ? '' : 'invisible'}`}>
            <img className={`block h-full rounded-xl border border-ebony hover:cursor-pointer shadow hover:shadow-2xl hover:brightness-50`} src={imgSrc} onLoad={() => setImageLoaded(true)}/>
            <div className={`absolute transform right-6 top-56 ${textColor} text-right text-shadow hover:cursor-pointer w-36 inline-block align-top`}>
                {projTitle}
            </div>
        </div>
    );
}

export default ProjectCard