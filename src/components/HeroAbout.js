import React from 'react';

const HeroAbout = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-bannercolor'>
            <div className='w-4/5 text-justify flex flex-col items-center justify-center gap-8'>
                <h1 className='text-3xl text-center text-black font-semibold'><span className='text-white bg-green py-0.5 px-2'>Notebook is a place</span> where you can find your perfect blogs</h1>
                <p className='text-base text-center font-normal'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and compelling materials. Globally iterate parallel content</p>
                <h2 className='text-lg text-center font-medium'>The best ideas can change who we are.</h2>
                <p className='text-base text-center font-normal'>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for</p>
            </div>
            <div>
                <h2 className='text-3xl text-center text-black font-semibold'><span className='text-white bg-green py-0.5 px-2'>We are</span> featured on</h2>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;