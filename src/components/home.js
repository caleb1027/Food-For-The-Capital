import React from 'react';
import './styles/logo.css'

const Home = props => {
    return (
        <div id='home' className='grid grid-cols-2 h-screen bg-gray-100 w-screen overflow-x-hidden'>
            <div id='aniDiv' className='h-fill w-fill'>
                
            </div>
            <div id="homeRight"className='flex flex-col align-middle justify-center'>

            </div>
        </div>
    )
}

export default Home;