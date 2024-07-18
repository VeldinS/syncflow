import React from 'react';

function NavLink({link, name}) {
    return (
        <a href={link} className={'group flex flex-col items-stretch justify-center gap-1 cursor-pointer'}>
            <p className={'text-white text-lg leading-none font-semibold tracking-wider'}>
                {name}
            </p>
            <div className={'w-0 h-[2px] bg-mainGreen group-hover:w-full transition-all duration-300'}></div>
        </a>
    );
}

export default NavLink;