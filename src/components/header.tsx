
import { useScrollDirection } from '../utilities/scroll';
import Image from 'next/image'
import Logo from "../logo.svg"
import { useState } from 'react';
import { Menu, X } from 'react-feather';

const LINKS = [
    {name: 'Arbeten', to: '/arbeten'},
    {name: 'Tjänster', to: '/tjanster'},
    {name: 'Nyheter & Insikter', to: '/nyheter'},
    {name: 'Karriärer', to: '/karriarer'},
    {name: 'Kontakt', to: '/kontakt'}
]

export function Header(): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollDirection = useScrollDirection();

    return (
        <div id='header' className={`header sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} shadow-navbar lg:h-24 h-auto z-[2] bg-light px-[3rem] lg:px-[4rem] transition-all duration-[750ms]`}>
            <div id='container' className='container items-center flex justify-between max-w-[1600px] w-full py-4 lg:py-0'>
                <a id='logo' href='/' className='logo items-center flex lg:static lg:z-0 relative z-5'>
                    <Image priority src={Logo} className='logo h-24 w-24' height={24}  width={24} alt=''/>
                    <div id='logo__text' className='logo__text font-bold leading-normal font-default text-dark flex'>
                        <span className='text-2xl uppercase relative'>Wolfeiii</span>
                        <span className='relative'>^</span>
                        <span className='text-2xl uppercase relative'>Media</span>
                    </div>
                </a>
                <div className='relative flex flex-1 justify-end lg:hidden lg:flex-initial lg:static lg:z-0 lg:bg-white bg-transparent relative z-5'>
                    <button
                        type="button"
                        className='h-8 w-8'
                        aria-controls='mobile-menu'
                        aria-expanded={menuOpen ? 'true' : false}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className='sr-only'>
                            {menuOpen ? 'Stäng meny' : 'Öppna meny'}
                        </span>    
                        <Menu data-hide={menuOpen}/>
                        <X data-hide={!menuOpen}/>
                    </button>
                </div>
                <nav className='lg:h-auto lg:visible lg:w-auto w-full invisible'>
                    <ul className='items-center flex font-default text-dark leading-none'>
                        <li>
                            {LINKS.map((link) => {
                                return <a key={link.name} className='font-semibold py-10 px-7 relative' title={link.name} href={link.to}>
                                    {link.name}
                                    <span className='text-main font-bold ml-1 opacity-0'>^</span>
                                </a>
                            })}
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
    );
};

export default Header;