import React from 'react';
import backgroundImage from '../assets/Background.svg';

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
                className={'absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
        </section>
    );
}

export default Landing;