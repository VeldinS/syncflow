import React from 'react';
import ButtonPrimary from "./UI/ButtonPrimary.jsx";
import backgroundImage from "../assets/Background.svg";
import logoImg from "../assets/logo.png";
import contactImg from "../assets/message.svg";

function Footer() {
    return (
        <footer id={'contact'} className={'relative w-screen h-auto py-32 px-[5%] grid grid-cols-1 lg:grid-cols-2'}>
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
                <div className={'w-full flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-8'}>
                    <ButtonPrimary/>
                    <p className={'text-white text-xl font-light'}>or</p>
                    <div className={'flex flex-row items-center justify-center gap-2'}>
                        <img src={contactImg} alt={'Logo icon'}/>
                        <a href={'mailto:info@synteq.dev'} className={'text-white text-xl'}>info@synteq.dev</a>
                    </div>
                </div>
            </div>
            <div className={'absolute lg:relative z-10 w-full h-full flex flex-col justify-center items-center'}>
                <img className={'w-full h-auto absolute opacity-10'} src={logoImg}/>
            </div>
        </footer>
    );
}

export default Footer;