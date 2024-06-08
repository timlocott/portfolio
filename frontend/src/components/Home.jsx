/* eslint-disable no-unused-vars */

import React from 'react';
import profilePic from '../assets/profilePic.jpg'


function Home(){
    console.log(profilePic);
    return(
        <div className="px-6 flex flex-col justify-center h-screen text-black items-center">
            <div className="flex flex-row">
                <img src={profilePic} className='w-64 rounded-full'/>
                <div className='flex flex-col justify-center items-center ml-6'>
                    <div>
                        Hey! I&apos;m
                    </div>
                    <div className="font-extrabold">
                        TIM COTTRELL
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home