import React from 'react';
import ButtonPrimary from "./UI/ButtonPrimary.jsx";
import backgroundImage from "../assets/Background-2.svg";
import logoImg from "../assets/logo.png";
import contactImg from "../assets/message.svg";

function Footer() {
    return (
        <footer id={'footer'} className={'relative bg-black w-screen h-auto py-24 px-[5%] grid grid-cols-1 lg:grid-cols-2'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className={'z-0 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
            <div className={'relative z-10 w-full flex flex-col justify-start items-center lg:items-start gap-8'}>
                <h1 className={'text-white font-semibold text-4xl md:text-6xl leading-tight text-center lg:text-start'}>
                    <span className={'text-mainGreen font-bold'}>Creative</span> Digital <br/>
                    Marketing <span className={'text-mainGreen font-bold'}>Agency</span>
                </h1>
                <p className={'w-full lg:w-3/4 text-white text-xl text-center lg:text-start'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum
                    dolor sit amet consetetur sadipscing elitr
                </p>
                <div className={'relative z-10 w-full flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-8'}>
                    <ButtonPrimary/>
                    <p className={'text-white text-xl font-light'}>or</p>
                    <div className={'flex flex-row items-center justify-center gap-2'}>
                        <img src={contactImg} alt={'Logo icon'}/>
                        <a href={'mailto:info@synteq.dev'} className={'text-white text-xl hover:text-mainGreen transition-all duration-300'}>info@synteq.dev</a>
                    </div>
                </div>
            </div>
            <div className={'absolute lg:relative z-0 w-full h-full flex flex-col justify-end items-center md:items-end'}>
                <img className={'absolute w-full h-auto opacity-10'} src={logoImg}/>
                <p className={'mb-4 text-mainGreen font-medium text-lg tracking-widest'}>©2023</p>
            </div>
        </footer>
    );
}

export default Footer;