import React from 'react';

function ServiceCard({word1, word2, image}) {
    return (
        <a href={'#process'} className={'group hover:shadow-mainGreenShadow w-full h-auto py-12 px-2 lg:px-0 lg:pl-8 bg-[#131313] rounded-xl flex flex-col items-center lg:items-start justify-center gap-6 cursor-pointer transition-all duration-500'}>
            <img className={'group-hover:scale-125 transition-all duration-500'} src={image} alt={'Service image'} />
            <h2 className={'text-xl sm:text-2xl font-bold text-white text-center lg:text-start group-hover:text-mainGreen tracking-wider transition-all duration-500'}>
                {word1} <br/> {word2}
            </h2>
        </a>
    );
}

export default ServiceCard;