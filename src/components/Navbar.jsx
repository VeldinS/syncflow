import React from 'react';
import ButtonPrimary from "./UI/ButtonPrimary.jsx";

import logoImg from "../assets/logo.png";
import NavLink from "./UI/NavLink.jsx";

function Navbar() {
    return (
        <nav className={'fixed top-0 z-50 w-screen h-auto px-[5%] py-5 flex flex-row justify-between items-center'}>
            <img className={'max-w-32'} src={logoImg} alt={'Company logo'} />
            <div className={'flex flex-row items-center justify-center gap-8'}>
                <NavLink name={'About Us'} link={'#about'} />
                <NavLink name={'Services'} link={'#services'} />
                <NavLink name={'Lates Work'} link={'#work'} />
                <NavLink name={'Testimonials'} link={'#testimonials'} />
            </div>
            <ButtonPrimary />
        </nav>
    );
}

export default Navbar;