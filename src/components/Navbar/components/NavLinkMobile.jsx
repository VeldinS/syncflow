import React from 'react';

function NavLinkMobile({link, name, onClick}) {
    return (
        <a href={link} className={'text-mainGreen text-4xl font-bold tracking-wider hover:text-white'}
           onClick={onClick}>
            {name}
        </a>);
}

export default NavLinkMobile;