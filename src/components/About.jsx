import React from 'react';
import backgroundImage from "../assets/Background-3.svg";
import ButtonPrimary from "./UI/ButtonPrimary.jsx";

import award from '../assets/award.svg'

function About() {
    return (
        <section className={'relative w-screen h-auto px-[5%] py-16 grid grid-cols-2  items-center'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat'
                }}
                className={' z-20 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
            <div className={'w-full h-auto flex justify-center items-center'}>
                <div
                    className={'rounded-[32px] bg-[#352205] w-2/3 px-4 h-full aspect-square flex flex-col justify-center items-stretch gap-6'}>
                    <div className={'flex flex-row justify-start items-center gap-4'}>
                        <img className={'w-16'} src={award} alt={'Award icon'}/>
                        <div className={'flex flex-col justify-center items-start gap-2'}>
                            <p className={'text-white bg-defaultDark px-2 text-2xl font-semibold tracking-wider'}>
                                Proven Expertise
                            </p>
                            <p className={'text-white text-base font-normal tracking-wide'}>
                                Years of successful projects. Reliable, high-quality solutions.
                            </p>
                        </div>
                    </div>
                    <div className={'w-full h-[2px] bg-mainGreen/50'}></div>
                    <div className={'flex px-4 flex-row justify-start items-center gap-4'}>
                        <img className={'w-16'} src={award} alt={'Award icon'}/>
                        <div className={'flex flex-col justify-center items-start gap-2'}>
                            <p className={'text-white bg-defaultDark px-2 text-2xl font-semibold tracking-wider'}>
                                Innovative Solutions
                            </p>
                            <p className={'text-white text-base font-normal tracking-wide'}>
                                Latest technologies for creative and effective outcomes.
                            </p>
                        </div>
                    </div>
                    <div className={'w-full h-[2px] bg-mainGreen/50'}></div>
                    <div className={'flex px-4 flex-row justify-start items-center gap-4'}>
                        <img className={'w-16'} src={award} alt={'Award icon'}/>
                        <div className={'flex flex-col justify-center items-start gap-2'}>
                            <p className={'text-white bg-defaultDark px-2 text-2xl font-semibold tracking-wider'}>
                                Client-Centric
                            </p>
                            <p className={'text-white text-base font-normal tracking-wide'}>
                                You don't like results? That's fine. Re-doing it right away.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'z-30 relative w-full flex flex-col justify-center items-start gap-8'}>
                <h1 className={'text-white font-semibold text-4xl md:text-6xl leading-tight'}>
                    <span className={'text-mainGreen font-bold'}>Why</span> Should <br/>
                    You Choose <span className={'px-2 bg-black text-mainGreen font-bold'}>Us</span>
                </h1>
                <p className={'w-full text-white text-xl'}>
                    Our commitment to excellence and innovation sets us apart. We prioritize your needs and deliver tailored solutions that drive results.
                </p>
                <ButtonPrimary text={'Our Process of Working'} link={'#process'}/>
            </div>
        </section>
    );
}

export default About;