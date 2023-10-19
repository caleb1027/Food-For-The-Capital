import React from 'react';
import airplane from './styles/plane.png'


const Contact = props => {
    return (
        <div id='contact' className='flex-col flex items-center pt-4'>
            <h1 className='text-6xl font-bold m-8'>Contact Us</h1>
            <div className='flex-row flex items-center py-8'>
                <div className='flex-col flex items-center border-gray-200 border w-72 shadow-lg rounded-md p-4 pb-8'>
                    <img src={airplane} className='w-28'></img>
                    <button className='bg-gray-700 w-60 my-8 text-white text-3xl p-1 font-bold rounded-md hover:bg-gray-800 duration-100'>Email Us</button>
                    <h1 className='text-md text-center font-semibold'>Our team will get back to you soon!</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact;