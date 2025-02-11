/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
function ExpCard({ company, dateRange, title, skills = [] }) {
  return (
    <div className="flip-card m-4">
      <div className="flip-card-inner rounded-xl flex flex-col">
        <div className="flip-card-front rounded-xl p-2">
          <div className="mt-2">{company}</div>
          <div className="text-sm font-extralight text-pretty">{dateRange}</div>
          <div className="text-lg font-bold mt-6">{title}</div>
        </div>
        <div className="flip-card-back rounded-xl p-4 flex flex-col justify-end h-full">
          <div className="flex flex-col items-center justify-center hover:cursor-pointer hover:underline flex-grow">
            MORE
          </div>
          <div className="flex flex-row flex-wrap-reverse items-center">
            {skills.map((item, index) => (
              <div
                className="bg-white rounded-xl text-ebony w-fit px-2 mr-2 mb-2"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
