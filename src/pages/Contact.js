import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='py-10 w-full'>
            <div className='w-4/5 mx-auto flex flex-col items-center justify-start'>
                <h1 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Contact</span> Us</h1>
                <div className='mt-10 w-full'>
                    <div className='w-full'>
                        <form action="" className='flex flex-col gap-6'>
                            <div className='flex flex-col items-start gap-6'>
                                <input className='w-full form-input px-4 py-3 rounded-md border border-1 border-form placeholder:text-bgcolor placeholder:text-sm placeholder:font-normal' type="text" name="name" placeholder='Name' />
                                <input className='w-full form-input px-4 py-3 rounded-md border border-1 border-form placeholder:text-bgcolor placeholder:text-sm placeholder:font-normal' type="email" name="email" placeholder='Email' />
                            </div>
                            <div className='flex flex-col gap-6'>
                                <input className='w-full form-input px-4 py-3 rounded-md border border-1 border-form placeholder:text-bgcolor placeholder:text-sm placeholder:font-normal' type="text" name="subject" placeholder='Subject' />
                                <textarea className='w-full px-4 py-3 rounded-md border border-1 border-form placeholder:text-bgcolor placeholder:text-sm placeholder:font-normal' name="message" placeholder='Message'></textarea>
                            </div>
                            <input className='px-4 py-3 rounded-md bg-green text-white' type="button" value="Send message" />
                        </form>
                    </div>
                    <div className='mt-10'>
                        <p className='mb-5 text-base text-grey font-normal'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without</p>
                        <div className='mb-5 text-base text-grey font-normal flex flex-col'>
                            <a className='hover:text-green' href='mailto:blog.notebook@gmail.com'>blog.notebook@gmail.com</a>
                            <a className='hover:text-green' href='tel:886554654654'>+886554654654</a>
                            <p>9567 Turner Trace Apt. BC C3G8A4</p>
                        </div>
                        <div>
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
            </div>
        </div>
    );
};

export default Contact;