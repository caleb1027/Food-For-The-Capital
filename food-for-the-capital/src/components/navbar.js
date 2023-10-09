import React from 'react';

const NavBar = props => {
    return(
        <div className="sticky top-0 py-2 bg-slate-300 overflow-x-hidden flex-col" id="navbar">
            <a class="text-amber-700 hover:text-amber-800 font-bold ml-8 text-lg" href="#home">{props.isEnglish ? "Home" : "French"}</a>
            <a class="text-amber-700 hover:text-amber-800 font-bold ml-8 text-lg" href="#">{props.isEnglish ? "About" : "French"}</a>
            <a class="text-amber-700 hover:text-amber-800 font-bold ml-8 text-lg" href="#">{props.isEnglish ? "News" : "French"}</a>
            <a class="text-amber-700 hover:text-amber-800 font-bold ml-8 text-lg" href="#">{props.isEnglish ? "Get Involved" : "French"}</a>
            <a class="text-amber-700 hover:text-amber-800 font-bold ml-8 text-lg" href="#">{props.isEnglish ? "Donate" : "French"}</a>
            <a class="text-amber-700 hover:text-amber-800 font-bold ml-8 text-lg" href="#">{props.isEnglish ? "Contact" : "French"}</a>

            <button onClick={props.changeLang} className='float-right mx-8 text-amber-700 hover:text-amber-800 font-bold text-lg'>
                {props.isEnglish ? "FR" : "EN"}</button>
        </div>
    )
}

export default NavBar;