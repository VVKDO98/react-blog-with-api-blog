import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaPinterest} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full bg-lightgreen'>
            <div id="footer__content" className='w-4/5 mx-auto py-12 text-base font-normal text-grey lg:pt-28 lg:pb-7'>
                <div id='footer__top' className='mb-10  lg:flex lg:flex-row lg:justify-between lg:gap-28'>
                    <div id='footer__header' className='mb-6 lg:w-1/5'>
                        <img className='mb-6' src="/assets/img/logo.png" alt="logo"/>
                        <p>Did you come here for something in particular or just general Riker</p>
                    </div>
                    <div id='blog__list' className='mb-6 lg:w-1/5'>
                        <ul>
                            <li className='text-lg font-semibold text-black'>Blog</li>
                            <li className='hover:text-green'><Link to={"/categories/1"}>Travel</Link></li>
                            <li className='hover:text-green'><Link to={"/categories/2"}>Food</Link></li>
                            <li className='hover:text-green'><Link to={"/categories/3"}>Technology</Link></li>
                            <li className='hover:text-green'><Link to={"/categories/4"}>Lifestyle</Link></li>
                            <li className='hover:text-green'><Link to={"/categories/5"}>Healthcare</Link></li>
                        </ul>
                    </div>
                    <div id='quick__list' className='mb-6 lg:w-1/5'>
                        <ul>
                            <li className='text-lg font-semibold text-black'>Quick Links</li>
                            <li className='hover:text-green'>FAQ</li>
                            <li className='hover:text-green'>Terms & cConditions</li>
                            <li className='hover:text-green'>Support</li>
                            <li className='hover:text-green'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='lg:w-2/5'>
                        <div id='newsletterSubscribe' className='mb-6'>
                            <p className='text-lg font-semibold mb-2 text-black'>Subscribe For Newsletter</p>
                            <form action="">
                                <input className='h-11 w-2/3 rounded-l pl-5 bg-bgnews placeholder-grey' type="email" placeholder='Your Email' />
                                <input className='h-11 w-1/3 rounded-r bg-green text-white' type="submit" value="Subscribe" />
                            </form>
                        </div>
                        <div id='follow__links' className='mb-6'>
                            <p className='text-lg font-semibold mb-2 text-black'>Follow On:</p>
                            <div className='flex flex-row gap-5'>
                                <a href="/"><FaFacebookF  className='text-2xl p-1 outline outline-1 rounded text-grey hover:text-white hover:bg-green' /></a>
                                <a href="/"><FaTwitter  className='text-2xl p-1 outline outline-1 rounded text-grey hover:text-white hover:bg-green' /></a>
                                <a href="/"><FaPinterest  className='text-2xl p-1 outline outline-1 rounded text-grey hover:text-white hover:bg-green' /></a>
                                <a href="/"><FaInstagram  className='text-2xl p-1 outline outline-1 rounded text-grey hover:text-white hover:bg-green' /></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="footer__bot">
                    <hr className='mb-6 border-grey border-opacity-20'/>
                    <p className='text-center text-xs'><a href="https://www.figma.com/file/Dd1ly6RJrFDMrwjUAOCIPi/Notebook---Minimal-Blog-Template-(Free)-(Community)" target="_blank" rel='noreferrer'>Figma Design</a> | <a href="https://github.com/VVKDO98" target="_blank" rel='noreferrer'>@VVKDO98</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;