/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function ProjectCard({imgHeight, imgSrc, textPos, projTitle, textColor}){
    return (
        <div className="relative inline-block text-center m-4 hover:text-white max-w-48" role="listitem">
            <img className={`block h-full rounded-xl border border-ebony hover:cursor-pointer shadow hover:shadow-2xl hover:brightness-50`} src={imgSrc}/>
            <div className={`absolute transform right-6 ${textPos} ${textColor} text-right text-shadow hover:cursor-pointer`}>
                {projTitle}
            </div>
        </div>
    );
}

export default ProjectCard