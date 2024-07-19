import React from 'react';
import Step from "./UI/Step.jsx";

import step1Img from '../assets/step-contact.svg'
import step2Img from '../assets/step-details.svg'
import step3Img from '../assets/step-plan.svg'
import step4Img from '../assets/step-dev.svg'
import step5Img from '../assets/step-check.svg'
import step6Img from '../assets/step-finish.svg'
import backgroundImage from "../assets/Background-2.svg";

function Process() {

    return (
        <section id={'process'} className={'relative w-screen h-auto py-8 sm:py-16 px-[5%] flex flex-col justify-center items-center gap-2 sm:gap-16'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className={'z-0 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
            <h1 className={'text-white font-semibold text-3xl md:text-6xl leading-loose text-center'}>
                From Vision to Victory:<br/>
                <span className={'px-2 bg-black text-mainGreen font-bold text-4xl md:text-6xl'}>Our Process</span>
            </h1>
            <div className={'w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/20'}>
                <Step number={1}
                      icon={step1Img}
                      name1={'Initial '}
                      name2={'Contact'}
                      text={'We connect to understand your goals and requirements. This initial conversation sets the stage for a successful project.'}
                />
                <Step number={2}
                      icon={step2Img}
                      name1={'Detailed '}
                      name2={'Proposal'}
                      text={'We dive deeper into your needs and create a tailored proposal. This includes a clear outline of deliverables and timelines.'}
                />
                <Step number={3}
                      icon={step3Img}
                      name1={'Strategic '}
                      name2={'Planning'}
                      text={'Our team crafts a detailed plan, aligning strategies with your objectives. We set milestones and define the roadmap for execution.'}
                />
                <Step number={4}
                      icon={step4Img}
                      name1={'Design & '}
                      name2={'Development'}
                      text={'Our experts get to work on the design and development. This phase brings your vision to life with precision and creativity.'}
                />
                <Step number={5}
                      icon={step5Img}
                      name1={'Quality '}
                      name2={'Assurance'}
                      text={'We thoroughly test every aspect of the project. This ensures everything functions seamlessly and meets our high standards.'}
                />
                <Step number={6}
                      icon={step6Img}
                      name1={'Final '}
                      name2={'Delivery'}
                      text={'We present the completed project to you. After your approval, we provide all necessary support for a smooth launch.'}
                />
            </div>
        </section>
    );
}

export default Process;
