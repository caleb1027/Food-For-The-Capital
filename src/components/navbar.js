import React from 'react';
import logo from './styles/FFC_Logo_Full/1.svg'

const NavBar = props => {
    return(
        <div className=" z-40 fixed top-0 py-2 bg-white overflow-hidden flex flex-row justify-between w-screen" id="navbar">
            <div className='flex flex-row items-center'>
            <a class="text-amber-700  font-bold ml-8 text-lg" href="#home">
                <img src={logo} className=' scale-150 w-16 h-16 hover:translate-y-1 duration-100'>
                </img>
            </a>
            <a class="text-amber-600 hover:text-amber-800 font-bold ml-8 text-lg duration-100" href="#about">{props.isEnglish ? "About" : "French"}</a>
            <a class="text-amber-600 hover:text-amber-800 font-bold ml-8 text-lg duration-100" href="#getInvolved">{props.isEnglish ? "Get Involved" : "French"}</a>
            <a class="text-amber-600 hover:text-amber-800 font-bold ml-8 text-lg duration-100" href="#getInvolved">{props.isEnglish ? "Donate" : "French"}</a>
            <a class="text-amber-600 hover:text-amber-800 font-bold ml-8 text-lg duration-100" href="#contact">{props.isEnglish ? "Contact" : "French"}</a>
            </div>
            <div className='flex flex-row items-center mx-10'>
                <button onClick={props.changeLang} className='float-right text-amber-700 hover:text-amber-800 font-bold text-lg'>
                    {props.isEnglish ? "FR" : "EN"}</button>
            </div>
        </div>
    )
}

export default NavBar;