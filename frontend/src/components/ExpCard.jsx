/* eslint-disable react/prop-types */
function ExpCard({company, dateRange, title, skills = [], description}){
    return (
        <div className="flip-card m-4">
            <div className="flip-card-inner rounded-xl hover:cursor-pointe flex flex-col">
                <div className="flip-card-front rounded-xl p-2">
                    <div className="mt-2">
                        { company }
                    </div>
                    <div className="text-sm font-extralight text-pretty">
                        { dateRange }
                    </div>
                    <div className="text-lg font-bold mt-6">
                        { title }
                    </div>
                </div>
                <div className="flip-card-back rounded-xl p-4">
                    <div className="flex flex-row flex-wrap">
                        {skills.map((item, index) => (
                            <div className="bg-white rounded-xl text-ebony w-fit px-2 mr-2 mb-2" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-left font-light">{ description }</p>
                </div>
            </div>
        </div>
    );
}

export default ExpCard