import React from 'react';
import backgroundImage from '../assets/Background.svg';
import ButtonPrimary from "./UI/ButtonPrimary.jsx";
import logoImg from "../assets/logo.png";

function Landing() {

    return (
        <section className={'relative w-screen h-screen px-[5%] flex flex-col lg:flex-row justify-center lg:justify-between items-center'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className={' z-20 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
            <div className={'z-30 relative w-full lg:w-1/2 flex flex-col justify-start items-start gap-8'}>
                <h1 className={'text-white font-semibold text-4xl md:text-6xl leading-tight'}>
                    <span className={'text-mainGreen font-bold'}>Creative</span> Digital <br/>
                    Marketing <span className={'px-2 bg-black text-mainGreen font-bold'}>Agency</span>
                </h1>
                <p className={'w-full lg:w-3/4 text-white text-xl'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum
                    dolor sit amet consetetur sadipscing elitr
                </p>
                <ButtonPrimary/>
            </div>

                <div className={'absolute lg:relative z-10 w-full lg:w-1/2 h-full flex flex-col justify-center items-center'}>
                    <iframe className={'w-full h-full'} src="https://lottie.host/embed/43ece56d-da47-4af2-b4d6-8bb202c54fd1/3YdSFWeTrx.json"></iframe>
                    <img className={'w-full h-auto absolute opacity-10'} src={logoImg} />
                </div>
        </section>
    );
}

export default Landing;