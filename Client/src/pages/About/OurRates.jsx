import React from 'react';
import RateBox from './RateBox';


function OurRates() {
    return (
        <div className='flex flex-col justify-center items-center gap-16'>
            <h1 className='font-barlow text-7xl flex justify-center items-center'>Our Rates</h1>

            <div className="flex flex-col gap-10">
                <RateBox heading='Talk therapy' text='Online or in-person, this is designated for individuals to process and explore their thoughts. Typically, meetings are weekly or bi-weekly.' duration='60' price='2000' />
                <RateBox heading='Psychiatric session' text='Online or in-person, this time will be spent evaluating your physical and mental health to provide medication to alleviate mental health symptoms. This does not include talk therapy.' duration='60' price='2000'/>
                <RateBox heading='Coaching session' text='Online or in-person, this session will help you with what you care most about and develop a plan to achieve personal and professional goals.' duration='60' price='2000'/>
                <RateBox heading='Acupuncture session' text='In-person only, this session helps alleviate pain and treat various physical, mental, and emotional conditions.' duration='60' price='2000'/>
            </div>

        </div>
    );
}

export default OurRates;
