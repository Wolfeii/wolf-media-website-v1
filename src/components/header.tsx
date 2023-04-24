import { useScrollDirection } from '../utilities/scroll';
import Image from 'next/image'
import Logo from "../logo.svg"

export function Header(): JSX.Element {
    const scrollDirection = useScrollDirection();

    return (
        <div id='header' className={`header sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} shadow-navbar h-24 z-[2] bg-light transition-all duration-[750ms]`}>
            <div id='container' className='container items-center flex justify-between mx-auto max-w-[1600px] px-8'>
                <a id='logo' href='/' className='logo items-center flex'>
                    <Image priority src={Logo} className='logo h-24 w-24' alt=''/>
                    <div id='logo__text' className='logo__text font-bold leading-normal font-default text-dark flex'>
                        <span className='text-2xl uppercase relative'>Wolfeiii</span>
                        <span className='relative'>^</span>
                        <span className='text-2xl uppercase relative'>Media</span>
                    </div>
                </a>
                <nav>
                    <ul className='items-center flex font-default text-dark leading-none'>
                        <li>
                            <a className='font-semibold py-10 px-7 relative' title='Arbeten' href='/arbeten'>
                                Arbeten
                                <span className='text-main font-bold ml-1 opacity-0'>^</span>
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold py-10 px-7 relative' title='Tjänster' href='/tjänster'>
                                Tjänster
                                <span className='text-main font-bold ml-1 opacity-0'>^</span>
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold py-10 px-7 relative' title='Nyheter & Insikter' href='/nyheter'>
                                Nyheter & Insikter
                                <span className='text-main font-bold ml-1 opacity-0'>^</span>
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold py-10 px-7 relative' title='Karriärer' href='/karriärer'>
                                Karriärer
                                <span className='text-main font-bold ml-1 opacity-0'>^</span>
                            </a>
                        </li>
                        <li>
                            <a className='font-semibold py-10 px-7 relative' title='Kontakt' href='/kontakt'>
                                Kontakt
                                <span className='text-main font-bold ml-1 opacity-0'>^</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;