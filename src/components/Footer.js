import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaPinterest} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full bg-lightgreen'>
            <div id="footer__content">
                <div id='footer__top'>
                    <div id='footer__header'>
                        <img src="./assets/img/logo.png" alt="logo" />
                        <p>Did you come here for something in particular or just general Riker</p>
                    </div>
                    <div id='blog__list'>
                        <ul>
                            <li>Blog</li>
                            <li>Travel</li>
                            <li>Technology</li>
                            <li>Lifestyle</li>
                            <li>Fashion</li>
                            <li>Business</li>
                        </ul>
                    </div>
                    <div id='quick__list'>
                        <ul>
                            <li>FAQ</li>
                            <li>Terms & cConditions</li>
                            <li>Support</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div id='newsletterSubscribe'>
                        <p>Subscribe For Newsletter</p>
                        <form action="">
                            <input type="email" placeholder='Your Email' />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    <div id='follow__links'>
                        <p>Follow On:</p>
                        <a href=""><FaFacebookF/></a>
                        <a href=""><FaTwitter/></a>
                        <a href=""><FaPinterest/></a>
                        <a href=""><FaInstagram/></a>
                    </div>
                </div>
                <div id="footer__bot">
                    <hr />
                    <p><a href="https://www.figma.com/file/Dd1ly6RJrFDMrwjUAOCIPi/Notebook---Minimal-Blog-Template-(Free)-(Community)" target="_blank" rel='noreferrer'>Figma Design</a> | <a href="https://github.com/VVKDO98" target="_blank" rel='noreferrer'>@VVKDO98</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;