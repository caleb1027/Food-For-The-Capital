import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GetInvolved = props => {
    return (
        <div id='getInvolved' className='flex-col flex items-center mt-20 bg-orange-100'>
            <h1 className='text-6xl font-bold m-8'>
            Get Involved
            </h1>
            <p className=' text-center text-lg my-4 w-1/2'>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
            </p>
            <div className='flex flex-row items-center w-fill'>
                <a href="https://www.w3schools.com"
                className='flex-col flex items-center m-6 text-3xl w-80 h-16 rounded-lg text-white text-center duration-100 hover:text-gray bg-amber-700 hover:bg-orange-900'>
                    <h1 className='m-auto text-3xl font-bold'>Volunteer</h1>
                </a>
                <a href="https://www.w3schools.com"
                className='flex-col flex items-center m-6 text-3xl w-80 h-16 rounded-lg text-white text-center duration-100  hover:text-gray bg-amber-700 hover:bg-orange-900'>
                    <h1 className='m-auto text-3xl font-bold'>Donate</h1>
                </a>
            </div>
        </div>
    )
}

export default GetInvolved;