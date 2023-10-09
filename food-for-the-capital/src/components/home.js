import React from 'react';

const Home = props => {
    return (
        <div id='home' className='grid grid-cols-2 h-screen bg-slate-100 w-screen overflow-x-hidden'>
            <div className='flex flex-col align-middle justify-center'>
                <h1 className='text-8xl text-center w-2/3 m-auto'>
                    {props.isEnglish ? "Food for the Capital" : "French"}
                </h1>
            </div>
            <div className='bg-slate-400 flex flex-col align-middle justify-center'>
                LOGO HERE
            </div>
        </div>
    )
}

export default Home;