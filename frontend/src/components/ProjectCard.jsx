/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function ProjectCard({imgHeight, imgSrc, textPos, projTitle, textColor}){
    return (
        <div className="relative inline-block text-center m-4" role="listitem">
            <img className={`block w-full ${imgHeight} rounded-xl border border-ebony hover:cursor-pointer`} src={imgSrc}/>
            <div className={`absolute transform right-6 ${textPos} ${textColor} text-right text-shadow`}>
                {projTitle}
            </div>
        </div>
    );
}

export default ProjectCard