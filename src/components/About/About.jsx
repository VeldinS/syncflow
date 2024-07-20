import React from 'react';

import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";
import AboutBadge from "./components/AboutBadge.jsx";

import backgroundImage from "../../assets/Background-3.svg";
import award from '../../assets/award.svg'


function About() {
    return (
        <section id={'about'} className={'relative w-screen h-auto px-[5%] py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-0'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                    backgroundRepeat: 'no-repeat'
                }}
                className={' z-20 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
            <div className={'w-full h-auto flex justify-center items-center'}>
                <div className={'rounded-[32px] bg-[#352205] w-full lg:w-2/3 px-4 h-full py-8 lg:py-0 aspect-auto lg:aspect-square flex flex-col justify-center items-stretch gap-6'}>
                    <AboutBadge name={'Proven Expertise'}
                                text={'Years of successful projects. Reliable, high-quality solutions.'}
                    />
                    <div className={'w-full h-[2px] bg-mainGreen/50'}></div>
                    <AboutBadge name={'Innovative Solutions'}
                                text={'Latest technologies for creative and effective outcomes.'}
                    />
                    <div className={'w-full h-[2px] bg-mainGreen/50'}></div>
                    <AboutBadge name={'Client-Centric'}
                                text={"You don't like results? That's fine. Re-doing it right away."}
                    />
                </div>
            </div>
            <div className={'z-30 relative w-full flex flex-col justify-center items-center lg:items-start gap-8 order-first lg:order-last'}>
                <h1 className={'text-white font-semibold text-4xl md:text-6xl leading-tight text-center lg:text-start'}>
                    <span className={'text-mainGreen font-bold'}>Why</span> Should <br/>
                    You Choose <span className={'px-2 bg-black text-mainGreen font-bold'}>Us</span>
                </h1>
                <p className={'w-full text-white text-xl text-center lg:text-start'}>
                    Our commitment to excellence and innovation sets us apart. We prioritize your needs and deliver tailored solutions that drive results.
                </p>
                <div className={'lg:flex hidden'}>
                    <ButtonPrimary text={'Our Process of Working'} link={'#process'}/>
                </div>
            </div>
        </section>
    );
}

export default About;