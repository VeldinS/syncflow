import React from 'react';

function ClientCard({name, text, link}) {
    return (
        <a href={link} target={'_blank'}
           className={'group relative w-full h-auto px-8 py-5 bg-[#131313] rounded-[32px] overflow-hidden flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-500'}>
            <p className={'text-white text-3xl font-bold widest'}>
                {name}
            </p>
            <p className={'text-white/50 text-xl font-semibold wider italic text-center group-hover:text-white transition-all duration-500'}>
                {text}
            </p>

        </a>
    );
}

export default ClientCard;