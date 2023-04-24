import React, { useState, useEffect } from 'react';
import Button, { Type } from './common/button';


export const Footer = () => {
    return (
        <div className='footer bg-[#1c1c1c] text-[#f5f5f2] '>
            <div className='mx-auto max-w-[1600px] px-8'>
                <div id='footer-top' className='grid grid-cols-3 gap-[clamp(3rem,2.273rem + 3.64vw,5rem)] py-20'>
                    <div id='newsletter' className='items-start flex flex-col text-[1.125rem]'>
                        <h6 className='max-w-[19ch] text-3xl  font-normal text-[clamp(1.5rem,1.318rem + .91vw,2rem)] leading-tight mt-0 mb-6'>
                            <span>Gå med i våra</span><br/>
                            <strong className='text-transparent bg-clip-text animate-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
                                <span>nyhetsbrev &</span><br/>
                                <span>insikter</span>
                            </strong>
                        </h6>
                        <form className='w-full max-w-xs'>
                            <div className='pt-6 pb-0'>
                                <input className='mb-4 block transition-shadow delay-150 bg-transparent' type={'email'} placeholder="E-post address" name='email' value={""} required={false}/>
                                <span className='text-transparent h-px text-white bg-clip-text animate-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'/>
                            </div>
                            <div className='flex justify-end box-border'>
                                <Button text='Prenumenera' href='/' type={Type.SECONDARY}/>
                            </div>
                        </form>
                    </div>
                    <div id='contact' className='font-default text-lg'>
                        <p className=''>
                            <strong>Ring oss</strong>
                            <br/>
                            0725049522
                        </p>
                        <p className='mt-8'>
                            <strong>Skicka ett mail</strong>
                            <br/>
                            <a className='hover:text-transparent hover:bg-clip-text underline hover:animate-text hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400' href='mailto:info@wolfeiii.com'>info@wolfeiii.com</a>
                        </p>
                        <p className='mt-8'>
                            <strong>Följ oss</strong>
                        </p>
                    </div>
                    <div id='locations' className='font-default text-lg'>
                        <p className=''>
                            <strong>Visby</strong>
                            <br/>
                            Lojsta Asa 720, 623 59 Hemse
                        </p>
                        <p className='mt-8'>
                            <strong>Helsingborg</strong>
                            <br/>
                            Lojsta Asa 720, 623 59 Hemse
                        </p>
                        <p className='mt-8'>
                            <strong>Stockholm</strong>
                            <br/>
                            Lojsta Asa 720, 623 59 Hemse
                        </p>
                    </div>
                </div>
                <div id='footer-bottom' className='flex items-center flex-row justify-between shadow-footer py-8 '>
                    <nav className='order-2'>
                        <ul className='flex m-0 p-0 flex-row'>
                            <li className='mr-4'>
                                <a className='underline' href='/kontakt'>Kontakt</a>
                            </li>
                            <li className='before:content-["\2219"] before:mr-4 ml-4'>
                                <a className='underline' href='/jobb'>Jobb</a>
                            </li>
                            <li className='before:content-["\2219"] before:mr-4 ml-4'>
                                <a className='underline' href='/villkor'>Villkor</a>
                            </li>
                            <li className='before:content-["\2219"] before:mr-4 ml-4'>
                                <a className='underline' href='/integritetspolicy'>Integritetspolicy</a>
                            </li>
                            <li className='before:content-["\2219"] before:mr-4 ml-4'>
                                <a className='underline' href='/cookies'>Cookie Policy</a>
                            </li>
                        </ul>
                    </nav>
                    <div>© 2023 Wolfeiii.com</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;