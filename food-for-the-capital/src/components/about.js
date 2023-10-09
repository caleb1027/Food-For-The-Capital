import React from 'react'; 
import Counter from "./counter"; 
import { Carousel } from 'react-bootstrap';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



const About = props => { 
    return( 
    <div>
        <Impact /> 
        <History />
        <Awards />
    </div> 
    ) 
}

const Impact = props => { 
    return( 
    <div className='flex-col flex items-center'>
        <h1 className='text-6xl font-bold m-8'>
            About Us
        </h1>
        <div>
            <Counter number={12000} title="Donations ($)" />
        </div> 
        <div>
            <Counter number={12421} title="lbs of Food Donated" />
        </div> 
        <div>
            <Counter number={10000} title="Volunteer Hours Provided" /> 
        </div> 
    </div> ) 
    } 

const History = props => {
    const EnglishText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
    return( 
    <div className='flex-col flex items-center mt-12'> 
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
        <div className='flex-col flex items-center mt-20'>
        <Accordion className='w-1/2' allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem >
                <AccordionItemHeading className='w-full text-center border-2 border-black'>
                    <AccordionItemButton className='text-4xl bg-gray-400 w-fill text-center h-16 flex-col flex align-middle items-center'>
                        <h1 className='text-center m-auto'>Example Award #1</h1>
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
            <AccordionItem>
                <AccordionItemHeading className='w-fulltext-center '>
                    <AccordionItemButton className='text-4xl  bg-gray-400 text-center h-16 w-full flex-col flex align-middle items-center'>
                    <h1 className='text-center m-auto'>Example Award #2</h1>
                    <i class="fa fa-chevron-down"></i>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
    <div> 

    </div> 
    ) 
} 
export default About;