import React from 'react';

function ServiceCard({word1, word2, image}) {
    return (
        <a href={'#process'} className={'group w-full h-auto py-12 pl-8 bg-[#131313] rounded-xl flex flex-col items-start justify-center gap-6 cursor-pointer'}>
            <img className={'group-hover:scale-125 transition-all duration-500'} src={image} alt={'Service image'} />
            <h2 className={'text-2xl font-bold text-white tracking-wider'}>
                {word1} <br/> {word2}
            </h2>
        </a>
    );
}

export default ServiceCard;