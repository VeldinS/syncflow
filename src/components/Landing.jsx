import React from 'react';
import backgroundImage from '../assets/Background.svg';
import ButtonPrimary from "./UI/ButtonPrimary.jsx";

function Landing() {
    return (
        <section className={'relative w-screen h-screen px-[5%] flex flex-row justify-between items-center'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className={' z-0 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>

            <div className={'z-10 relative w-1/2 flex flex-col justify-start items-start gap-8'}>
                <h1 className={'text-white font-semibold text-6xl leading-tight'}>
                    Creative Digital <br/> Marketing Agency
                </h1>
                <p className={'w-3/4 text-white text-xl'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr
                </p>
                <ButtonPrimary />
            </div>

            <div className={'relative z-10 w-1/2 flex flex-col justify-center items-center'}>
                <iframe src="https://lottie.host/embed/e787e60a-31ff-4fb5-bdc0-01b8cefe7c3b/CiNKcwabqc.json"></iframe>
            </div>

        </section>
    );
}

export default Landing;