import React from 'react';
import ClientCard from "./UI/ClientCard.jsx";

function Testimonials() {
    return (
        <section id={'testimonials'} className={'relative w-screen h-auto py-12 sm:py-16 px-[5%] flex flex-col justify-center items-center gap-8'}>
            <h1 className={'relative z-10 text-white font-semibold text-4xl md:text-6xl leading-tight text-center'}>
                <span className={'px-2 bg-black text-mainGreen font-bold'}>Our</span> Efforts: <br/>
                Their <span className={'px-2 bg-black text-mainGreen font-bold'}>Testimonials</span>
            </h1>
            <div className={'w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-12'}>
                <ClientCard name={'Gema'}
                            text={'"Working with this agency transformed our online presence. Their modern design and intuitive navigation significantly enhanced our customers shopping experience."'}
                            link={'https://gema.ba/'}
                />
                <ClientCard name={'CST'}
                            text={'"Our website now perfectly showcases our services thanks to this agency\'s expertise. Their attention to detail and SEO optimization have increased our visibility and client engagement."'}
                            link={'https://construct-it.vercel.app/'}
                />
                <ClientCard name={'DriveZ'}
                            text={'"This agency\'s comprehensive approach brought our vision to life, from concept to deployment. Their skillful use of modern tools resulted in a seamless and visually stunning online car dealership."'}
                            link={'https://drive-zone.vercel.app/'}
                />
            </div>
        </section>
    );
}

export default Testimonials;