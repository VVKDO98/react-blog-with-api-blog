import React from 'react';

const HeroAbout = () => {
    return (
        <div className='py-10 w-full flex flex-col items-center justify-center bg-bannercolor'>
            <div className='w-4/5 mx-auto text-justify flex flex-col items-center justify-center lg:w-3/5 xl:w-3/5 2xl:w-2/5'>
                <h1 className='mb-8 text-3xl text-justify text-black font-semibold lg:text-center'><span className='text-white bg-green py-0.5 px-2'>Notebook is a place</span> where you can find your perfect blogs</h1>
                <p className='mb-6 text-base text-justify font-normal lg:text-center'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and compelling materials. Globally iterate parallel content</p>
                <h2 className='mb-4 text-lg self-start font-medium lg:text-center lg:self-auto'>The best ideas can change who we are.</h2>
                <p className='text-base text-justify font-normal lg:text-center'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for</p>
            </div>
            <div className='mt-10 w-4/5 mx-auto lg:mt-24'>
                <h2 className='mb-12 text-3xl text-justify text-black font-semibold lg:text-center'><span className='text-white bg-green py-0.5 px-2'>We are</span> featured on</h2>
                <div className='w-full flex flex-row flex-wrap justify-between gap-10 lg:flex-nowrap lg:gap-10 lg:items-center lg:justify-center'>
                    <img className='w-2/5 lg:w-1/12 xl:w-1/12' src="./assets/img/wordpress.webp" alt="wordpress" />
                    <img className='w-2/5 lg:w-1/12 xl:w-1/12' src="./assets/img/unsplash.webp" alt="unsplash" />
                    <img className='w-2/5 lg:w-1/12 xl:w-1/12' src="./assets/img/medium.webp" alt="medium" />
                    <img className='w-2/5 lg:w-1/12 xl:w-1/12' src="./assets/img/grammarly.webp" alt="grammarly" />
                    <img className='w-2/5 lg:w-1/12 xl:w-1/12' src="./assets/img/blogger.webp" alt="blogger" />
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;