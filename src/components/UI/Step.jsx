import React from 'react';

function Step({name1, name2, text, icon, number}) {
    return (
        <a href={'#contact'} className={'group relative p-8 w-full h-auto bg-defaultDark aspect-square flex flex-col justify-start items-start gap-6 cursor-pointer'}>
            <div className={'flex flex-row justify-center items-center gap-4'}>
                <img className={'w-16'} src={icon} alt="Step icon"/>
                <h2 className={'text-mainGreen font-semibold text-3xl md:text-4xl leading-tight'}>
                    <span className={'text-white'}>{name1}</span>
                    {name2}
                </h2>
            </div>
            <p className={'text-white w-3/4 text-lg leading-normal font-normal tracking-wider'}>
                {text}
            </p>
            <p className={'absolute z-0 right-12 bottom-0 text-[256px] font-bold text-mainGreen/10 group-hover:text-mainGreen transition-all duration-1000'}>
                {number}
            </p>
        </a>
    );
}

export default Step;