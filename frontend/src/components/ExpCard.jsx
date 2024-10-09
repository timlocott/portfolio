/* eslint-disable react/prop-types */
function ExpCard({company, dateRange, title}){
    return (
        <div className="flip-card m-4">
            <div className="flip-card-inner rounded-xl hover:cursor-pointer text-ebony flex flex-col">
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
                <div className="flip-card-back rounded-xl p-2">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    );
}

export default ExpCard