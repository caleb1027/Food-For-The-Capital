import React from 'react'; 
import Counter from "./counter"; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import logo from './styles/FFC_Logo_Full/1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    return(
        <div className='flex-col flex items-center py-12 bg-yellow-50'>
            <h1 className='text-5xl font-bold m-8'>
            Awards
        </h1>
        <Accordion className='w-1/2' allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem className='w-full text-left border-t-2 border-black'>
                <AccordionItemHeading >
                    <AccordionItemButton className='text-4xl  w-fill text-center h-16 flex-col flex align-middle items-center'>
                        <h1 className='py-4 text-center m-auto font-bold'>Example Award #1</h1>
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
            <AccordionItem className='w-full text-left border-b-2 border-black'>
                <AccordionItemHeading className='w-fulltext-center '>
                    <AccordionItemButton className='text-4xl border-t-2 border-black text-center h-16 w-full flex-col flex align-middle items-center'>
                    <h1 className='p-2 text-center m-auto font-bold'>Example Award #2</h1>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='p-4'>
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
    <div className='flex-col flex items-center mt-20'> 
    <h1 className='text-5xl font-bold m-8'>
            Our Partners
        </h1>
        <PartnerCarousel />
    </div> 
    ) 
} 

function PartnerCarousel() {
    return (
        <Carousel className='w-1/2' showThumbs={false} dynamicHeight={false}>
        <div className=''>
            <img src={logo} className='h-full w-full'/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={logo} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={logo} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    );
  }

export default About;