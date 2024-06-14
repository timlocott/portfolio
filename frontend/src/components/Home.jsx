/* eslint-disable no-unused-vars */

import React from 'react';
import profilePic from '../assets/profilePic.jpg'


function Home(){
    return(
        <div className="px-6 flex flex-col justify-center h-screen text-black items-center">
            <div className="flex flex-row ">
                <img src={profilePic} className='w-64 rounded-full'/>
                <div className='flex flex-col justify-center items-center ml-6'>
                    <div className="font-extrabold text-5xl mb-2">
                        TIM COTTRELL
                    </div>
                    <div className='source-code-pro-code_font'>
                        FULL-STACK DEVELOPER
                    </div>
                    <div className='quicksand-father'>
                        father
                    </div>
                    <div className='bebas-neue-regular'>
                        aspiring wood-worker
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home