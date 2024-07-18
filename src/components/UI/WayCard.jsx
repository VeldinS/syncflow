import React from 'react';

function WayCard({word1, word2, image}) {
    return (
        <a href={'#process'} className={'group relative bg-[#181818] rounded-xl w-full h-auto flex py-8 justify-center items-center cursor-pointer overflow-hidden'}>
            <img className={'absolute opacity-20 top-0 -bottom-12 -left-8 right-0 w-auto h-[100%] group-hover:scale-150 transition-all duration-1000'} src={image} alt={'Icon'}/>
            <h2 className={'text-2xl font-bold text-white opacity-70 group-hover:opacity-100 tracking-wider text-center transition-all duration-300'}>{word1} <br/> {word2}</h2>
        </a>
    );
}

export default WayCard;