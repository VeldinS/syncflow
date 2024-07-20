import React from 'react';

import WayCard from "./UI/WayCard.jsx";
import ServiceCard from "./UI/ServiceCard.jsx";

import softwareDevIcon from "../assets/software.svg";
import noCodeIcon from "../assets/nocode.svg";
import marketingIcon from "../assets/marketing.svg";
import seoIcon from "../assets/seo.svg";
import webIcon from "../assets/web.svg";
import videoIcon from "../assets/video.svg";
import contentIcon from "../assets/content.svg";
import socialIcon from "../assets/socialMedia.svg";
import ppcIcon from "../assets/ppc.svg";
import backgroundImage from "../assets/Background-3.svg";


function Services() {
    return (
        <section id={'services'} className={'relative w-screen h-auto py-16 px-[5%] flex flex-col items-start justify-start gap-24'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat'
                }}
                className={'z-0 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
            <div className={'relative z-10 w-full h-auto flex flex-col items-center lg:items-start justify-start gap-4'}>
                <h2 className={'text-4xl font-bold text-white tracking-wider'}>What We <span
                    className={'px-2 bg-black text-mainGreen'}>Offer</span></h2>
                <div className={'w-full grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8'}>
                    <WayCard word1={'Software'} word2={'Development'} image={softwareDevIcon}/>
                    <WayCard word1={'No-code'} word2={'Development'} image={noCodeIcon}/>
                    <WayCard word1={'Marketing &'} word2={'Analytics'} image={marketingIcon}/>
                </div>
            </div>
            <div className={'relative z-10 w-full h-auto flex flex-col items-start justify-start gap-4 sm:gap-8'}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="w-full flex flex-col items-start justify-center gap-6 order-first lg:order-last">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-wider">
                            Our <span className="px-2 bg-black text-mainGreen">Digital</span> <br/>
                            Marketing <span className="px-2 bg-black text-mainGreen">Expertise</span>
                        </h2>
                        <p className="w-full lg:w-3/4 text-white text-xl">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem
                            ipsum dolor sit
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-8 order-last lg:order-none">
                        <ServiceCard word1="Search" word2="Engine Optimization" image={seoIcon}/>
                        <ServiceCard word1="Website design &" word2="Development" image={webIcon}/>
                    </div>
                </div>

                <div className={'w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8'}>
                    <ServiceCard word1={'Digital'} word2={'Marketing'} image={videoIcon}/>
                    <ServiceCard word1={'Content'} word2={'Writing'} image={contentIcon}/>
                    <ServiceCard word1={'Social media'} word2={'Marketing'} image={socialIcon}/>
                    <ServiceCard word1={'Pay per'} word2={'click(PPC)'} image={ppcIcon}/>
                </div>
            </div>
        </section>
    );
}

export default Services;