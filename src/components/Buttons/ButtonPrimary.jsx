import React from 'react';

function ButtonPrimary({text, link}) {
    return (
        <a href={link} className={'group bg-mainGreen hover:bg-green-600 px-8 py-4 rounded-[32px] flex flex-row justify-center items-center hover:scale-105 transition-all duration-300'}>
            <p className={'text-defaultDark font-bold text-base leading-none'}>{text}</p>
        </a>
    );
}

export default ButtonPrimary;