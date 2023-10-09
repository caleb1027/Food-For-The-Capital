import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from './styles/FFC_Logo_Full/1.svg'

const GetInvolved = props => {
    return (
        <div id='getInvolved' className='flex-col flex items-center mt-20 bg-orange-100'>
            <h1 className='text-6xl font-bold m-8'>
            Get Involved
            </h1>
            <p className=' w-2/3  text-center text-lg my-4'>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
            </p>
            <FoodBankCarousel />
            <div className='flex flex-row items-center w-fill'>
                <a href="https://www.w3schools.com"
                className='flex-col flex items-center m-6 text-3xl w-96 h-20 rounded-lg text-white text-center duration-100 hover:text-gray bg-amber-700 hover:bg-orange-900'>
                    <h1 className='m-auto text-3xl font-bold'>Volunteer</h1>
                </a>
                <a href="https://www.w3schools.com"
                className='flex-col flex items-center m-6 text-3xl w-96 h-20 rounded-lg text-white text-center duration-100  hover:text-gray bg-amber-700 hover:bg-orange-900'>
                    <h1 className='m-auto text-3xl font-bold'>Donate</h1>
                </a>
            </div>
        </div>
    )
}

function FoodBankCarousel() {
    return (
        <Carousel className='w-1/2' showThumbs={false} dynamicHeight={false}>
        <div className=''>
            <img src={logo} className='h-full w-full'/>
            <p className="legend">Partner 1</p>
        </div>
        <div>
            <img src={logo} />
            <p className="legend">Partner 2</p>
        </div>
        <div>
            <img src={logo} />
            <p className="legend">Partner 3</p>
        </div>
    </Carousel>
    );
  }

export default GetInvolved;