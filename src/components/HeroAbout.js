import React from 'react';

const HeroAbout = () => {
    return (
        <div className='py-10 w-full flex flex-col items-center justify-center bg-bannercolor'>
            <div className='w-4/5 mx-auto text-justify flex flex-col items-center justify-center'>
                <h1 className='mb-8 text-3xl text-justify text-black font-semibold'><span className='text-white bg-green py-0.5 px-2'>Notebook is a place</span> where you can find your perfect blogs</h1>
                <p className='mb-6 text-base text-justify font-normal'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and compelling materials. Globally iterate parallel content</p>
                <h2 className='mb-4 text-lg self-start font-medium'>The best ideas can change who we are.</h2>
                <p className='text-base text-justify font-normal'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for</p>
            </div>
            <div className='mt-10 w-4/5 mx-auto'>
                <h2 className='text-3xl text-justify text-black font-semibold'><span className='text-white bg-green py-0.5 px-2'>We are</span> featured on</h2>
                <div className='mt-12 w-full flex flex-row flex-wrap justify-between gap-10'>
                    <img className='w-2/5' src="./assets/img/wordpress.webp" alt="wordpress" />
                    <img className='w-2/5' src="./assets/img/unsplash.webp" alt="unsplash" />
                    <img className='w-2/5' src="./assets/img/medium.webp" alt="medium" />
                    <img className='w-2/5' src="./assets/img/grammarly.webp" alt="grammarly" />
                    <img className='w-2/5' src="./assets/img/blogger.webp" alt="blogger" />
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;