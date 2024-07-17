import React from 'react';

function ButtonPrimary() {
    return (
        <a href={'#contact'} className={'bg-mainGreen px-8 py-4 rounded-[32px] flex flex-row justify-center items-center'}>
            <p className={'text-defaultDark font-bold text-base leading-none'}>Contact us</p>
        </a>
    );
}

export default ButtonPrimary;