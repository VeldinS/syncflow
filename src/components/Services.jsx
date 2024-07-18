import React from 'react';
import WayCard from "./UI/WayCard.jsx";

import softwareDevIcon from "../assets/software.svg";
import noCodeIcon from "../assets/nocode.svg";
import marketingIcon from "../assets/marketing.svg";

function Services() {
    return (
        <section className={'w-screen h-auto px-[5%] flex flex-col items-start justify-start gap-16'}>
            <div className={'w-full h-auto flex flex-col items-start justify-start gap-4'}>
                <h2 className={'text-2xl font-bold text-white tracking-wider'}>Our ways</h2>
                <div className={'w-full grid grid-cols-3 gap-8'}>
                    <WayCard word1={'Software'} word2={'Development'} image={softwareDevIcon}/>
                    <WayCard word1={'No-code'} word2={'Development'} image={noCodeIcon}/>
                    <WayCard word1={'Marketing &'} word2={'Analytics'} image={marketingIcon}/>
                </div>
            </div>
        </section>
    );
}

export default Services;