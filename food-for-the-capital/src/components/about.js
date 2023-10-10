import React from 'react'; 
import { useState } from 'react';
import Counter from "./counter"; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import logo from './styles/FFC_Logo_Full/1.svg'
import './styles/carousel.css'

const About = props => { 
    return( 
    <div id='about' className='h-fit'>
        <Impact />
            <History />
            <Awards />
            <Partners />

        
    </div> 
    ) 
}

const Impact = props => { 
    return( 
    <div className='flex-col flex items-center'>
        <h1 className='text-6xl font-bold m-8'>
            About Us
        </h1>
        <div className='flex-row flex items-center align-middle'>
            <div>
                <Counter number={12000} title="Donations ($)" />
            </div> 
            <div>
                <Counter number={12421} title="lbs of Food" />
            </div> 
            <div>
                <Counter number={10000} title="Volunteer Hours" /> 
            </div> 
        </div>
    </div> ) 
    } 

const History = props => {
    const EnglishText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
    return( 
    <div className='flex-col flex items-center mt-12 bg-amber-100'> 
        <h1 className='text-5xl font-bold m-8'>
            Our History
        </h1>
        <p className='w-1/2 text-lg text-center mb-8'>
            {EnglishText}
        </p>
    </div> 
    ) 
} 
const Awards = props => { 
    const [expand1, setExpand1] = useState(false);
    let changeExpand1 = () => {
        setExpand1(!expand1)
    }

    const [expand2, setExpand2] = useState(false);
    let changeExpand2 = () => {
        setExpand2(!expand2)
    }

    return(
        <div className='flex-col flex items-center py-8 bg-yellow-50'>
            <h1 className='text-5xl font-bold py-8'>
            Awards
        </h1>
        <Accordion className='w-1/2 pb-8' allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem className='w-full text-left border-t-2 py-4 border-black'>
                <AccordionItemHeading >
                    <AccordionItemButton onClick={changeExpand1} className='text-3xl  w-fill text-center h-16 flex-col flex align-middle items-center'>
                        <h1 className='py-4 text-center m-auto font-bold'>Example Award #1</h1>
                        <i className={`fas ${expand1 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='m-4'>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='w-full text-left border-t-2 border-b-2 py-4 border-black'>
                <AccordionItemHeading >
                    <AccordionItemButton onClick={changeExpand2} className='text-3xl  w-fill text-center h-16 flex-col flex align-middle items-center'>
                        <h1 className='py-4 text-center m-auto font-bold'>Example Award #2</h1>
                        <i className={`fas ${expand2 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='m-4'>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
} 

const Partners = props => { 
    return( 
    <div className='flex-col flex items-center mt-12'> 
    <h1 className='text-5xl font-bold m-8'>
            Our Partners
        </h1>
        <PartnerCarousel />
    </div> 
    ) 
} 

function PartnerCarousel() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className='h-full w-full flex flex-col items-center'>
        <Carousel className='h-2/3 w-2/3'
            responsive={responsive}
            showDots={true}
            renderDotsOutside={true}
            >
            <div>
                <img src={logo} className='scale-125' />
                <h1 className='text-center text-2xl font-bold'>Logo 1</h1>
            </div>
            <div>
                <img src={logo} className='scale-125'/>
                <h1 className='text-center text-2xl font-bold'>Logo 2</h1>
            </div>
            <div>
                <img src={logo} className='scale-125'/>
                <h1 className='text-center text-2xl font-bold'>Logo 3</h1>
            </div>
            <div>
                <img src={logo} className='scale-125'/>
                <h1 className='text-center text-2xl font-bold'>Logo 4</h1>
            </div>
            <div>
                <img src={logo} className='scale-125'/>
                <h1 className='text-center text-2xl font-bold'>Logo 5</h1>
            </div>
        </Carousel>
        </div>
    );
  }

export default About;