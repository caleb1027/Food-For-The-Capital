import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counter = props => (
  <div className='flex-col flex items-center m-8'>

    <CountUp start={0} end={props.number} redraw={true} >
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} className='text-7xl w-96 text-center'/>
            </VisibilitySensor>
        )}
    </CountUp>
    <h1 className='text-3xl font-bold mt-1 w-84 text-center'>{props.title}</h1>
  </div>
);

export default Counter;