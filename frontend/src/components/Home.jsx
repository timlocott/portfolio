/* eslint-disable no-unused-vars */

import React from "react";
import profilePic from "../assets/profilePic.jpg";

function Home() {
  return (
    <>
      <div className="px-6 flex justify-center h-screen text-black items-center overscroll-none">
        <div className="flex sm:flex-row flex-col items-center">
          <img src={profilePic} className="w-64 rounded-full" />
          <div className="flex flex-col justify-center items-center sm:ml-6 sm:p-0 pt-6">
            <div className="font-extrabold sm:text-5xl text-4xl mb-2">
              TIM COTTRELL
            </div>
            <div className="source-code-pro-code_font">
              FULL-STACK DEVELOPER
            </div>
            <div className="quicksand-father">father</div>
            <div className="bebas-neue-regular">aspiring wood-worker</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
