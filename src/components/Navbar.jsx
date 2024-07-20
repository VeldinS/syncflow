import React, {useState} from 'react';
import ButtonPrimary from "./UI/ButtonPrimary.jsx";
import NavLink from "./UI/NavLink.jsx";

import logoImg from "../assets/logo.png";
import linkedinLogo from "../assets/linkedIn.svg";
import facebookLogo from "../assets/facebook.svg";
import instagramLogo from "../assets/instagram.svg";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={'fixed top-0 z-50 w-screen h-auto px-[5%] py-5 flex flex-row justify-between items-center'}>
            <img className={'max-w-32'} src={logoImg} alt={'Company logo'}/>
            <div className={'hidden lg:flex flex-row items-center justify-center gap-8'}>
                <NavLink name={'About Us'} link={'#about'}/>
                <NavLink name={'Services'} link={'#services'}/>
                <NavLink name={'Process'} link={'#process'}/>
                <NavLink name={'Testimonials'} link={'#testimonials'}/>
            </div>
            <div className={'hidden lg:flex'}>
                <ButtonPrimary text={'Contact'} link={'#contact'}/>
            </div>

            <div className="flex lg:hidden ">
                <div className={'w-[40px] flex flex-col items-stretch justify-center gap-2'} onClick={toggleMenu}>
                    <div className={'w-full h-[3px] bg-mainGreen rounded-2xl'}></div>
                    <div className={'w-full h-[3px] bg-mainGreen rounded-2xl'}></div>
                    <div className={'w-full h-[3px] bg-mainGreen rounded-2xl'}></div>
                </div>
                <div
                    className={`fixed top-0 right-0 w-screen h-screen bg-defaultDark flex flex-col justify-center items-start gap-16 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="absolute top-0 w-full py-5 px-[5%] flex flex-row justify-between items-center">
                        <img className={'max-w-32'} src={logoImg} alt={'Company logo'}/>
                        <div className={'relative w-[40px] flex flex-col items-stretch justify-center gap-0'}
                             onClick={toggleMenu}>
                            <div className={'absolute w-full h-[3px] bg-mainGreen rounded-2xl rotate-45'}></div>
                            <div className={'absolute w-full h-[3px] bg-mainGreen rounded-2xl -rotate-45'}></div>
                        </div>
                    </div>
                    <nav className="flex flex-col items-start px-[5%] justify-center gap-8 h-auto">
                        <a href={'#about'} className={'text-mainGreen text-4xl font-bold tracking-wider hover:text-white'} onClick={toggleMenu}>
                            About Us
                        </a>
                        <a href={'#services'} className={'text-mainGreen text-4xl font-bold tracking-wider hover:text-white'} onClick={toggleMenu}>
                            Services
                        </a>
                        <a href={'#process'} className={'text-mainGreen text-4xl font-bold tracking-wider hover:text-white'} onClick={toggleMenu}>
                            Process
                        </a>
                        <a href={'#testimonials'} className={'text-mainGreen text-4xl font-bold tracking-wider hover:text-white'} onClick={toggleMenu}>
                            Testimonials
                        </a>
                        <a href={'#contact'} className={'text-white text-4xl font-bold tracking-wider hover:text-white'} onClick={toggleMenu}>
                            Let's Chat
                        </a>
                    </nav>
                    <div className={'w-full flex flex-col justify-center items-center gap-4'}>
                        <div className={'w-full flex flex-row justify-center items-center gap-8'}>
                            <a href={'https://www.linkedin.com/'}>
                                <img className={'max-w-10 h-auto'} src={linkedinLogo} alt="LinkedIn logo"/>
                            </a>
                            <a href={'https://www.instagram.com/'}>
                                <img className={'max-w-10 h-auto'} src={instagramLogo} alt="Instagram logo"/>
                            </a>
                            <a href={'https://www.facebook.com/'}>
                                <img className={'max-w-10 h-auto'} src={facebookLogo} alt="Fcebook logo"/>
                            </a>
                        </div>
                        <a className={'text-white font-bold text-xl tracking-wider'} href={'mailto:info@synteq.dev'}>info@synteq.dev</a>
                        <p className={'text-mainGreen font-medium text-lg tracking-widest'}>©2023 - Synteq</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;