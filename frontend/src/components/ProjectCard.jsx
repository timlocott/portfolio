/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function ProjectCard({imgHeight, imgSrc, textPos, projTitle, textColor}){
    return (
        <div className="relative inline-block text-center m-4 hover:text-white max-w-48 max-h-64 h-64" role="listitem" onClick={() => {
                // setProject(projTitle)
                console.log("CLICKED!!!!!!!")
            }}>
            <img className={`block h-full rounded-xl border border-ebony hover:cursor-pointer shadow hover:shadow-2xl hover:brightness-50`} src={imgSrc}/>
            <div className={`absolute transform right-6 top-56 ${textColor} text-right text-shadow hover:cursor-pointer w-36 inline-block align-top`}>
                {projTitle}
            </div>
        </div>
    );
}

export default ProjectCard