import React from 'react';
import award from "../../../assets/award.svg";

function AboutBadge({name, text}) {
    return (
        <div className={'flex flex-row justify-start items-center gap-4'}>
            <img className={'w-16'} src={award} alt={'Award icon'}/>
            <div className={'flex flex-col justify-center items-start gap-2'}>
                <p className={'text-white bg-defaultDark px-2 text-xl sm:text-2xl font-semibold tracking-wider'}>
                    {name}
                </p>
                <p className={'text-white text-sm sm:text-base font-normal tracking-wide'}>
                    {text}
                </p>
            </div>
        </div>);
}

export default AboutBadge;